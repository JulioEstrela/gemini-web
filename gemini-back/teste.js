//const {GoogleGenerativeAI} = require("@google/generative-ai")

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("API-KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Me explica a fórmula de Bhaskara";

const result = await model.generateContent(prompt);
console.log(result.response.text());