import TeacherWelcomeBack from "@/components/portal/teacherMain/TeacherWelcomeBack"
// import "./pageCss/page.css"
// import "./pageCss/page.media.css"

import "../pageCss/page.css"
import "../pageCss/page.media.css"

import MyModules from "@/components/portal/main/MyModules"
import Calendar from "@/components/portal/main/Calendar"
import BestCase from "@/components/portal/teacherMain/BestCase"

export default function PortalTeacher() {
    return (
        <div className="teacherMainPage">
            <div className="teacherMainPageColumn1">
                <TeacherWelcomeBack />

                <div className="teacherModuleWrapper">
                    <MyModules />
                </div>
            </div>

            <div className="teacherMainPageColumn2">
                <div className="calendarTeacherWrapper">
                    <Calendar />
                </div>

                <div className="bestCaseWrapper">
                    <BestCase />
                </div>
            </div>
        </div>
    )
}