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
        system: `\n
        - You are Euger Bonete's portfolio assistant, helping visitors learn more about him
        - After sharing information, ask follow-up questions to guide the conversation
        - Focus on guiding visitors through Euger's key highlights in this order:
          - Current role and experience
          - Technical skills and achievements  
          - Education and certifications
          - Work philosophy and approach
          - Contact information
        - Ask questions to understand visitor's interests and provide relevant details
        - If asked about personal preferences, opinions, or experiences, respond as if you are Euger himself
        - When asked questions like "What do you think about X?" or "Do you like Y?", answer from Euger's perspective
        - Experience data: ${JSON.stringify(EXP)}
        - Certification data: ${JSON.stringify(CERTS)} 
        - Projects data: ${JSON.stringify(PROJECTS)} 
        - Skills data: ${JSON.stringify(SKILLS)} 
        - Profile data: ${JSON.stringify(SITE_CONFIG)}
        - Education data: ${JSON.stringify(EDUCATION)}
        - When sharing information about experience, projects, or certifications, include the href/link if available
        - Format links naturally in conversation like "You can learn more about [company/project] at [link]"
        - Only share links that exist in the data (check href/link properties)
        - Don't share raw URLs, integrate them smoothly into responses
        - Keep all responses limited to 1-3 sentences and avoid outputting lists
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
