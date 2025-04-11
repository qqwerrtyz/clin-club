"use client"
import Image from "next/image"
import images_ from "../imgs"
import { useEffect, useRef } from "react"

export default function BodyChat() {
    const bodyChat = useRef(null)

    const dialog = [
        {
            role: "me",
            message: "Привет, как дела у тебя?",
        },

        {
            role: "teacher",
            message: "Нормально, че сам как?",
        },

        {
            role: "me",
            message: "Привет, как дела у тебя?",
        },

        {
            role: "teacher",
            message: "Нормально, че сам как?",
        },

        {
            role: "me",
            message: "Привет, как дела у тебя?",
        },

        {
            role: "teacher",
            message: "Нормально, че сам как?",
        },

        {
            role: "me",
            message: "Привет, как дела у тебя?",
        },

        {
            role: "teacher",
            message: "Нормально, че сам как?",
        },

        {
            role: "me",
            message: "Привет, как дела у тебя?",
        },

        {
            role: "teacher",
            message: "Нормально, че сам как? Нормально, че сам как? Нормально, че сам как? Нормально, че сам как? Нормально, че сам как?",
        },

        {
            role: "me",
            message: "Привет, как дела у тебя?",
        },

        {
            role: "teacher",
            message: "Нормально, че сам как?",
        },

        {
            role: "me",
            message: "Привет, как дела у тебя?",
        },

        {
            role: "teacher",
            message: "Нормально, че сам как?",
        },

        {
            role: "me",
            message: "Привет, как дела у тебя?",
        },

        {
            role: "teacher",
            message: "Нормально, че сам как?",
        },

        

        
    ]

    useEffect(() => {
        setTimeout(() => {
            if(bodyChat.current) {
                bodyChat.current.scrollTop = bodyChat.current.scrollHeight
            }
        }, 0);
    }, [dialog])

    return (
        <div className="bodyChatWrapper">
            <div ref={bodyChat} className="bodyChat">
                {
                    dialog.map((item, index) => {
                        return (
                            <div className="bodyChatItemWrapper ">
                                <div className={`bodyChatItem ${item.role !== "me" ? "chatInterlocutor" : "chatMe"}`}>
                                    <Image 
                                        className="bodyChatAvatar" 
                                        src={item.role !== "me" ? images_.avatar_test : images_.avatar1}
                                    />
                                    <div
                                        className={`bodyChatMessageWrapper ${item.role === "me" ? "meMessage" : ""}`}
                                        style={{textAlign: item.role == "me" ? "right" : "left"}}
                                    >
                                        <span className="bodyChatMessage">{item.message}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}