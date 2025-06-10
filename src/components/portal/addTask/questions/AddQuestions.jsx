import QuestionsTeacherButtons from "./QuestionsTeacherButtons";
import QuestionTeacherInputs from "./QuestionTeacherInputs";

export default function AddQuestions() {
    return (
        <div className="addQuestionsTeacherWrapper">
            <div className="questionTeacher">
                <QuestionTeacherInputs />
                {/* questionsTeacherInputs */}
                <QuestionsTeacherButtons />
            </div>

            <div className="questionTeacher">
                <QuestionTeacherInputs />
                {/* questionsTeacherInputs */}
                <QuestionsTeacherButtons />
            </div>

            <div className="questionTeacher">
                <QuestionTeacherInputs />
                {/* questionsTeacherInputs */}
                <QuestionsTeacherButtons />
            </div>

            

        </div>
    )
}