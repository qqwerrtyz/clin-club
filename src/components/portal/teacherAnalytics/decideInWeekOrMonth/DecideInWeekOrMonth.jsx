import DecideInWeekOrMonthData from "./DecideInWeekOrMonthData";

export default function DecideInWeekOrMonth() {
    return (
        <div className="decideInWeekOrMonthWrapper">
            <div className="divContainer decideInWeekOrMonth">
                <div className="decideInWeekOrMonthHeader">
                    <span className="decideInWeekOrMonthHeadline">Решают за неделю / месяц</span>
                </div>
                
                <DecideInWeekOrMonthData />
                
            </div>
        </div>
    )
}