import { Groq } from "groq-sdk";
import { NextResponse } from "next/server";
import { PROFILE_DATA } from "@/lib/data";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || "dummy_key_for_build",
});

const SYSTEM_PROMPT = `
You are an AI assistant for this portfolio website. 
Your goal is to answer questions based ONLY on the following profile data.
Be professional, concise, and helpful. Use a friendly tone.
If the answer is not in the data, apologize and suggest contacting via email.

<PROFILE_DATA>
${JSON.stringify(PROFILE_DATA, null, 2)}
</PROFILE_DATA>

Do not make up facts.
`;

export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        // Format history for Groq
        const messages = [
            { role: "system", content: SYSTEM_PROMPT },
            ...history.slice(-5), // Keep last 5 context messages
            { role: "user", content: message },
        ];

        // If no API key is set, return mock response
        if (!process.env.GROQ_API_KEY) {
            return NextResponse.json({
                response: "I'm currently in demo mode because my API key hasn't been configured yet. But if I were connected, I'd tell you all about Alvee!"
            });
        }

        const completion = await groq.chat.completions.create({
            messages: messages as any,
            model: "llama3-70b-8192", // High performance model
            temperature: 0.7,
            max_tokens: 1024,
        });

        return NextResponse.json({
            response: completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.",
        });
    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
