import InputReg from "@/components/reg/InputReg";
import "@/app/css/index.css"
import "@/app/css/index.media.css"
import Image from "next/image";
import imagesIndex from "@/components/Index/imagesIndex";
import Link from "next/link";

export default function Login() {
    return (
        <div className="loginWrapper">
            <div className="regLogoWrapper">
                <Image className="regLogo" src={imagesIndex.logo}/>
            </div>

            <div className="regTextWrapper">
                <span className="regHeadline">Авторизируйтесь</span>
            </div>

            <div className="login">
                <InputReg placeholder={"Имя"}/>
                <InputReg placeholder={"Пароль"}/>


                <Link style={{display: "flex", alignItems: "center", justifyContent: "center"}} href={"/portal/student"} className="regNext">Войти</Link>
            </div>
        </div>
    )
}