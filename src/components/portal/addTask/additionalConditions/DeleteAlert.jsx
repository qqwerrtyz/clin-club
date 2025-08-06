import { useContext } from "react"
import { AdditionalConditionsContext } from "./AdditionalConditions"

export default function DeleteAlert({item, setShowAlert}) {
    const {setListConditions, setSelectConditions} = useContext(AdditionalConditionsContext);

    function deleteElem() {
        // Добавляем item снова в список не выбранных элементов
        // setListConditions(prev => {
        //     return [...prev, item]
        // })

        // Удаляем item из списка выбранных элементов
        setSelectConditions(prev => {
            return prev.filter(condition => condition !== item)
        })
        setShowAlert(prev => !prev)
    }
    return (
        <div className="selectConditionMinusWrppaer">
            Уверены, что нужно удалить? 
            <span className="deleteConditionYes" onClick={deleteElem}>Да</span>
        </div>
    )
}