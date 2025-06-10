import Image from "next/image";
import images_ from "../imgs";
import Link from "next/link";

export default function TeacherWelcomeBack() {
    return (
        <div className="divContainer teacherWelcomeBack">
            <div className="teacherWelcomeBackHello">
                <span className="teacherWelcomeBackHelloName">Здравствуйте, Лиза</span>
                <span className="teacherWelcomeBackText">Добро пожаловать обратно</span>
            </div>

            <button className="teacherWelcomeBackCreateNewCase">
                <Link className="teacherWelcomeBackCreateNewCaseLink"
                    style={{color: "#fff"}}
                    href={"/portal/teacher/addModule"}>
                    <Image className="teacherWelcomeBackPlus" alt="icon-plus" src={images_.PlusMainpage}/>
                    <span className="teacherWelcomeBackCreateNewCaseText">
                        Создать новый кейс
                    </span>
                </Link>
            </button>
        </div>
    )
}