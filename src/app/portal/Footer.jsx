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
                   {/* <Link href={"/portal/student"}><Image className="footerIcon" alt="profile" src={profile}/></Link> */}
                   <Link href={"/portal/teacher"}><Image className="footerIcon" alt="profile" src={profile}/></Link>
                </div>

                <div className="footerIconWrapper">
                   <Link href={"/portal/news"}><Image className="footerIcon" alt="news" src={news}/></Link>
                </div>

                <div className="footerIconWrapper">
                   <Link href={"/portal/student/analytics"}><Image className="footerIcon" alt="analitics" src={analitics}/></Link>
                   {/* <Link href={"/portal/teacher/analytics"}><Image className="footerIcon" alt="analitics" src={analitics}/></Link> */}
                </div>

                <div className="blueBg footerLine"></div>

                <div className="footerIconWrapper">
                   <Link href={"/portal/myprofile"}><Image className="footerIcon" alt="settings" src={settings}/></Link>
                </div>

                <div className="footerIconWrapper iconChatWrapper">
                   <Link href={"/portal/chat"}><Image className="footerIcon iconChat" alt="chat" src={chat}/></Link>
                </div>
            </div>
        </footer>
    )
}