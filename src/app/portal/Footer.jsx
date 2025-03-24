import Image from "next/image";
import profile from "../../../public/imgs/portal/footer/profile.png"
import news from "../../../public/imgs/portal/footer/news.png"
import analitics from "../../../public/imgs/portal/footer/analitics.png"
import settings from "../../../public/imgs/portal/footer/settings.png"
import chat from "../../../public/imgs/portal/footer/chat.png"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footerWrapper">
            <div className="footer">
                <div className="footerIconWrapper">
                   <Link href={"#"}><Image className="footerIcon" src={profile}/></Link>
                </div>

                <div className="footerIconWrapper">
                   <Link href={"#"}><Image className="footerIcon" src={news}/></Link>
                </div>

                <div className="footerIconWrapper">
                   <Link href={"#"}><Image className="footerIcon" src={analitics}/></Link>
                </div>

                <div className="blueBg footerLine"></div>

                <div className="footerIconWrapper">
                   <Link href={"#"}><Image className="footerIcon" src={settings}/></Link>
                </div>

                <div className="footerIconWrapper iconChatWrapper">
                   <Link href={"#"}><Image className="footerIcon iconChat" src={chat}/></Link>
                </div>
            </div>
        </footer>
    )
}