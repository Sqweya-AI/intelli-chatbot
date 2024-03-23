import { AzureChatOpenAI} from "@langchain/azure-openai";


export const streamingModel = new AzureChatOpenAI({
  azureOpenAIEndpoint:'https://sqweya-llm.openai.azure.com/',
  modelName: "gpt-35-turbo", // Use gpt-35-turbo for Azure OpenAI GPT-3.5-turbo
temperature: 0,
  verbose: true,
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
  azureOpenAIApiDeploymentName:'gpt-35-turbo-1106',
});

export const nonStreamingModel = new AzureChatOpenAI({
  azureOpenAIEndpoint:'https://sqweya-llm.openai.azure.com/',
  modelName: "gpt-35-turbo", // Use gpt-35-turbo for Azure OpenAI GPT-3.5-turbo
temperature: 0,
  verbose: true,
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
  azureOpenAIApiDeploymentName:'gpt-35-turbo-1106',
});




// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

// export const streamingModel = new ChatGoogleGenerativeAI({
//   modelName: "chat-bison-001", // Use palm-2 for Google Palm 2
// streaming: true,
//   temperature: 0,
//   verbose: true,
// });

// export const nonStreamingModel = new ChatGoogleGenerativeAI({
//   modelName: "chat-bison-001", // Use palm-2 for Google Palm 2
// temperature: 0,
//   verbose: true,
// });





// import { Cohere } from '@langchain/cohere';

// export const streamingCohere = new Cohere({
//   maxTokens: 20,
//   azureOpenAIApiKey: process.env.COHERE_API_KEY,
//   maxRetries:5,
//   temperature:0,
// });

// export const nonStreamingCohere = new Cohere({
//   maxTokens: 20,
//   azureOpenAIApiKey: process.env.COHERE_API_KEY,
//   maxRetries:5,
//   temperature:0,
// });




// import { ChatOpenAI } from "langchain/chat_models/openai";

// export const streamingModel = new ChatOpenAI({
//   modelName: "gpt-3.5-turbo",
//   streaming: true,
//   verbose: true,
//   temperature: 0,
//   openAIApiKey: process.env.OPENAI_API_KEY1,
// });

// export const nonStreamingModel = new ChatOpenAI({
//   modelName: "gpt-3.5-turbo",
//   verbose: true,
//   temperature: 0,
//   openAIApiKey: process.env.OPENAI_API_KEY,
// });