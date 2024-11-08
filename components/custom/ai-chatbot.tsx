"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { IconMessage, IconSend, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading } =
        useChat();
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
                    this link
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
                className="fixed bottom-4 right-4 md:bottom-6 md:right-6 rounded-full bg-white hover:bg-gray-100 w-14 h-14 md:w-16 md:h-16"
            >
                {isOpen ? (
                    <IconX size={24} className="md:w-8 md:h-8" color="black" />
                ) : (
                    <IconMessage
                        size={24}
                        className="md:w-8 md:h-8"
                        color="black"
                    />
                )}
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed right-4 bottom-20 md:bottom-24 md:right-6 w-[80vw] md:w-[300px] h-[50vh] md:h-[400px] bg-zinc-900 border-zinc-800 border rounded-lg shadow-xl flex flex-col"
                    >
                        <div className="flex-1 p-3 md:p-4 overflow-y-auto">
                            <div
                                className={`mb-4 p-2 md:p-3 rounded-lg bg-yellow-400 text-black max-w-[80%] whitespace-pre-wrap text-sm md:text-base`}
                            >
                                This AI will answer questions related to me, my
                                work, projects, and more.
                            </div>
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
                            <div className="flex items-center gap-2 space-x-2">
                                <input
                                    className="flex-1 p-2 text-sm md:text-base border border-zinc-700 rounded-md bg-zinc-800 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-600 min-w-[100px]"
                                    value={input}
                                    placeholder="Type a message..."
                                    onChange={handleInputChange}
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    variant="default"
                                    disabled={isLoading}
                                    className="min-w-[32px] w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
                                >
                                    <IconSend
                                        size={16}
                                        className="md:w-5 md:h-5"
                                        color="black"
                                    />
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
