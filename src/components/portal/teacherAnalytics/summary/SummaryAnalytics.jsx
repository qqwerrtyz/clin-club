import SummaryData from "./SummaryData";
import SummaryHeader from "./SummaryHeader";

export default function SummaryAnalytics() {
    return (
        <div className="summaryAnalytycsTeacherWrapper">
            <div className="divContainer summaryAnalytycsTeacher">
                <SummaryHeader />

                <SummaryData />
            </div>
        </div>
        
    )
}