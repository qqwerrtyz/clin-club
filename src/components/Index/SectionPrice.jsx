"use client"

import done from "../../../public/imgs/landing/sectionPrice/done.png"
import notDone from "../../../public/imgs/landing/sectionPrice/notdone.png"
import Image from "next/image"

export default function SectionPrice() {
    const prices = [
        {
            number: "#1",
            bgImg: "",
            namePrice: "БАЗОВЫЙ",
            price: 1990,
            access: ["20 задач", "2 ежедневных задания", "Доступ на месяц", "Чат с врачом"],

        },

        {
            number: "#2",
            bgImg: "",
            namePrice: "PROF-ВРАЧ",
            price: 2990,
            access: ["50 задач", "4 ежедневных задания", "Доступ на месяц", "Чат с врачом"],
            
        }
    ]


    return (
        <div className="sectionPriseWrapper">
            <div className="sectionPrise">
                <div className="sectionPriveHeadlineWrapper">
                    <h3 className="sectionPriveHeadline">Тарифы на подписку</h3>
                </div>

                <div className="sectionPricePrices">
                    {
                        prices.map((item, index) => {
                            return (
                                <div className="sectionPriceItemAndButtonWrapper">
                                    <div className="sectionPriceItem" key={`${item}_${index}`}>
                                        <div 
                                            className="textColorBlack sectionPriceHeader"
                                            style={{
                                                background: `url("${index === 0 
                                                    ? "/imgs/landing/sectionPrice/basePrice.png"
                                                    : "/imgs/landing/sectionPrice/profPrice.png"}")`,
                                                backgroundSize: "cover",
                                                backgroundRepeat: "no-repeat",
                                                justifyContent: `${index === 0 ? "flex-end" : "flex-start"}`
                                                
                                            }}
                                        >
                                            <h4 className="sectionPriceNumber">{item.number}</h4>
                                            <h4 className="sectionPriveName">{item.namePrice}</h4>
                                        </div>
                                        <div className="sectionPriceBody">
                                            <div className="sectionPriceItempriceWrapper">
                                                <span className="textColorBlack sectionPriceItemprice">₽{item.price}</span>
                                                <span className="sectionPriceMounth">/ Месяц</span>
                                            </div>
                                            
                                            <div className="sectionPriceLine"></div>
                                            
                                            <div className="sectionPriceOffersWrapper">
                                                {
                                                    item.access.map((i, idx) => {
                                                        return (
                                                            <div className="sectionPriceOffers">
                                                                <Image src={index == 0 && idx == 3 ? notDone : done}
                                                                    className="sectionPriceOffersIcon"
                                                                    priority
                                                                />
                                                                <span className="sectionPriceOfferItem">{i}</span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>
                                            
                                    </div>
                                    <button type="button" className="blueBg textColorWhite sectionPriceMore">Подробнее</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}