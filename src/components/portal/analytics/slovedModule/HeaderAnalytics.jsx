import { useContext } from "react"
import images_ from "../../imgs"
import Image from "next/image"
import { DataAnalitycsContext } from "./AnalyticsSlovedModule"

export default function HeaderAnalytics({setShowModalSelect}) {
    const {slovedData} = useContext(DataAnalitycsContext)
    return (
        <div className="analyticsModuleHeader" id="" onClick={(event) => {
            setShowModalSelect(prev => !prev)
        }}>
            
            <span className="analyticsModuleName">{slovedData?.rusName}</span>
            <Image alt="иконкаВниз" className="analyticsIconDown" src={images_.down}/>
        </div>
    )
}