export default function SectionOffers() {
    const offerItems = [
        {
            headline: "Удобство и доступность",
            description: "– занимайтесь в любое время через платформу"
        },

        {
            headline: "Реальные клинические кейсы",
            description: "— задачи, которые помогут глубже понять вашу специализацию"
        },

        {
            headline: "Обратная связь от экспертов",
            description: "– изучайте разбор решений и получайте советы от авторов кейсов"
        }
    ]

    return (
        <div className=" sectionOffers">
            <div className="sectionOffersWrapper">
                {
                    offerItems.map((item, index) => {
                        return (
                            <div className={`${index === 0 ? "pinkBg" : index === 1 ? "purpleBg" : "greenBg"} sectionOffersItem`}>
                                <h2 className="textColorWhite sectionOffersHeadline">{item.headline}</h2>
                                <div className="sectionOffersDescriptionWrapper">
                                    <span className="textColorWhite sectionOffersDescription">{item.description}</span>
                                </div>  
                            </div>
                        )
                    })
                }
            </div>
        </div>

           
    )
}