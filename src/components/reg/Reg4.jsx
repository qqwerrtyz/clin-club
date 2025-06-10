import InputReg from "./InputReg";

export default function Reg4() {
    return (
        <div className="reg4">
            <InputReg placeholder={"Введите место работы"}/>
            <InputReg placeholder={"Введите вашу специализацию"}/>

            <button className="regEndSend" id="send">Отправить</button>
        </div>
    )
}