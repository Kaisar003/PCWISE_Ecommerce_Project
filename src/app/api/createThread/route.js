// import openai, { getEmbedding } from "../PSWISE_AI/openai";
// import { getSession } from "next-auth/react";
// import data from "@/app/products/productsData/data.json";

// export const runtime = 'edge'

// export async function POST(req) {
//     try {
//         const session = await getSession({ req });
//         const body = await req.json();
//         const messages = body.messages;

//         const messagesTruncated = messages.slice(-6);

//         const embedding = await getEmbedding(
//             messagesTruncated.map((message) => message.content).join("\n")
//         )

//         const { id } = session.user;

//         const vectorQueryResponse = await data.query({
//             vector: embedding,
//             topK: 5,
//         })

//         const systemMessage = {
//             role: "system",
//             content: `You are the PSWISE eCommerce AI assistant and customer support representative. Your role is to handle user queries and provide accurate, helpful, and satisfying responses based on the available product data. Follow these guidelines:
//  1. Product Knowledge:

//  Comprehensive Knowledge: Be fully informed about each product listed in the products array, including name, specifications, price, availability, and other relevant details.
//  Real-Time Updates: Ensure that recommendations are based on the most current data available.
//  2. Customer Interaction:

//  Warm Greetings: Greet customers warmly and offer your assistance.
//  Concise Responses: Provide clear and direct answers to user queries. For straightforward questions, give a direct response based on the available product data.
//  Clarifying Questions: Ask for additional details only when necessary to refine recommendations or if the initial query lacks sufficient context.
//  3. Product Recommendations:

//  Tailored Suggestions: Recommend products from the products array that best match the customer’s needs, preferences, and budget. Provide a few options and explain the benefits of each.
//  Out-of-Stock Products: If a product is out of stock, suggest similar alternatives from the products array and explain why they are good substitutes.
//  User-Centric Recommendations: Ensure that all recommended products are compatible with the customer’s needs and preferences.
//  4. Custom PC Build Options:

//  AI-Assisted Build:

//  Information Gathering: When a customer expresses interest in building a custom PC, assist them by suggesting compatible components based on their intended use and budget. Focus on the available components in our store.
//  Component Selection: Recommend compatible components without exposing detailed internal data.
//  Explanation: Describe how the recommended components meet the customer’s needs and how they work together.
//  Final Price Calculation: Provide a total price based on the selected components.
//  Manual Build:

//  Guidance: Offer detailed specifications and compatibility information based on the available products in the store. Ensure the components selected will work together effectively.
//  Compatibility Assurance: Confirm that all selected components meet the customer’s needs and are compatible with each other.
//  Final Price Calculation: Provide a total price for the custom build based on the selected components.
//  5. Learning and Improvement:

//  Continuous Learning: Learn from customer interactions to improve future responses and recommendations. Adapt suggestions based on customer feedback and emerging trends.

//             Based on the following product data and the user query, suggest the best products to the user. Remember, PC parts are only for custom builds:

//             Products: ${JSON.stringify(data.products)}

//             For custom builds, you can get all data from: ${JSON.stringify(data.PC_parts)}`
//         }

//         const response = await openai.chat.completions.create({
//             model: "gpt-4o-mini",
//             stream: true,
//             messages: [systemMessage, ...messagesTruncated]
//         })

//         const encoder = new TextEncoder();
//         const decoder = new TextDecoder();

//         // Create a readable stream for the response.
//         const stream = new ReadableStream({
//             async start(controller) {
//                 for await (const chunk of response.data) {
//                     const text = decoder.decode(chunk, { stream: true });
//                     const json = JSON.parse(text);
//                     if (json.choices && json.choices.length > 0) {
//                         const choice = json.choices[0];
//                         if (choice.delta) {
//                             const content = choice.delta.content || "";
//                             controller.enqueue(encoder.encode(content));
//                         }
//                     }
//                 }
//                 controller.close();
//             },
//         });

//         // Return the response as a readable stream.
//         return new Response(stream, {
//             headers: { "Content-Type": "text/plain; charset=utf-8" },
//         });
//     } catch (error) {
//         console.error(error);
//         return Response.json({ error: "Interval AI post server error" }, { status: 500 })
//     }
// }


// File: pages/api/PSWISE_AI/route.js
// import { NextResponse } from 'next/server';
// import openai from './openai';
// import productData from '@/app/products/product-data/data.json';

// export async function POST(request) {
//     const { pathname } = new URL(request.url);

//     if (pathname.endsWith('../chat')) {
//         try {
//             const body = await request.json();
//             const { messages } = body;

//             // Prepare the prompt for the OpenAI model
//             const prompt = `
//                 You are the PSWISE eCommerce AI assistant and customer support representative. Your role is to handle user queries and provide accurate, helpful, and satisfying responses based on the available product data.

//                 Products: ${JSON.stringify(productData)}

//                 User Query: ${messages.map(msg => msg.content).join('\n')}

//                 Suggested Products:
//             `;

//             const completion = await openai.createCompletion({
//                 model: 'text-davinci-003',
//                 prompt,
//                 max_tokens: 150,
//             });

//             const responseMessage = completion.data.choices[0].text.trim();

//             return NextResponse.json({ role: 'assistant', content: responseMessage });
//         } catch (error) {
//             console.error('Error generating response:', error);
//             return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
//         }
//     }

//     return NextResponse.json({ message: 'Route Not Found' }, { status: 404 });
// }
const OpenAI = require('openai');
const dotenv = require("dotenv");
import { NextResponse } from 'next/server';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req, res) {
    try {
        const thread = await openai.beta.threads.create();

        return NextResponse.json({ thread });
    } catch (error) {
        console.error("Error creating thread:", error);
        return res.json({ error: "Failed to create thread" }, { status: 500 });
    }
}
