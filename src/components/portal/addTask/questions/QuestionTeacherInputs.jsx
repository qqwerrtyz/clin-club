export default function QuestionTeacherInputs() {
    return (
        <div className="questionsTeacherInputs">
            <div className="questionsTeacherInputWrapper">
                <input className="questionsTeacherInput" placeholder="Название вопроса"/>
            </div>

            <div className="questionsTeacherTextareaWrapper">
                <textarea className="questionsTeacherTextarea" placeholder="Эталонный ответ"/>
            </div>
        </div>
    )
}