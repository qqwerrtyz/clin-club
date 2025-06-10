import Image from "next/image"
import images_ from "../../imgs"
import { useContext } from "react"
import { AdditionalConditionsContext } from "./AdditionalConditions"

export default function ButtonAddConditions() {
    const {listConditions, setIsOpenList} = useContext(AdditionalConditionsContext)
    return (
        // Кнопка добавление доп условия исечазает, когда ВСЕ доп условия выбраны
        listConditions.length !== 0 && (
            <button
                className="plusAddTaskWrapper">
                <Image
                    alt="plus"
                    src={images_.PlusAddTask}
                    className="plusAddTask"
                    onClick={() => setIsOpenList(prev => !prev)}
                />
            </button>
        )
    )
}