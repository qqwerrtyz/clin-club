"use client"
import { createContext, useEffect, useState } from "react";
import AnalyticsSloved from "./AnalyticsSloved";
import AnalyticsSlovedSelect from "./AnalyticsSlovedSelect";
import HeaderAnalytics from "./HeaderAnalytics";

export const DataAnalitycsContext = createContext()
export default function AnalyticsSlovedModule() {
    const [showModalSelect, setShowModalSelect] = useState(false)


    const solvedOrNot = {
        
        "pediatryya": {
            id: 0,
            name: "Педиатрия",
            solved: 30,
            notSolved: 70,
        },

        
        "hirugiya": {
            id: 1,
            name: "Хирургия",
            solved: 70,
            notSolved: 30,
        },

        "propedevtika": {
            id: 2,
            name: "Пропедевтика",
            solved: 50,
            notSolved: 50,
        },

        "nevrologiya": {
            id: 3,
            name: "Неврология",
            solved: 40,
            notSolved: 60,
        },

        "psohiatriya": {
            id: 4,
            name: "Психиатрия",
            solved: 23,
            notSolved: 77,
        },
    }

    const [slovedData, setSloved] = useState({
        nameSloved: "",
        rusName: "",
        slovedValue: 0,
        notSlovedValue: 0
    })

    



    
    useEffect(() => {
        let nameModule = localStorage.getItem("nameModule");
        if (!nameModule) {
            nameModule = Object.keys(solvedOrNot)[0]
            localStorage.setItem("nameModule", nameModule)
        }
        setSloved(prev => {
            const value = solvedOrNot[nameModule];
            prev = {
                nameSloved: nameModule,
                rusName: value.name,
                slovedValue: value.solved,
                notSlovedValue: value.notSolved
            }
            return prev 
        })
    }, []) 
    return (
        <DataAnalitycsContext.Provider value={{slovedData, solvedOrNot}}>
            <div className="analyticsModule">
                <HeaderAnalytics setShowModalSelect={setShowModalSelect}/>
                <AnalyticsSloved/>
                
                {
                    showModalSelect && <AnalyticsSlovedSelect setSloved={setSloved} setShowModalSelect={setShowModalSelect}/>
                }
                
            </div>
        </DataAnalitycsContext.Provider>
    )
}