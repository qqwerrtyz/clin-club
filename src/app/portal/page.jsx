

import Welcome from "@/components/portal/main/Welcom"
import "./pageCss/page.css"
import "./pageCss/page.media.css"
import MyModules from "@/components/portal/main/MyModules"


export default function Portal() {
    
    return (
        <div className="indexPortal">
            <Welcome />
            <MyModules />
        </div>
    )
}