import Diagram from "./Diagram";

export default function TeacherAnalitycsDiagram() {
    return (
        <div className="divContainer teacherAnalitycsDiagramWrapper">
            <div className="teacherAnalitycsDiagram">
                <div className="teacherAnalitycsDiagramHeader">
                    <span className="teacherAnalitycsDiagramHeadline">С первой попытки больше 70% правильных решений за все время</span>
                </div>

                <Diagram />
            </div>
        </div>
    )
}