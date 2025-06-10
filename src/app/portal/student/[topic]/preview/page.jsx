
import PreviewDescriptionModule from "@/components/portal/preview/PreviewDescriptionModule"
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import PreviewTaskExampleWrapper from "@/components/portal/preview/PreviewTaskExampleWrapper"
import { use } from "react"


export default function Preview({params}) {
    const { topic } = use(params);
    return (
        <div className="previewWrapper">
            <div className="preview">
                <PreviewDescriptionModule topic={topic}/>
                

                <PreviewTaskExampleWrapper />

            </div>
        </div>
    )
}