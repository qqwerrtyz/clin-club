import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import DecideInWeekOrMonth from "@/components/portal/teacherAnalytics/decideInWeekOrMonth/DecideInWeekOrMonth"
import TeacherAnalitycsDiagram from "@/components/portal/teacherAnalytics/diagram/TeacherAnalitycsDiagram"
import SummaryAnalytics from "@/components/portal/teacherAnalytics/summary/SummaryAnalytics"
import YourAskQuestions from "@/components/portal/teacherAnalytics/yourAskQuestions/YourAskQuestions"

export default function TeacherAnalytics() {
    return (
        <div className="teacherAnalytics">
            <div className="TeacherAnalyticsColumn1">

                <SummaryAnalytics />
                
                <DecideInWeekOrMonth />
            </div>

            <div className="teacherAnalyticsColumn2">
                <TeacherAnalitycsDiagram />

                <YourAskQuestions />
            </div>
        </div>
    )
}