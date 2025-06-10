import InputReg from "./InputReg";

export default function Reg2({nextStep}) {
    return (
        <div className="reg2">
            <InputReg placeholder={"Введите ваше имя"}/>
            <InputReg placeholder={"Введите вашy фамилию"}/>
            <InputReg placeholder={"Введите вашy отчество"}/>
            <InputReg placeholder={"Введите дату рождения"}/>

                        <button onClick={nextStep} className="regNext" id="next">Далее</button>

        </div>
    )
}