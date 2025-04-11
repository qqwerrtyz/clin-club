import HeaderChat from "@/components/portal/chat/HeaderChat";
import "../pageCss/page.css"
import "../pageCss/page.media.css"
import BodyChat from "@/components/portal/chat/BodyChat";
import FooterChat from "@/components/portal/chat/FooterChat";
export default function Chat() {
    return (
        <div className="chatWrapper">
            <div className="chat">
                <HeaderChat />
                <BodyChat />
                <FooterChat />
            </div>
        </div>
    )
}