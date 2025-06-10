"use client"
import Image from "next/image"
import images_ from "../../imgs"
import { useState } from "react"

export default function AddDescription({setShowDescription}) {
    const [inputCondition, setInputCondition] = useState("")

    function buttonSave () {
        setShowDescription(prev => !prev)
    }

    return (
        <div className="additionalConditionsAddDescriptionWrppaer">
            <div className="additionalConditionsInputTextAndImage">
                <textarea
                    className="additionalConditionsInputText"
                    placeholder="Введите текст"
                    value={inputCondition}
                    onChange={(event) => {
                        setInputCondition(event.target.value)
                    }}    
                />
                

                <Image className="additionalConditionsInputImage" src={images_.Attach}/>
            </div>

            <button className="additionalConditionsSaveDescription" onClick={buttonSave}>Сохранить</button>      

        </div>
    )
}