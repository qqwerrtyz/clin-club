import Link from "next/link";

export default function YourAskQuestions() {
    return (
        <div className="yourAskQuestionsWrapper">
            <div className="divContainer yourAskQuestions">
                <div className="yourAskQuestionTextWrapper">
                    <span className="yourAskQuestionText">Вы ответили на <span className="yourAskQuestionTextCount">22 вопроса</span> от студента</span>
                    <span className="noAskedQuestion">Не отвечено: 2</span>
                </div>

                    <Link href={"/portal/chat"} style={{color: "#fff"}} className="yourAskQuestionAsk">
                        Ответить
                    </Link>
            </div>
        </div>
    )
}