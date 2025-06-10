import ErrorTaskList from "./ErrorTaskList";


export default function ErrorTask() {
    return (
        <div className="ErrorTask">
            <span className="secondHeadline">Рейтинг дисциплин где совершено больше всего ошибок </span>

            <ErrorTaskList />
        </div>
    )
}