import { useContext } from "react"
import { DataAnalitycsContext } from "./AnalyticsSlovedModule";

export default function AnalyticsSlovedSelect({setSloved, setShowModalSelect}) {
    const {solvedOrNot} = useContext(DataAnalitycsContext);

    function getSelectModule(event, item) {
        // const item = event.target;
        localStorage.setItem("nameModule", item)

        let nameModule = localStorage.getItem("nameModule");
        setSloved(prev => {
            return {
                nameSloved: nameModule,
                rusName: solvedOrNot[nameModule].name,
                slovedValue: solvedOrNot[nameModule].solved,
                notSlovedValue: solvedOrNot[nameModule].notSolved
            }
        })

        setShowModalSelect(prev => !prev)
    }
    return (
        <div className="analyticsSelectModuleWrapper">
            <div className="analyticsSelectModule">
                {
                    Object.keys(solvedOrNot).map(item => {
                        return (
                            <div
                                key={`module-${item}`}
                                className="analyticsSelectItemWrapper" >
                                <span 
                                    onClick={(event) => getSelectModule(event, item)}
                                    className="analyticsSelectItem">{solvedOrNot[item].name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}