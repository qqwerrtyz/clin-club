
import PreviewDescriptionModule from "@/components/portal/preview/PreviewDescriptionModule"
import "../../pageCss/page.css"
import "../../pageCss/page.media.css"
import PreviewTaskExampleWrapper from "@/components/portal/preview/PreviewTaskExampleWrapper"


export default function Preview() {
    return (
        <div className="previewWrapper">
            <div className="preview">
                <PreviewDescriptionModule />
                

                <PreviewTaskExampleWrapper />

            </div>
        </div>
    )
}