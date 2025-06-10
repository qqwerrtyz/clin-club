import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import Link from "next/link"

export default function AddModule() {
    return (
        <div className="addModuleWrapper">
            <div className="addModule">
                <div className="addModuleInputWrapper">
                    <input className="addModuleInput addModuleName" placeholder="Название модуля"/>
                </div>

                <div className="addModuleInputWrapper">
                    <input className="addModuleInput addModuleDescription" placeholder="Содержание модуля"/>
                </div>
                
                <div className="addModuleInputWrapper">
                    <input className="addModuleInput addModuleTime" placeholder="Среднее время выполнения"/>
                </div>


                <div className="addModuleTasksListWrapper">
                    <div className="addModuleTasksList">
                        <div className="addModuleTaskWrapper">
                            <input className="addModuleTaskInput" placeholder="Заголовок задачи"/>
                            <div className="addModuleTaskButtons">
                                <button className="addModuleTaskEdit">
                                    <Link style={{color: "#fff"}} href={"/portal/teacher/addTask"}>Редактировать</Link>
                                </button>
                                <button className="addModuleTaskDelete">Удалить</button>
                            </div>
                        </div>


                        
                    </div>
                </div>

                <div className="addModuleButtons">
                    <button className="addModuleAddTask">Добавить задачу</button>

                    <div className="addModulePublishOrNotBublish">
                        <button className="addModulePublish">Опубликовать</button>
                        {/* <button className="addModuleNotPublish">Снять с публикации</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}