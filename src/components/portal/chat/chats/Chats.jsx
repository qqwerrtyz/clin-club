
import SearchChat from "@/components/portal/chat/chats/SearchChat";
import ChatPeople from "@/components/portal/chat/chats/ChatPeople";
import Image from "next/image";
import images_ from "../../imgs";
export default function Chats({setOpenCahts}) {
    return (
        
        <div className="divContainer chats">
            <div className="chatsHeaderWrapper">
                <span className="chatsHeader">Чаты</span>
                <Image 
                    className="chatsCross"
                    src={images_.cross}
                    onClick={() => setOpenCahts(prev => !prev)}
                />
            </div>

            <SearchChat />

            <ChatPeople />
        </div>
    )
} 