import InputReg from "./InputReg";

export default function Reg3({nextStep}) {
    return (
        <div className="reg3">
            <InputReg placeholder={"Введите ваш номер телефона"}/>
            <InputReg placeholder={"Введите вашу почту"}/>
            <InputReg placeholder={"Введите ваш город"}/>

            <button onClick={nextStep} className="regNext" id="next">Далее</button>


        </div>
    )
}