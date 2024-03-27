// //call chaing and azure llm
// import { NextRequest, NextResponse } from "next/server";
// import { callChain } from "@/lib/langchain";
// import { Message, OpenAIStream, StreamingTextResponse } from "ai";


// const formatMessage = (message: Message) => {
//   return `${message.role === "user" ? "Human" : "Assistant"}: ${message.content}`;
// };

// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   const messages: Message[] = body.messages ?? [];
//   console.log("Messages ", messages);
//   const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
//   const question = messages[messages.length - 1].content;

//   console.log("Chat history ", formattedPreviousMessages.join("\n"));

//   if (!question) {
//     return NextResponse.json("Error: No question in the request", {
//       status: 400,
//     });
//   }

//   try {
//     // Call the callChain function to get the streaming text response
//     const streamingTextResponse = await callChain({
//       question,
//       chatHistory: formattedPreviousMessages.join("\n"),
//     });

//     // Return the streaming text response directly to the client
//     return streamingTextResponse; //yet to implement stream to client
//   } catch (error) {
//     console.error("Internal server error ", error);
//     return NextResponse.json("Error: Something went wrong. Try again!", {
//       status: 500,
//     });
//   }
// }

//Direct call to azure llm

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

// Call to Mistral Azure
import { StreamingTextResponse } from 'ai';

// Define the Mistral endpoint URL and API key
const mistralEndpoint = "https://Mistral-large-xzmpw-serverless.eastus2.inference.ai.azure.com/v1/chat/completions";
const apiKey = process.env.AZURE_MISTRAL_API_KEY;

export async function POST(req: Request) {
  try {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();

    // Define the system message
    const systemMessage = {
      role: "system",
      content: "Task: You're Elli, the front desk assistant at Lapalm Royal Beach Hotel. Your aim is to assist customers with inquiries and bookings promptly and courteously. Your respones should be limited to only 10 words\n\n---\n\n🌴 Lapalm Royal Beach Hotel! 🌴\n\n🛏️ Rooms:\n\nStandard: $140 - $160/night\nExecutive Club: $180 - $200/night\nJunior Suites: $250 - $290/night\nPresidential Suites: $400 - $440/night\nRoyal Suites: $500 - $540/night\n\n🔗 Book now:https://live.ipms247.com/booking/book-rooms-lapalmroyalbeachhotel\n\n📞 Phone: +233 26 871 0684\n\n💬 WhatsApp: +233 57 766 5964\n\nReady to assist guests promptly and courteously! 😊"
     };

    // Combine the system message with the user messages
    const messagesWithSystemMessage = [systemMessage, ...messages];

    // Make a POST request to the Mistral endpoint
    const response = await fetch(mistralEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: messagesWithSystemMessage,
      }),
    });

    // Check if the request to the Mistral endpoint was successful
    if (!response.ok) {
      const errorText = await response.text(); // Get the error message from the response body
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    // Parse the JSON response from the Mistral endpoint
    const responseData = await response.json();
    const content = responseData.choices[0].message.content;
    console.log(content);

    // Assuming the Mistral endpoint response contains `choices`
    // const stream = MistralStream(responseData.);

    // Respond with the stream
    return new StreamingTextResponse(content);
  } catch (error: any) {
    // Handle any errors that occur during the process
    console.error("Error:", error.message);
    // Return an error response
    return new Response("An error occurred", { status: 500 });
  }
}





