"use client"
import Link from "next/link";
import { use, useEffect } from "react"
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import { useRouter } from "next/navigation";
export default function TopicModule({params}) {
    const router = useRouter();

    useEffect(() => {
        // Проверяем роль пользователя
        const role = localStorage.getItem("role");
        if (role !== "student") {
        router.push("/");
        return;
        }

        // Инициализируем nameModule, если ещё нет
        if (!localStorage.getItem("nameModule")) {
        localStorage.setItem("nameModule", "");
        }
    }, [router]);
    

    const { topic } = use(params);

    const example = {
        "pediatriya": {
            topicName: "Педиатрия",
            topics: [
                {
                    author: "Каширина Ю. К",
                    job: "7 гор больница",
                    themeName: "Пупкина темsd sf  er berbererh erh re fbsrb srvgsrgа",
                    datePublish: "27.34.2002"
                },

                {
                    author: "Иванов Ю. К",
                    job: "22 гор больница",
                    themeName: "Тема тема тема тема",
                    datePublish: "11.23.2002"
                },

                {
                    author: "Сидоров Ю. К",
                    job: "88 гор больница",
                    themeName: "Тема которую лучdvdvше не поднимать",
                    datePublish: "01.11.2002"
                },

                {
                    author: "Петро Ю. К",
                    job: "13 гор больница",
                    themeName: "Не тема, а темка",
                    datePublish: "01.01.2002"
                },

                {
                    author: "Каширина Ю. К",
                    job: "7 гор больница",
                    themeName: "Очень щепетильная тема",
                    datePublish: "27.34.2002"
                },

                
            ]
            
        },

        "obshaya-hirurgiya": {
            topicName: "Общая хирургия",
            topics: [
                {
                    author: "Каширина Ю. К",
                    job: "7 гор больница",
                    themeName: "Пупкина темsd sf  er berbererh erh re fbsrb srvgsrgа",
                    datePublish: "27.34.2002"
                },

                {
                    author: "Иванов Ю. К",
                    job: "22 гор больница",
                    themeName: "Тема тема тема тема",
                    datePublish: "11.23.2002"
                },

                {
                    author: "Сидоров Ю. К",
                    job: "88 гор больница",
                    themeName: "Тема которую лучdvdvше не поднимать",
                    datePublish: "01.11.2002"
                },

                {
                    author: "Петро Ю. К",
                    job: "13 гор больница",
                    themeName: "Не тема, а темка",
                    datePublish: "01.01.2002"
                },

                {
                    author: "Каширина Ю. К",
                    job: "7 гор больница",
                    themeName: "Очень щепетильная тема",
                    datePublish: "27.34.2002"
                },
            ]
            
        },

        
       

    }
    return (
        <div className="topicModuleWrapper">
            <div className="topicModule">

                <div className="topicModuleHeadlineWrapper">
                    <h1 className="topicModuleHeadline">{example[topic].topicName}</h1>
                </div>


                <div className="topicModuleItemsWrapper">
                    {
                        example[topic].topics.map(((item, index) => {
                            return (
                                <div key={`topic-${index}`} className="divContainer topicModuleItem">
                                    <div className="topicModuleAuthorAndJobWrapper">
                                        <span className="topicModuleAuthor">{item.author}</span>
                                        <span className="topicModuleJob">{item.job}</span>
                                    </div>

                                    <div className="topicModuleThemeNameWrapper">
                                        <span className="topicModuleThemeName">{item.themeName}</span>
                                    </div>

                                    <div className="topicModuleDateWrapper">
                                        <span className="topicModuleDate">{item.datePublish}</span>
                                    </div>
                                    
                                    <button type="button" className="blueBg topicModuleButton">
                                        <Link
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "100%",
                                                height: "100%"
                                            }}
                                            href={`/portal/student/${topic}/preview`}
                                            className="textColorWhite topicModuleLearn">Решать</Link>
                                    </button>

                                </div>
                            )
                        }))
                    }
                </div>
            

            </div>
        </div>
    )
}