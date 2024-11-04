import { NextResponse } from 'next/server';

const OpenAI = require('openai');
const dotenv = require("dotenv");

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { threadId, input } = await req.json();
  // console.log(input + `\n` + threadId); // Receive threadId and user's message from the frontend
  // if (!input || !threadId) {
  //   return NextResponse.json({ error: 'Missing required fields: threadId or input' }, { status: 400 });
  // }

  try {
    const msg = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: input,
    });
    return NextResponse.json({ msg });
  } catch (error) {
    console.error("Error adding message to thread:", error);
    return NextResponse.json({ error: "Failed to add message to thread" }, { status: 500 });
  }
}