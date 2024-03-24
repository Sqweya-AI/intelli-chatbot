// import { ConversationalRetrievalQAChain } from "langchain/chains";
// import { getVectorStore } from "./vector-store";
// import { getPinecone } from "./pinecone-client";
// import { PineconeClient } from "@pinecone-database/pinecone";
// import {
//   StreamingTextResponse,
//   experimental_StreamData,
//   LangChainStream,
// } from "ai";
// import { streamingCohere, nonStreamingCohere } from "./llm";
// import { STANDALONE_QUESTION_TEMPLATE, QA_TEMPLATE } from "./prompt-templates";

// type callChainArgs = {
//   question: string;
//   chatHistory: string;
// };


// export async function callChain({ question, chatHistory }: callChainArgs) {
//   try {
//     // Cohere recommendation
// const sanitizedQuestion = question.trim().replaceAll("\n", " ");
//     const pineconeClient = await getPinecone();
//     const vectorStore = await getVectorStore(pineconeClient);
//     const { stream, handlers } = LangChainStream({
//       experimental_streamData: true,
//     });
//     const data = new experimental_StreamData();

//     // Use the non-streaming model for question generation
// const questionGeneratorChain = ConversationalRetrievalQAChain.fromLLM(
//       nonStreamingCohere,
//       vectorStore.asRetriever(),
//       {
//         qaTemplate: QA_TEMPLATE,
//         questionGeneratorTemplate: STANDALONE_QUESTION_TEMPLATE,
//         returnSourceDocuments: true, //default 4
// questionGeneratorChainOptions: {
//           llm: nonStreamingCohere,
//         },
//       }
//     );

//     // Question using chat-history
// const response = await questionGeneratorChain.call(
//       {
//         question: sanitizedQuestion,
//         chat_history: chatHistory,
//       },
//       [handlers]
//     );

//     // Handle potential undefined cases
// if (!response || !response.generatedQuestions) {
//       console.error("Missing response or generated questions");
//       // throw new Error("Call chain method failed to execute successfully!!");
// }

//     // Use the streaming model for answering questions
// const chain = ConversationalRetrievalQAChain.fromLLM(
//       streamingCohere,
//       vectorStore.asRetriever(),
//       {
//         qaTemplate: QA_TEMPLATE,
//         questionGeneratorTemplate: STANDALONE_QUESTION_TEMPLATE,
//         returnSourceDocuments: true, //default 4
// questionGeneratorChainOptions: {
//           llm: nonStreamingCohere,
//         },
//       }
//     );

//     // Call the chain with the generated question
// await chain.call(
//       {
//         question: response.generatedQuestions.primary,
//         chat_history: chatHistory,
//       },
//       [handlers]
//     );

//     // Handle the response and return the readable stream
// // ...
// return new StreamingTextResponse(stream, {}, data);
//   } catch (e) {
//     console.error(e);
//     // throw new Error("Call chain method failed to execute successfully!!");
// }
// }
``


import { ConversationalRetrievalQAChain } from "langchain/chains";
import { getVectorStore } from "./vector-store";
import { getPinecone } from "./pinecone-client";

import {
  StreamingTextResponse,
  experimental_StreamData,
  LangChainStream,
} from "ai";
import { streamingModel, nonStreamingModel } from "./llm";
import { STANDALONE_QUESTION_TEMPLATE, QA_TEMPLATE } from "./prompt-templates";

type callChainArgs = {
  question: string;
  chatHistory: string;
};
export { StreamingTextResponse };

export async function callChain({ question, chatHistory }: callChainArgs) {
  try {
    // Open AI recommendation
    const sanitizedQuestion = question.trim().replaceAll("\n", " ");
    const pineconeClient = await getPinecone();
    const vectorStore = await getVectorStore(pineconeClient);
    const { stream, handlers } = LangChainStream({
      experimental_streamData: true,
    });
    const data = new experimental_StreamData();

    const chain = ConversationalRetrievalQAChain.fromLLM(
      streamingModel,
      vectorStore.asRetriever(),
      {
        qaTemplate: QA_TEMPLATE,
        questionGeneratorTemplate: STANDALONE_QUESTION_TEMPLATE,
        returnSourceDocuments: true, //default 4
        questionGeneratorChainOptions: {
          llm: nonStreamingModel,
        },
      }
    );

    // Question using chat-history
    // Reference https://js.langchain.com/docs/modules/chains/popular/chat_vector_db#externally-managed-memory
    chain
      .call(
        {
          question: sanitizedQuestion,
          chat_history: chatHistory,
        },
        [handlers]
      )
      .then(async (res) => {
        const sourceDocuments = res?.sourceDocuments;
        const firstTwoDocuments = sourceDocuments.slice(0, 2);
        const pageContents = firstTwoDocuments.map(
          ({ pageContent }: { pageContent: string }) => pageContent
        );
        console.log("already appended ", data);
        data.append({
          sources: pageContents,
        });
        data.close();
      });

    // Return the readable stream
    return new StreamingTextResponse(stream, {}, data);
  } catch (e) {
    console.error(e);
    throw new Error("Call chain method failed to execute successfully!!");
  }
}