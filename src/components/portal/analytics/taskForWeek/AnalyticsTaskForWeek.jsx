import AnalyticsTaskForWeekDiagram from "./AnalyticsTaskForWeekDiagram";

export default function AnalyticsTaskForWeek() {
    return (
        <div className="analyticsTaskForWeekWrapper">
            <div className="analyticsTaskForWeek">
                <span className="secondHeadline">Аналитика решеных задачи за неделю </span>

                <AnalyticsTaskForWeekDiagram />
            </div>
        </div>
    )
}