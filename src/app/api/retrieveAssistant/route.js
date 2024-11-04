// import { config } from "dotenv";
// import { OpenAI } from "openai";
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY, // Load your OpenAI API key
// });

// const userInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// userInterface.prompt()
// userInterface.on("line", async input => {
//     const response = await openai.createChatCompletion({
//         model: "gpt-4o-mini",
//         messages: [{ role: "user", content: input }],
//     })
//     console.log(response.data.choices[0].message.content)
//     userInterface.prompt()
// })
import { NextResponse } from 'next/server';
const OpenAI = require('openai');
const dotenv = require("dotenv");

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Load your OpenAI API key
});

export async function GET(req, res) {
    try {
        const assistant = await openai.beta.assistants.retrieve(
            "asst_bERm84FZ7sEPAIZ4TqP4IHmu"
        );

        return NextResponse.json({ assistant });
    } catch (error) {
        console.error("Error creating Assistant:", error);
        res.status(500).json({ error: "Failed to create assistant" });
    }
}


// import OpenAI from 'openai';

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY, // Load your OpenAI API key
// });
// export default async function handler(req, res) {
//     if (req.method === 'GET') {
//         try {
//             const assistantId = "stored-assistant-id";  // You can save and retrieve this from a database

//             if (assistantId) {
//                 // Return the existing assistant ID
//                 res.status(200).json({ assistant: { id: assistantId } });
//             } else {
//                 // If the assistant does not exist, create one
//                 const assistant = await openai.beta.assistants.create({
//                     name: "Math Tutor",
//                     instructions: "You are a personal math tutor. Write and run code to answer math questions.",
//                     tools: [{ type: "code_interpreter" }],
//                     model: "gpt-4o"
//                 });

//                 // Ideally, save this assistant.id to a database for future retrieval
//                 res.status(201).json({ assistant });
//             }
//         } catch (error) {
//             res.status(500).json({ error: 'Failed to retrieve or create assistant' });
//         }
//     } else {
//         res.status(405).json({ error: 'Method Not Allowed' });
//     }
// }

