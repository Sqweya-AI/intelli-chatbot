import { CohereInput } from "@langchain/cohere";

declare module "@langchain/cohere" {
  interface CohereInput {
    streaming?: boolean;
  }
}
