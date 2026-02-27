"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, X, Send, User, Volume2, Square } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Groq from "groq-sdk";
import { PROFILE_DATA } from "@/lib/data";

// Since we are not using a backend to satisfy Spark plan requirements, 
// we call Groq directly from the frontend.
const apiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;
const groq = new Groq({ apiKey, dangerouslyAllowBrowser: true });

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "listening" | "processing" | "speaking">("idle");
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([
        { role: "assistant", content: "Hi! I'm Alvy's AI Assistant. How can I help you today?" },
    ]);
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const audioChunks = useRef<Blob[]>([]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [messages, loading]);

    const handleSend = async (text?: string) => {
        const query = text || input;
        if (!query.trim() || loading) return;

        const userMsg = { role: "user", content: query };
        const updatedMessages = [...messages, userMsg];
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setLoading(true);
        setStatus("processing");

        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        try {
            const stream = await groq.chat.completions.create({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: `You are the AI portfolio assistant for ${PROFILE_DATA.name}, a ${PROFILE_DATA.role} based in ${PROFILE_DATA.location}. 
    
              ### Guidelines for Interaction:
              1. **Identify**: Always represent yourself as ${PROFILE_DATA.name}'s dedicated agent.
              2. **Brevity**: Keep responses extremely concise and to the point.
              3. **Formatting**: Use Markdown for clarity (bullet points, bold text).
              4. **Context**: Use the provided data to answer technical or professional questions.
              5. **Tone**: Professional, futuristic, and helpful.
    
              ### Professional Context:
              - **Bio**: ${PROFILE_DATA.bio}
              - **Tech Arsenal**: ${JSON.stringify(PROFILE_DATA.skills)}
              - **Experience**: ${JSON.stringify(PROFILE_DATA.experience)}
              - **Achievements**: ${JSON.stringify(PROFILE_DATA.achievements)}
              - **Socials/Contact**: ${JSON.stringify(PROFILE_DATA.socials)}
              
              If asked something outside this scope, politely pivot back to ${PROFILE_DATA.name}'s work or suggest contacting him via ${PROFILE_DATA.email}.`,
                    },
                    ...updatedMessages.map(m => ({ role: m.role as any, content: m.content })),
                ],
                stream: true,
                temperature: 0.7,
                max_tokens: 1024,
            });

            let accumulatedContent = "";
            setStatus("speaking");

            for await (const chunk of stream) {
                const content = chunk.choices[0]?.delta?.content || "";
                accumulatedContent += content;

                setMessages((prev) => {
                    const newMessages = [...prev];
                    const lastMsg = newMessages[newMessages.length - 1];
                    if (lastMsg && lastMsg.role === "assistant") {
                        lastMsg.content = accumulatedContent;
                    }
                    return newMessages;
                });
            }
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => {
                const newMessages = [...prev];
                const lastMsg = newMessages[newMessages.length - 1];
                if (lastMsg && lastMsg.role === "assistant") {
                    lastMsg.content = "Sorry, I'm having trouble connecting right now.";
                }
                return newMessages;
            });
        } finally {
            setLoading(false);
            setStatus("idle");
        }
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder.current = new MediaRecorder(stream);
            audioChunks.current = [];
            mediaRecorder.current.ondataavailable = (event) => audioChunks.current.push(event.data);
            mediaRecorder.current.onstop = async () => {
                const audioBlob = new Blob(audioChunks.current, { type: "audio/m4a" });
                setStatus("processing");
                try {
                    const transcription = await groq.audio.transcriptions.create({
                        file: new File([audioBlob], "audio.m4a", { type: "audio/m4a" }),
                        model: "whisper-large-v3",
                    });
                    if (transcription.text) handleSend(transcription.text);
                    else setStatus("idle");
                } catch (err) {
                    console.error("Transcription error:", err);
                    setStatus("idle");
                }
            };
            mediaRecorder.current.start();
            setStatus("listening");
        } catch (err) {
            console.error("Mic access error:", err);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder.current && status === "listening") mediaRecorder.current.stop();
    };

    const toggleVoice = () => {
        if (status === "idle" || status === "speaking") startRecording();
        else if (status === "listening") stopRecording();
    };

    return (
        <div className="fixed bottom-6 right-6 z-[60]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="bg-[#0b1224]/95 backdrop-blur-xl w-[350px] h-[520px] rounded-3xl overflow-hidden flex flex-col mb-4 shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10 ring-1 ring-white/5"
                    >
                        {/* Premium Header */}
                        <div className="flex-shrink-0 px-5 py-4 flex items-center justify-between border-b border-white/5 bg-[#070d1a]/50">
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10">
                                    <div className="absolute inset-x-0 bottom-0 h-4 bg-primary/40 blur-md rounded-full transform translate-y-1" />
                                    <motion.div
                                        animate={{ y: [0, -2, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="relative w-10 h-10"
                                    >
                                        <Image
                                            src="/alvy-bot.png"
                                            alt="Alvy Bot"
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </div>
                                <div>
                                    <h4 className="text-[13px] font-bold text-white tracking-wide">Alvy's AI Assistant</h4>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <div className="relative flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                            <div className="absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" />
                                        </div>
                                        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">Active Now</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-grow overflow-y-auto p-5 space-y-5 scrollbar-hide relative"
                        >
                            {messages.map((msg, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={i}
                                    className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    {msg.role === "assistant" && (
                                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 relative">
                                            <div className="absolute inset-0 bg-primary/10 blur-md rounded-full" />
                                            <div className="relative w-7 h-7">
                                                <Image src="/alvy-bot.png" alt="Bot" fill className="object-contain" />
                                            </div>
                                        </div>
                                    )}
                                    <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13.5px] leading-relaxed shadow-lg break-words whitespace-pre-wrap ${msg.role === "user"
                                        ? "bg-primary text-slate-950 rounded-tr-none font-semibold text-right"
                                        : "bg-[#161f33] text-slate-200 rounded-tl-none border border-white/5"
                                        }`}>
                                        {msg.role === "assistant" ? (
                                            <ReactMarkdown
                                                components={{
                                                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                                    ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                                                    a: ({ node, ...props }) => <a {...props} className="text-primary hover:underline font-bold" target="_blank" rel="noopener noreferrer" />,
                                                }}
                                            >
                                                {msg.content}
                                            </ReactMarkdown>
                                        ) : (
                                            msg.content
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            {loading && (
                                <div className="flex justify-start pl-11">
                                    <div className="flex gap-1.5 py-2">
                                        <div className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce" />
                                        <div className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <div className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="flex-shrink-0 p-5 bg-[#070d1a]/50 border-t border-white/5">
                            <div className="flex gap-3 items-center">
                                <div className="relative flex-grow group">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                        placeholder="Message Alvy's Assistant..."
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-5 pr-12 text-[13px] text-white focus:outline-none focus:ring-1 focus:ring-primary/30 focus:bg-white/10 transition-all placeholder:text-slate-500 shadow-inner"
                                    />
                                    <button
                                        onClick={() => handleSend()}
                                        className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2.5 text-primary hover:text-white transition-all disabled:opacity-50"
                                        disabled={!input.trim() || loading}
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={toggleVoice}
                                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${status === "listening"
                                        ? "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                                        : "bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20"
                                        }`}
                                >
                                    {status === "listening" ? <Square size={18} className="fill-white text-white" /> : <Mic size={20} />}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* IDEAL SIZE: Balanced Launcher Button and Floating Avatar */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="group relative w-24 h-24 flex items-center justify-center transition-all"
            >
                {/* Refined Underglow Effect */}
                <div className="absolute inset-x-0 bottom-1 h-10 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {isOpen ? (
                    <div className="w-18 h-18 bg-[#071226]/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-primary shadow-2xl">
                        <X size={36} />
                    </div>
                ) : (
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-28 h-28 flex items-center justify-center"
                    >
                        {/* Shadow beneath floating bot - Adjusted for ideal size */}
                        <motion.div
                            animate={{ scale: [1, 0.75, 1], opacity: [0.4, 0.15, 0.4] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-black/60 blur-[4px] rounded-full"
                        />

                        <Image src="/alvy-bot.png" alt="Bot Icon" width={140} height={140} className="object-contain drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]" />

                        {status !== "idle" && (
                            <div className="absolute top-5 right-5 w-4.5 h-4.5 bg-green-500 rounded-full border-[3px] border-[#071226] shadow-lg animate-pulse" />
                        )}
                    </motion.div>
                )}
            </motion.button>
        </div>
    );
}
