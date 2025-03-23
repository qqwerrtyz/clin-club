
export default function SectionAnotherSpecialties() {
    const specialties = ["Педиатрия", "Неврология", "Акушерство и гинекология", 
        "Психиатрия", "Инфекционные болезни", "Сердечно-сосудистая хирургия",
        "Госпитальная терапия"]
    return (
        <div className="sectionAnotherSpecialtiesWrapper">
            <div className="sectionAnotherSpecialtiesHeadlineWrapper">
                <h3 className="sectionAnotherSpecialtiesHeadline">Доступные специальности</h3>
            </div>

            <div className="sectionAnotherSpecialtiesItemsWrapper">
                <div className="sectionAnotherSpecialties">
                    {
                        specialties.map(item => {
                            return (
                                <div className="sectionAnotherItemWrapper">
                                    <span className="textColorBlack sectionAnotherItem">{item}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}