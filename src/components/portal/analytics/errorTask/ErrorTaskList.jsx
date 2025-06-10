"use client"
import Link from "next/link"
import { useState } from "react"

export default function ErrorTaskList() {
    
    const [errorTaskListItems, setErrorTaskListItems] = useState({
        pediatriya: {
            ruName: "Педиатрия ",
            errorCount: 23,
        },
        hirirgiya: {
            ruName: "Хирургия ",
            errorCount: 15,
        },
        biohimiya: {
            ruName: "Биохимия skfm b irnk brkb netrkbeb kerb kerm berklmb erll bm kerbm kete erk bm",
            errorCount: 10,
        }
    })

    return (
        <div className="errorTaskList">
            {
                Object.keys(errorTaskListItems).map((item, index) => {
                    return (
                        <div key={`${item}-${index}`} className="errorTaskItem">
                            <div className="errorTaskItemContainerDesctop">
                                <div className="errorTaskItemIndexName"> 
                                    <span className="errorTaskRating">{index + 1}</span>
                                    <span className="errorTaskName">{errorTaskListItems[item].ruName}</span>
                                </div>

                                <div className="errorTaskItemErrorButton">
                                    <span className="errorTaskError">{errorTaskListItems[item].errorCount} ошибки</span>
                                    <button type="button" className="errorTaskButton">
                                        <Link href="#" className="errorTaskFix">Исправить</Link>
                                    </button>
                                </div>
                            </div>
                            <button type="button" className="errorTaskButtonMobile">
                                <Link href="#" className="errorTaskFix">Исправить</Link>
                            </button>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}