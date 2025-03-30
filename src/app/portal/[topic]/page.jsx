"use client"
import Link from "next/link";
import { use, useEffect } from "react"
import "../pageCss/page.css"
import "../pageCss/page.media.css"

export default function TopicModule({params}) {
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
                    author: "Пидорасова Ю. К",
                    job: "228 гор больница",
                    themeName: "Залупкина тема",
                    datePublish: "11.23.2002"
                },

                {
                    author: "Подпёздова Ю. К",
                    job: "1488 гор больница",
                    themeName: "Тема которую лучdvdvше не поднимать",
                    datePublish: "01.11.2002"
                },

                {
                    author: "Хуесосов Ю. К",
                    job: "1337 гор больница",
                    themeName: "Не тема, а темка",
                    datePublish: "01.01.2002"
                },

                {
                    author: "Каширина Ю. К",
                    job: "7 гор больница",
                    themeName: "Пупкина тема",
                    datePublish: "27.34.2002"
                },

                {
                    author: "Пидорасова Ю. К",
                    job: "228 гор больница",
                    themeName: "Залупкина тема",
                    datePublish: "11.23.2002"
                },

                {
                    author: "Подпёздова Ю. К",
                    job: "1488 гор больница",
                    themeName: "Тема которую лучdvdvше не поднимать",
                    datePublish: "01.11.2002"
                },

                {
                    author: "Хуесосов Ю. К",
                    job: "1337 гор больница",
                    themeName: "Не тема, а темка",
                    datePublish: "01.01.2002"
                }
            ]
            
        },

        "obshaya-hirurgiya": {
            topicName: "Общая хирургия",
            topics: [
                {
                    author: "Вжопудавалов Ю. К",
                    job: "-10 гор больница",
                    themeName: "Епты бля фантазия кончилась",
                    datePublish: "27.34.2002"
                },

                {
                    author: "Наротпринималов Ю. К",
                    job: "123 гор больница",
                    themeName: "УААА тема хуема",
                    datePublish: "10.20.1488"
                },

                {
                    author: "Необрезаный Ю. К",
                    job: "1488 гор больница",
                    themeName: "Тема которую лучше не поднимать",
                    datePublish: "01.11.2002"
                },

                {
                    author: "Заёбов Ю. К",
                    job: "1337 гор больница",
                    themeName: "Не тема, а темка",
                    datePublish: "01.01.2002"
                }
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
                                        <Link href={"#"} className="textColorWhite topicModuleLearn">Решать</Link>
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