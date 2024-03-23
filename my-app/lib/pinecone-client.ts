import { Pinecone } from "@pinecone-database/pinecone";
import { env } from "./config";
import { delay } from "./utils";

let pineconeInstance: Pinecone | null = null;

// Initialize index and ready to be accessed.
async function initPinecone(
) {
  try {
    const pinecone = new Pinecone({
      apiKey: env.PINECONE_API_KEY,
      environment: env.PINECONE_ENVIRONMENT,
    });

    const indexName = env.PINECONE_INDEX_NAME;
    const existingIndexes = await pinecone.listIndexes();

    if (existingIndexes.some((index) => index.name === indexName)) {
      console.log("Your index already exists. nice !!");
    } else {
      // Create index if it doesn't exist
try {
        const indexDescription = {
          name: indexName,
          dimension: 1024,
          metric: "cosine",
        };

        await pinecone.createIndex(indexDescription);
        console.log(
          `Waiting for ${env.INDEX_INIT_TIMEOUT} seconds for index initialization to complete...`
);
        await delay(env.INDEX_INIT_TIMEOUT);
        console.log("Index created !!");
      } catch (error) {
        console.error("error ", error);
        throw new Error("Index creation failed");
      }
    }

    return pinecone;
  } catch (error) {
    console.error("error", error);
    throw new Error("Failed to initialize Pinecone ");
  }
}

export async function getPinecone(
) {
  if (!pineconeInstance) {
    pineconeInstance = await initPinecone();
  }
  return pineconeInstance;
}
