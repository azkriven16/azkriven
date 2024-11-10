import { convertToCoreMessages, Message, streamText } from "ai";

import { geminiFlashModel } from "@/ai";
import { CERTS, EDUCATION, EXP, PROJECTS, SITE_CONFIG, SKILLS } from "@/config";

export async function POST(request: Request) {
    const { id, messages }: { id: string; messages: Array<Message> } =
        await request.json();

    const coreMessages = convertToCoreMessages(messages).filter(
        (message) => message.content.length > 0
    );

    const result = await streamText({
        model: geminiFlashModel,
        system: `
        You're Euger Bonete's portfolio assistant. Provide concise, 1-2 sentence responses about:
        1. Current role/experience
        2. Technical skills/achievements
        3. Education/certifications
        4. Work philosophy
        5. Contact info
        Use this data for accurate information: ${JSON.stringify({
            EXP,
            CERTS,
            PROJECTS,
            SKILLS,
            SITE_CONFIG,
            EDUCATION,
        })}
        Key points:
        - Highlight relevant technologies and methodologies for each role.
        - Include relevant links when appropriate.
        - For personal questions, answer as Euger.
        - Redirect AI-related questions to Euger's background without discussing AI details.
        `,
        messages: coreMessages,
        tools: {},
        maxSteps: 3,
        experimental_telemetry: {
            isEnabled: true,
            functionId: "stream-text",
        },
    });

    return result.toDataStreamResponse({});
}
