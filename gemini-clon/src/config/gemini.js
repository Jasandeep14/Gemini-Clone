import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCGsBcWe3yEbaIn5JOdyxolyuAuWaG-_xk"; // Use environment variables in production
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;  // Correct way to access response
    console.log(response.text());            // Get the text output
    return response.text();                  // Return the text for use in React
  } catch (error) {
    console.error("Error:", error);
  }
}

export default run;
