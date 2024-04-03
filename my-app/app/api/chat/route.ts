import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
// import mongoose, {Model, connect} from 'mongoose';
// import { MessageModel as MessageSchema } from '@/models/message.model';
// import mongoose, {Model, connect} from 'mongoose';
// import { MessageModel as MessageSchema } from '@/models/message.model';

export const runtime = 'edge';

// Create an OpenAI API client (that's edge friendly!)
const client = new OpenAIClient(
  'https://sqweya-subdomain.openai.azure.com/',
  
  new AzureKeyCredential(process.env.AZURE_OPENAI_API_KEY!),
);

{/*

const processMessages = async (messages: any[]) => {

// Connect to the MongoDB database
const mongodbUri = process.env.MONGODB_URI as string;

mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true } as any);
const db = mongoose.connection.once('open', async () => {
  const userMessagesPromises: Promise<MessageSchema[]>[] = [];

  // Process each message in the messages array
  for (const message of messages) {
    // Check if the message is from the user, system, or the LLM
    if (message.role === 'user' || message.role === 'system') {
      // Create a new message document
      userMessagesPromises.push(Model.create({
        userId: message.userId,
        message: message.content,
        aiResponse: '', // No AI response for user or system messages
      }));
    } else if (message.role === 'assistant') {
      // Create a new message document for the LLM response
      const userMessage = await Model.create({
        userId: message.userId,
        message: message.content,
        aiResponse: '', // No AI response for user or system messages
      });
      await userMessage.save();
    }
  }

  // Create and save all user messages
  await Promise.all(userMessagesPromises);
    // Close MongoDB connection
    await mongoose.disconnect();
});
};

  // @ts-ignore
const MessageModel = mongoose.model('Message', MessageSchema);

 // Process each message in the messages array
 for (const message of messages) {
  // Check if the message is from the user, system, or the LLM
  if (message.role === 'user' || message.role === 'system') {
    // Create a new message document
    const userMessage = await MessageModel.create({
      userId: message.userId,
      message: message.content,
      aiResponse: '', // No AI response for user or system messages
    });
    await userMessage.save();
  } else if (message.role === 'assistant') {
    // Create a new message document for the LLM response
    const userMessage = await MessageModel.create({
      userId: message.userId,
      message: message.content,
      aiResponse: '', // No AI response for user or system messages
    });
    await userMessage.save();
  }
}
*/}

{/*

const processMessages = async (messages: any[]) => {

// Connect to the MongoDB database
const mongodbUri = process.env.MONGODB_URI as string;

mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true } as any);
const db = mongoose.connection.once('open', async () => {
  const userMessagesPromises: Promise<MessageSchema[]>[] = [];

  // Process each message in the messages array
  for (const message of messages) {
    // Check if the message is from the user, system, or the LLM
    if (message.role === 'user' || message.role === 'system') {
      // Create a new message document
      userMessagesPromises.push(Model.create({
        userId: message.userId,
        message: message.content,
        aiResponse: '', // No AI response for user or system messages
      }));
    } else if (message.role === 'assistant') {
      // Create a new message document for the LLM response
      const userMessage = await Model.create({
        userId: message.userId,
        message: message.content,
        aiResponse: '', // No AI response for user or system messages
      });
      await userMessage.save();
    }
  }

  // Create and save all user messages
  await Promise.all(userMessagesPromises);
    // Close MongoDB connection
    await mongoose.disconnect();
});
};

  // @ts-ignore
const MessageModel = mongoose.model('Message', MessageSchema);

 // Process each message in the messages array
 for (const message of messages) {
  // Check if the message is from the user, system, or the LLM
  if (message.role === 'user' || message.role === 'system') {
    // Create a new message document
    const userMessage = await MessageModel.create({
      userId: message.userId,
      message: message.content,
      aiResponse: '', // No AI response for user or system messages
    });
    await userMessage.save();
  } else if (message.role === 'assistant') {
    // Create a new message document for the LLM response
    const userMessage = await MessageModel.create({
      userId: message.userId,
      message: message.content,
      aiResponse: '', // No AI response for user or system messages
    });
    await userMessage.save();
  }
}
*/}

export async function POST(req: Request) {
  const { messages } = await req.json();
  console.log(messages); 


  // Adding system message
  const messagesWithSystemMessage = [
    {
      role: "system",
      content: `Welcome to La Villa Boutique Hotel & Soprano Restaurant! I'm Elli, your virtual assistant. We're a 3-star hotel in Accra, offering amenities like a pool, Wi-Fi, airport shuttle, and air-conditioned rooms. 
  
  Check-in: 14:00, Check-out: 12:00. Rooms have Wi-Fi, TVs, and minifridges. Some offer balconies or sitting areas. Apartments include kitchenettes and dining spaces.
  
  Enjoy our restaurant/bar, outdoor pool, gym, and meeting/event facilities. Parking and airport shuttle available.
  
  For inquiries or reservations, call 030 273 0335 or book online at https://live.ipms247.com/booking/book-rooms-lavillaboutiquehotel. We look forward to hosting you!`
  },
    ...messages
  ];
  

  // Ask Azure OpenAI for a streaming chat completion given the prompt
  const response = await client.streamChatCompletions(
    'gpt-35-turbo',

    messagesWithSystemMessage,
  );
 
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}

export async function GET(request: Request) {
  const responseBody = JSON.stringify({ response: "Some get request" });
  return new Response(responseBody, { status: 200, headers: { "Content-Type": "text/plain" } });
}





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

// // Call to Mistral Azure
// import { StreamingTextResponse } from 'ai';

// // Define the Mistral endpoint URL and API key
// const mistralEndpoint = "https://Mistral-large-xzmpw-serverless.eastus2.inference.ai.azure.com/v1/chat/completions";
// const apiKey = process.env.AZURE_MISTRAL_API_KEY;

// export async function POST(req: Request) {
//   try {
//     // Extract the `messages` from the body of the request
//     const { messages } = await req.json();

//     // Define the system message
//     const systemMessage = {
//       role: "system",
//       content: `Your name is Elli, an AI front desk assistant for La Palm Royal Hotel. You respond to inquiries in 10 words or less. Be polite, helpful, and concise.
    
//     Here's information about Lapalm to answer questions on prices and amenities:
    
//     * Rooms: $140 - $540 per night
//     * Amenities: Restaurants, bars, casino, spa, fitness center, outdoor pools, conference center
//     * Features: Seaside location, beachfront restaurant, best outdoor space in Accra
//     * Contact: Phone: +233 26 871 0684, WhatsApp: +233 57 766 5964`
//     };
    
//     // Combine the system message with the user messages
//     const messagesWithSystemMessage = [systemMessage, ...messages];

//     // Make a POST request to the Mistral endpoint
//     const response = await fetch(mistralEndpoint, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         messages: messagesWithSystemMessage,
//       }),
//     });

//     // Check if the request to the Mistral endpoint was successful
//     if (!response.ok) {
//       const errorText = await response.text(); // Get the error message from the response body
//       throw new Error(`Request failed with status ${response.status}: ${errorText}`);
//     }

//     // Parse the JSON response from the Mistral endpoint
//     const responseData = await response.json();
//     const content = responseData.choices[0].message.content;
//     console.log(content);

//     // Assuming the Mistral endpoint response contains `choices`
//     // const stream = MistralStream(responseData.);

//     // Respond with the stream
//     return new StreamingTextResponse(content);
//   } catch (error: any) {
//     // Handle any errors that occur during the process
//     console.error("Error:", error.message);
//     // Return an error response
//     return new Response("An error occurred", { status: 500 });
//   }
// }





