import Image from "next/image"
import images_ from "../imgs"

export default function HeaderChat({setOpenCahts}) {
    return (
        <div className="headerChatWrapper">
            <Image
                className="chatBurger"
                src={images_.burger}
                onClick={() => setOpenCahts(prev => !prev)}
            />

            <div className="headerChat">
                <Image className="headerChatAvatar" src={images_.avatar_test}/>
                <span className="headerChatName">Каширова М.E</span>
            </div>
        </div>
    )
}