
import { Message } from "ai";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// // Maps the sources with the right ai-message
// export const getSources = (data: Data[], role: string, index: number) => {
//   if (role === "ai" && index >= 2 && (index - 2) % 2 === 0) {
//     const sourcesIndex = (index - 2) / 2;
//     if (data[sourcesIndex] && data[sourcesIndex].sources) {
//       return data[sourcesIndex].sources;
//     }
//   }
//   return [];
// };

// export const formatChatHistory = (chatHistory: [string, string][]) => {
//   const formattedDialogueTurns = chatHistory.map(
//     (dialogueTurn) => `Human: ${dialogueTurn[0]}\nAssistant: ${dialogueTurn[1]}`
//   );

//   return formattedDialogueTurns.join("\n");
// };

// export function formattedText(inputText: string) {
//   return inputText
//     .replace(/\n+/g, " ") // Replace multiple consecutive new lines with a single space
//     .replace(/(\w) - (\w)/g, "$1$2") // Join hyphenated words together
//     .replace(/\s+/g, " "); // Replace multiple consecutive spaces with a single space
// }

// // Default UI Message
// export const initialMessages: Message[] = [
//   {
//     role: "assistant",
//     id: "0",
//     content:
//       "Hi! I am your PDF assistant. I am happy to help with your questions about your PDF about German law.",
//   },
// ];

// interface Data {
//   sources: string[];
// }