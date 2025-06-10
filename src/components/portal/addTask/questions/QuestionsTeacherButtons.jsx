import Image from "next/image";
import images_ from "../../imgs";

export default function QuestionsTeacherButtons() {
    return (
        <div className="questionsTeacherButtons">
            <Image className="questionsTeacherButton" src={images_.PlusAddTask}/>
            <Image className="questionsTeacherButton" src={images_.minusAddTask}/>
        </div>
    )
}