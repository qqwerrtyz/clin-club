import Image from "next/image"
import images_ from "../imgs"

export default function HeaderChat() {
    return (
        <div className="headerChatWrapper">
            <div className="headerChat">
                <Image className="headerChatAvatar" src={images_.avatar_test}/>
                <span className="headerChatName">Каширова М.E</span>
            </div>
        </div>
    )
}