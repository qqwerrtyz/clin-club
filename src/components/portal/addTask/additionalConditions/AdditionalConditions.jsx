"use client"
import { createContext, useEffect, useState } from "react"
import ButtonAddConditions from "./ButtonAddConditions"
import AdditionalConditionsList from "./AdditionalConditionsList"
import SelectConditions from "./SelectConditions"
import AddDescription from "./AddDescription"

export const AdditionalConditionsContext = createContext()

export default function AdditionalConditions() {
    const [isOpenList, setIsOpenList] = useState(false);
    // const [listConditions, setListConditions] = useState([
    //     "УЗИ",
    //     "ЭКГ",
    //     "Анализ кала",
    //     "Анализ мочи",
    //     "Анализы твоей бабушки",
    //     "Какой-то текст 1",
    //     "Какой-то текст 2",
    //     "Какой-то текст 3",
    //     "И еще очень длинное предложение, ну, смекате, dvdv d bedb erb tn rtn rtnrtntrn rtn rtда?"
    // ]);

    const [conditionsData, setConditionsData] = useState(null); // Данные с API

    const [selectConditions, setSelectConditions] = useState([]);
    const [showDescription, setShowDescription] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

 
    useEffect(() => {
        const fetchConditions = async () => {
            try {
                const response = await fetch('https://api.clinclub.ru/v1/conditions/');
                if (!response.ok) {
                    throw new Error('Ошибка загрузки условий');
                }
                const data = await response.json();
                setConditionsData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchConditions();

    }, [])

    // Функция для добавления условия
    const addCondition = (name) => {
        setSelectConditions(prev => [...prev, name]);
    };

    // Проверка наличия доступных условий
    const hasAvailableConditions = conditionsData && 
        Object.values(conditionsData).flat().length > 0;

    return (
        <>
            <AdditionalConditionsContext.Provider 
                value={{
                        isOpenList, 
                        setIsOpenList,
                        conditionsData,
                        selectConditions,
                        setSelectConditions,
                        setShowDescription,
                        addCondition,
                        loading,
                        error,
                        hasAvailableConditions 
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