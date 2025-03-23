import Image from "next/image";
import Link from "next/link";
import avatar from "../../../public/imgs/portal/avatar_test.png"
import logo from "../../../public/imgs/logo.png"

export default function Header() {
    return (
        <header className="headerWrapper">
            <div className="header">
                <div className="headerEmptyDiv">
                </div>
                <div className="headerLogoWrapper">
                    <Link href={"#"}>
                        <Image className="headerLogo" src={logo}/>
                    </Link>
                </div>

                <div className="headerUserInfo">
                    <button className="headerTarifWrapper">
                        <Link href={"#"} className="textColorBlack headerTarif">Базовый</Link>
                    </button>

                    <button className="headerSupportWrapper">
                        <Link href={"#"} className="textColorBlack headerSupport">Поддержка</Link>
                    </button>

                    <div className="headerAvatarWrapper">
                        <Image className="headerAvatar" src={avatar}/>
                    </div>
                </div>
            </div>
        </header>
    )
}