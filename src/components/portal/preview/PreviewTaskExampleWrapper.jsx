import Link from "next/link";

export default function PreviewTaskExampleWrapper({topic}) {
    return (
        <div className="previewTaskExampleWrapper">
            <div className="previewTaskExampleHeadlineWrapper">
                <h1 className="previewTaskExampleHeadline">Пример задачи</h1>
            </div>

            <div className="divContainer previewTaskExample">
                <div className="previewTaskExampleContent">
                    <h6 className="previewTaskExampleTitle">Задача:</h6>
                    <p className="previewTaskExampleBody">Мальчик 3 лет поступил с жалобами на повышение температуры до 39°C, кашель 
                    и одышку. Заболел 2 дня назад, сначала была заложенность носа...</p>
                </div>

                <div className="previewTaskExampleContent">
                    <h6 className="previewTaskExampleTitle">Дополнительная информация:</h6>
                    <p className="previewTaskExampleBody">Аускультативно – ослабленное дыхание слева, мелкопузырчатые хрипы. ЧСС 130 уд/мин, ЧДД 40...</p>
                </div>

                <div className="previewTaskExampleContent">
                    <h6 className="previewTaskExampleTitle">Вопросы:</h6>
                    <div className="previewTaskExampleQuestions">
                        <span className="previewTaskExampleQuestion">1. Какой предварительный диагноз можно поставить?</span>
                        <span className="previewTaskExampleQuestion">2. Какие дополнительные исследования необходимы для уточнения диагноза?</span>
                        <span className="previewTaskExampleQuestion">3. Какой алгоритм лече......</span>
                    </div>
                </div>
            </div>
          
        </div>

    )
}