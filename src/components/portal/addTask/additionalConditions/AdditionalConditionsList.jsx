import { useContext } from "react"
import { AdditionalConditionsContext } from "./AdditionalConditions"

export default function AdditionalConditionsList({}) {

    const {isOpenList, setSelectConditions, setIsOpenList, listConditions, setListConditions} = useContext(AdditionalConditionsContext)
    

    function addConditions(item) {
        // Добавляем название в список выбранных доп условия
        setSelectConditions(prev => {
            return [...prev, item]
        })

        setListConditions(prev => {
            return prev.filter(conditions => conditions !== item)
        })
        // Закрываем выпдающий список
        setIsOpenList(prev => !prev)

    }

    return (
        isOpenList && (
            <div className="additionalConditionsList">
                {
                    listConditions.map((item, index) => {
                        return (
                            <span
                                key={index +`-conditions`}
                                onClick={() => addConditions(item)}
                                className="additionalConditionsListItem">{item}</span>
                        )
                    })
                }
            </div>
        )
    )
}