import Image from "next/image";
import images_ from "@/components/portal/imgs";

export default function ChatPeople() {
    return (
        <div className="chatsPeopleWrapper">
            <div className="chatsPeopleItem">
                <div className="chatsPeopleItemAvatarWrapper">
                    <Image className="chatsPeopleItemAvatar" src={images_.avatar_test}/>
                </div>

                <div className="chatsPeopleItemNameWrapper">
                    <span className="chatsPeopleItemName">Каширова М.E</span>
                </div>

                <div className="chatsPeopleItemTimeWrapper">
                    <span className="chatsPeopleItemTime">14.10</span>
                </div>
            </div>

            
        </div>
    )
}