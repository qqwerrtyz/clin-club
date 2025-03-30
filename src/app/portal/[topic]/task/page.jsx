import InspectionData from "@/components/portal/task/InspectionData";
import "../../pageCss/page.css"
import "../../pageCss/page.media.css"
import Questions from "@/components/portal/task/Questions";

export default function Task() {
    return (
        <div className="taskWrapper">
            <div className="tas">
                <div className="taskQuestionAndInspectionDataWrapper">
                    <p className="taskQuestion">
                        Мужчина, 54 года, обратился в поликлинику с жалобами на периодические боли в 
                        эпигастрии, которые возникают спустя 1-2 часа после еды. Боли купируются приемом
                        антацидов. Также отмечает изжогу и отрыжку кислым. В анамнезе – курение на протяжении
                        30 лет, употребление алкоголя по выходным. Вес пациента снизился на 4 кг 
                        за последние 3 месяца. 
                    </p>
                    <p className="taskQuestion">
                        Мужчина, 54 года, обратился в поликлинику с жалобами на периодические боли в 
                        эпигастрии, которые возникают спустя 1-2 часа после еды. Боли купируются приемом
                        антацидов. Также отмечает изжогу и отрыжку кислым. В анамнезе – курение на протяжении
                        30 лет, употребление алкоголя по выходным. Вес пациента снизился на 4 кг 
                        за последние 3 месяца. 
                    </p>
                   
                </div>
                {/* taskQuestionWrapper */}
                <InspectionData />

                <Questions />

                <div className="taskSendWrapper">
                    <button type="button" className="blueBg textColorWhite taskSend">Проверить</button>
                </div>
            </div>
        </div>
    )
}