

import AnalyticsFrequency from "@/components/portal/analytics/frequency/AnalyticsFrequency";
// import "../pageCss/page.css"
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"


import AnalyticsSlovedModule from "@/components/portal/analytics/slovedModule/AnalyticsSlovedModule";
import AnalyticsTaskForWeek from "@/components/portal/analytics/taskForWeek/AnalyticsTaskForWeek";
import ErrorTask from "@/components/portal/analytics/errorTask/ErrorTask";



export default function Analytics() {
    // const canvasTest = useRef(null);
   


    


   
  
    
   
    return (
        <div className="analyticsWrapper">
            <div className="analytics">
                <div className="analyticsColumn1">
                    <AnalyticsSlovedModule />
                    <AnalyticsFrequency />
                </div>
                {/* analyticsColumn1 */}

                <div className="analyticsColumn2">
                    <AnalyticsTaskForWeek /> 
                    <ErrorTask /> 
                </div>

                

            </div>
        </div>
    )
}