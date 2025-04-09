export default function Tarif () {
    const offers = [
        "Доступ предоставляется на 1 месяц",
        "Количество задач – 20 задач в месяц",
        "Ежедневные задания – 2 задания в день",
        "Чат с врачом – не доступен",
        "Стоимость – 1 999 ₽ в месяц"
    ]
    return (
        <div className="myProfileCol myProfileTarifWrapper">
            <div className="myProfileTarif">
                <div className="myProfileTarifHeadlineWrapper">
                    <h2 className="myProfileTarifHeadline">Тариф: Базовый</h2>
                </div>

                <ul className="myProfileTarifOffersWrapper">
                    {
                        offers.map((item, index) => {
                            return <li key={`${item}_${index}`} className="myProfileTarifOffer">{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}