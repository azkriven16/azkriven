"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { IconMessage } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const renderMessageContent = (content: string) => {
        // Regular expression to match markdown-style links [text](url)
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(content)) !== null) {
            // Add text before the link
            if (match.index > lastIndex) {
                parts.push(content.slice(lastIndex, match.index));
            }
            // Add the link component
            parts.push(
                <Link
                    key={match.index}
                    href={match[2]}
                    className="text-blue-400 hover:underline"
                    target={match[2].startsWith("http") ? "_blank" : "_self"}
                >
                    {match[1]}
                </Link>
            );
            lastIndex = match.index + match[0].length;
        }
        // Add remaining text
        if (lastIndex < content.length) {
            parts.push(content.slice(lastIndex));
        }

        return parts.length > 0 ? parts : content;
    };

    return (
        <>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 md:bottom-6 md:right-6 rounded-full p-3 md:p-4 shadow-xl bg-white hover:bg-gray-100"
                variant="default"
            >
                <IconMessage
                    size={20}
                    className="md:w-6 md:h-6"
                    color="black"
                />
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-16 right-4 md:bottom-20 md:right-6 w-[80vw] md:w-[300px] h-[50vh] md:h-[400px] bg-zinc-900 border-zinc-800 border rounded-lg shadow-xl flex flex-col"
                    >
                        <div className="flex-1 p-3 md:p-4 overflow-y-auto">
                            <div
                                className={`mb-4 p-2 md:p-3 rounded-lg bg-zinc-800 text-zinc-200 max-w-[80%] whitespace-pre-wrap text-sm md:text-base`}
                            >
                                Hi! I'm Euger's portfolio AI assistant. What
                                would you like to know?
                            </div>
                            {messages.map((message, index) => (
                                <div
                                    key={message.id || `msg-${index}`}
                                    className={`mb-4 p-2 md:p-3 rounded-lg ${
                                        message.role === "user"
                                            ? "bg-zinc-700 text-zinc-100 ml-auto"
                                            : "bg-zinc-800 text-zinc-200"
                                    } max-w-[80%] whitespace-pre-wrap text-sm md:text-base`}
                                >
                                    {renderMessageContent(message.content)}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="border-t border-zinc-800 p-3 md:p-4 bg-zinc-900"
                        >
                            <input
                                className="w-full p-2 text-sm md:text-base border border-zinc-700 rounded-md bg-zinc-800 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                value={input}
                                placeholder="Type a message..."
                                onChange={handleInputChange}
                            />
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
