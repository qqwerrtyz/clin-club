import Image from "next/image"
import images_ from "../imgs"

export default function HeaderProfile() {
    return (
        <div className="myProfileHeader">
            <div className="myProfileHeadlineWrapper">
                <h1 className="textColorBlack mainHeadline myProfileHeadline">Мой профиль</h1>
            </div>

            <div className="myProfileChangeWrapper">
                <button type="button" className="blueBg textColorWhite myProfileChange">Изменить</button>
                <Image className="myProfileChangePancel" src={images_.changePancel}/>
            </div>
        </div>
    )
}