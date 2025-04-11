"use client"
import Image from "next/image";
import images_ from "../imgs";
import { useState } from "react";

export default function FooterChat() {
    const [value, setValue] = useState("");

    function textareaValueChange (event) {
        setValue(event.target.value);

        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`
    }
    return (
        <div className="footerChatWrapper">
            <div className="footerChat">
                <div className="footerChatInputWrapper">
                    <textarea 
                        rows={1}
                        className="footerChatTextarea" 
                        placeholder="Введите сообщение..."
                        value={value}
                        onChange={textareaValueChange}
                    />
                </div>

                <div className="footerChatButtonsWrapper">
                    <div className="footerChatSendAitWrapper">
                       <Image className="footerChatSIconPlus" src={images_.plus}/>
                    </div>

                    <button
                        type="button" 
                        className="blueBg footerChatButtonSend"
                    >
                        <Image className="footerChatImgSendAir" src={images_.sendAir} />
                    </button>
                </div>
            </div>
        </div>
    )
}