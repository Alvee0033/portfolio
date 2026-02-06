"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPaperPlane, FaMinus } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! I'm Alvee's AI assistant. Ask me anything about his skills, projects, or experience." }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { role: "user" as const, content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: input,
                    history: messages,
                }),
            });

            if (!response.ok) throw new Error("Failed to fetch response");

            const data = await response.json();
            setMessages(prev => [...prev, { role: "assistant", content: data.response }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-20 h-20 flex items-center justify-center transition-all duration-300 group"
                    >
                        <div className="absolute -top-12 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            AI Active
                        </div>
                        <div className="w-16 h-16 rounded-full bg-black border border-blue-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] ai-active-pulse cursor-pointer hover:scale-110 transition-transform overflow-hidden relative">
                            <Image 
                                src="/robot.png" 
                                alt="AI Assistant" 
                                width={64} 
                                height={64}
                                className="object-cover"
                            />
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.92 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-dark-bg/95 backdrop-blur-xl border border-neon-teal/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col ring-2 ring-neon-teal/10"
                    >
                        {/* Header */}
                        <div className="bg-neon-teal/10 p-4 flex justify-between items-center border-b border-white/10">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-black border border-neon-teal/20 flex items-center justify-center overflow-hidden">
                                    <Image 
                                        src="/robot.png" 
                                        alt="AI" 
                                        width={40} 
                                        height={40}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold font-mono">Robot Assistant</h3>
                                    <div className="flex items-center space-x-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs text-white/60">AI Active</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                                    <FaMinus />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${msg.role === "user"
                                        ? "bg-neon-teal text-black rounded-tr-none font-medium"
                                        : "bg-white/10 text-white rounded-tl-none border border-white/5"
                                        }`}>
                                        {msg.role === "assistant" ? (
                                            <div className="prose prose-invert prose-sm max-w-none">
                                                <ReactMarkdown>
                                                    {msg.content}
                                                </ReactMarkdown>
                                            </div>
                                        ) : (
                                            msg.content
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 border border-white/5">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-black/20">
                            <form onSubmit={handleSubmit} className="flex space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask something..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon-teal focus:outline-none transition-colors placeholder:text-white/30"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="bg-neon-teal text-black p-3 rounded-lg hover:bg-neon-teal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <FaPaperPlane />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
