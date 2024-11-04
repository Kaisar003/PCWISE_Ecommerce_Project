import { NextResponse } from 'next/server';

const OpenAI = require('openai');
const dotenv = require("dotenv");

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export async function POST(req, res) {
    const { threadId, assistantId } = await req.json(); // Receive threadId and assistantId from the frontend

    try {
        let run = await openai.beta.threads.runs.createAndPoll(threadId, {
            assistant_id: assistantId,
        });

        if (run.status === "completed") {
            const messages = await openai.beta.threads.messages.list(run.thread_id);
            return NextResponse.json({ messages });
        } else {
            return NextResponse.json({ status: run.status });
        }
    } catch (error) {
        console.error("Error running assistant:", error);
        res.status(500).json({ error: "Failed to run assistant" });
    }
}