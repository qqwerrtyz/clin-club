export default function SummaryHeader() {
    return (
        <div className="summaryAnalytycsTeacherHeader">
            <span className="summaryAnalytycsTeacherHeadline">Сводка</span>
            <span className="summaryAnalytycsTeacherDate">{new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}</span>
        </div>
    )
}