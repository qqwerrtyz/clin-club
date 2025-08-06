
import PreviewDescriptionModule from "@/components/portal/preview/PreviewDescriptionModule"
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import PreviewTaskExampleWrapper from "@/components/portal/preview/PreviewTaskExampleWrapper"
import { use, useEffect } from "react"
import { useRouter } from "next/navigation"


export default function Preview({params}) {
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
    return (
        <div className="previewWrapper">
            <div className="preview">
                <PreviewDescriptionModule topic={topic}/>
                

                <PreviewTaskExampleWrapper />

            </div>
        </div>
    )
}