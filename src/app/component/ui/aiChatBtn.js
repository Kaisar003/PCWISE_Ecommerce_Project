"use client"
import { useState } from "react";
import PSWISEAI from "../AI-ChatBot/page";
import Image from "next/image";

export default function AIChatBtn() {
    const [chatBoxOpen, setChatBoxOpen] = useState(false);

    return (
        <>
            <button onClick={() => setChatBoxOpen(true)} className={`bottom-8 right-8 z-10 ${chatBoxOpen ? "hidden" : "fixed"}`}>
                <Image src="/logo.png" width={90} height={90} className="bg-blue-card mr-2 p-3 rounded-full hover:bg-blue-600 duration-200" alt="PSWISE AI chat bot"></Image>
            </button>
            <PSWISEAI open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
        </>
    )
}   