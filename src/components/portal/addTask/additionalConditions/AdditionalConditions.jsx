"use client"

import Image from "next/image"
import images_ from "../../imgs"
import { createContext, useState } from "react"
import ButtonAddConditions from "./ButtonAddConditions"
import AdditionalConditionsList from "./AdditionalConditionsList"
import SelectConditions from "./SelectConditions"
import AddDescription from "./AddDescription"


export const AdditionalConditionsContext = createContext()

export default function AdditionalConditions() {
    const [isOpenList, setIsOpenList] = useState(false);
    const [listConditions, setListConditions] = useState([
        "УЗИ",
        "ЭКГ",
        "Анализ кала",
        "Анализ мочи",
        "Анализы твоей бабушки",
        "Какой-то текст 1",
        "Какой-то текст 2",
        "Какой-то текст 3",
        "И еще очень длинное предложение, ну, смекате, dvdv d bedb erb tn rtn rtnrtntrn rtn rtда?"
    ]);
    const [selectConditions, setSelectConditions] = useState([]);


    const [showDescription, setShowDescription] = useState(false);

    return (
        <>
            <AdditionalConditionsContext.Provider 
                value={{
                        isOpenList, 
                        setIsOpenList,
                        listConditions,
                        setListConditions,
                        selectConditions,
                        setSelectConditions,
                        setShowDescription
                    }}>
                <div className="additionalConditionsSelect">

                    {/* Тут отображаются выбранные доп условия */}
                    <SelectConditions />

                    
                    {/* Это кнопка + -- она долбавляет доп условия */}

                    <div className="buttonAddConditionsLaptop">
                        <ButtonAddConditions  />
                    </div>
                        
                    {/* Это выпадающий список */}
                    <div className="additionalConditionsListWrapper">
                        <AdditionalConditionsList />
                    </div>
                    
                </div>
                 {/* Это кнопка + -- она долбавляет доп условия */}
                <div className="buttonAddConditionsMobile">    
                    <ButtonAddConditions  />
                    <AdditionalConditionsList />
                </div>
                {showDescription && <AddDescription setShowDescription={setShowDescription}/>}
                

               
                
                  


                
                

            </AdditionalConditionsContext.Provider>
        </>
    )
}