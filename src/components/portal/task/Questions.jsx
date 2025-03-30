import QuestionInput from "./QuestionInput"

export default function Questions() {
    const questions = [
        "Какой наиболее вероятный диагноз?",
        "Какие осложнения могут развиться у пациента?",
        "Какую тактику лечения выбрать?",
        "Какую тактику лечения выбрать?",
        "Какую тактику лечения выбрать?",
    ]
    return (
        <div className="questionsWrapper">
            <div className="questions">
                <div className="questionsHeadlineWrapper">
                    <h4 className="questionsHeadline">Вопросы</h4>
                </div>

                <div className="questionInputs">
                    {
                        questions.map((item, index) => {
                            return <QuestionInput index={index + 1} headline={item}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}