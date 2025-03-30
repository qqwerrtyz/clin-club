import Image from "next/image";
import avatar1 from "../../../../public/imgs/portal/preview/avatar1.png"
import avatar2 from "../../../../public/imgs/portal/preview/avatar2.png"
import avatar3 from "../../../../public/imgs/portal/preview/avatar3.png"
import grayAround from "../../../../public/imgs/portal/preview/grayAround.png"
import Link from "next/link";

export default function PreviewDescriptionModule() {
    return (
        <div className="previewDescriptionModule">
            <div className="previewDescriptionHeadlineWrapper">
                <h1 className="textColorBlack previewDescriptionHeadline">Клинические задачи в педиатрии</h1>
            </div>

            <div className="previewDescriptionWrapper">
                <p className="textColorBlack previewDescription">
                    Модуль содержит краткие клинические случаи, 
                    направленные на развитие к
                    линического мышления в педиатрии. Задачи охватывают различные возрастные группы 
                    детей и включают ключевые аспекты диагностики, 
                    дифференциального диагноза и лечения. 
                </p>

                <div className="previewDescriptionTimeAuthorJob">
                    <span className="textColorBlack previewDescriptionTime">Среднее время на одну задачу – 5–10 минут. Всего задач 25</span>
                    <span className="textColorBlack previewDescriptionAuthor">Каширина Ю. K</span>
                    <span className="textColorBlack previewDescriptionJob">Врач в городской больнице №2 города Пенза</span>
                </div>
            </div>

            <div className="previewHowPersonLearnWrppaer">
                <div className="previewHowPersonLearnAvatarWrapper">
                    {
                        [avatar1, avatar2, avatar3].map((item, index)=> {
                            return <Image className={`${ index != 0 ? "previewHowPersonLearnMargin" : "" } previewHowPersonLearnAvatar`} src={item}/>
                        })
                    }
            
                    <div className="previewHowPersonLearnMargin previewHowPersonLearnGrayBgWrapper" style={{display: "inline-block"}}>
                        <Image className="previewHowPersonLearnGrayBg" src={grayAround}/>
                        <span className="previewHowPersonLearnCountLearn">+125</span>
                    </div>

                    
                </div>

                <div className="previewLearnThisModuleWrapper">
                    <span className="textColorBlack previewLearnThisModule">Скачали этот модуль</span>
                </div>
            </div>

            <button className="blueBg previewOpenTaskButtonDesctopAndMobile previewOpenTaskButton">
                <Link href={"#"} className="textColorWhite previewOpenTaskOpen">Открыть</Link>
            </button>
        </div>

    )
}