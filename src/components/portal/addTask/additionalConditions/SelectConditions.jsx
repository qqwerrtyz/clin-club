"use client"
import Image from "next/image"
import images_ from "../../imgs"
import { useContext, useState } from "react"
import { AdditionalConditionsContext } from "./AdditionalConditions"
import DeleteAlert from "./DeleteAlert"
import AddDescription from "./AddDescription"

function SelectConditionsItem({item, index}) {
    
    const [showAlert, setShowAlert] = useState(false)
    const {setShowDescription} = useContext(AdditionalConditionsContext)

    return (
        <>
        <div className="selectConditionBodyMinusWrapper">

            {/* Окошко "вы уверены, что хотите удалить" */}
            { showAlert && <DeleteAlert item={item} setShowAlert={setShowAlert}/>}
            
            <div className="selectConditionWrapper">
                <div className="minusConditionWrapper">
                    <Image 
                        alt="minusAddTask"
                        className="minusCondition"
                        src={images_.minusAddTask}
                        onClick={() => setShowAlert(prev => !prev)}    
                    />
                </div>
                <div className="plusConditionWrapper">
                    <Image 
                        alt="PlusAddTask"
                        className="plusCondition"
                        src={images_.PlusAddTask}
                        onClick={() => setShowDescription(prev => !prev)}    
                    />
                </div>

                <span className="selectConditionItem">{item}</span>
            </div>

            
        </div>

        

        </>
    )
}

export default function SelectConditions() {
    const {selectConditions} = useContext(AdditionalConditionsContext);
    
    return (
        selectConditions.map((item, index) => {
            return <SelectConditionsItem key={`selectConditions-${index}`}  item={item} index={index}/>
        })
    )
}