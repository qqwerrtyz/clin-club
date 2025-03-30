export default function QuestionInput({index, headline}) {
    return (
        <div className="questionHeadlineAndInput">
            <div className="questionHeadlineWrapper">
                <span className="questionHeadline">{index}. {headline}</span>
            </div>

            <div className="questionInputWrapper">
                <input className="textColorBlack questionInput" placeholder={"Ваш ответ"} />
            </div>
        </div>
    )
}