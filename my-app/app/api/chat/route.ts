import { NextRequest, NextResponse } from "next/server";
import { callChain } from "@/lib/langchain";
import { Message, OpenAIStream, StreamingTextResponse } from "ai";


const formatMessage = (message: Message) => {
  return `${message.role === "user" ? "Human" : "Assistant"}: ${message.content}`;
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const messages: Message[] = body.messages ?? [];
  console.log("Messages ", messages);
  const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
  const question = messages[messages.length - 1].content;

  console.log("Chat history ", formattedPreviousMessages.join("\n"));

  if (!question) {
    return NextResponse.json("Error: No question in the request", {
      status: 400,
    });
  }

  try {
    // Call the callChain function to get the streaming text response
    const streamingTextResponse = await callChain({
      question,
      chatHistory: formattedPreviousMessages.join("\n"),
    });

    // Return the streaming text response directly to the client
    return streamingTextResponse;
  } catch (error) {
    console.error("Internal server error ", error);
    return NextResponse.json("Error: Something went wrong. Try again!", {
      status: 500,
    });
  }
}


// import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
// import { OpenAIStream, StreamingTextResponse } from 'ai';
 
// // Create an OpenAI API client (that's edge friendly!)
// const client = new OpenAIClient(
//   'https://sqweya-llm.openai.azure.com/',
//   new AzureKeyCredential(process.env.AZURE_OPENAI_API_KEY!),
// );
 
// // IMPORTANT! Set the runtime to edge
// export const runtime = 'edge';
 
// export async function POST(req: Request) {
//   const { messages } = await req.json();
 
//   // Ask Azure OpenAI for a streaming chat completion given the prompt
//   const response = await client.streamChatCompletions(
//     'gpt-35-turbo-1106',
//     messages,
//   );
 
//   // Convert the response into a friendly text-stream
//   const stream = OpenAIStream(response);
//   // Respond with the stream
//   return new StreamingTextResponse(stream);
// }