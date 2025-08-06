import Image from "next/image"
import images_ from "../../imgs"
import { useContext } from "react"
import { AdditionalConditionsContext } from "./AdditionalConditions"

export default function ButtonAddConditions() {
    const { 
        hasAvailableConditions, 
        setIsOpenList 
    } = useContext(AdditionalConditionsContext);
    
    return (
        // Кнопка отображается только если есть доступные условия
        hasAvailableConditions && (
            <button
                className="plusAddTaskWrapper"
                onClick={() => setIsOpenList(prev => !prev)}>
                <Image
                    alt="plus"
                    src={images_.PlusAddTask}
                    className="plusAddTask"
                />
            </button>
        )
    )
}
