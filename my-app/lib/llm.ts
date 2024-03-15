import { ChatOpenAI } from "langchain/chat_models/openai";

export const streamingModel = new ChatOpenAI({
  modelName: "gpt-3.5-turbo-1106",
  streaming: true,
  verbose: true,
  temperature: 0,
});

export const nonStreamingModel = new ChatOpenAI({
  modelName: "gpt-3.5-turbo-1106",
  verbose: true,
  temperature: 0,
});