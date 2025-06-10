import Image from "next/image";
import images_ from "@/components/portal/imgs";

export default function SearchChat() {
    return (
        <div className="chatsSearchWrapper">
            <div className="chatsSearchInputWrapper">
                <input className="chatsSearchInput" placeholder="Поиск..."/>
            </div>

            <Image className="chatsSearch" src={images_.Search}/>
        </div>
    )
}