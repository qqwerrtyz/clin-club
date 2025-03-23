import Image from "next/image";
import fond from "../../../public/imgs/landing/footerIndex/fond.png"

export default function FooterIndex() {
    return (
        <footer className="footerIndex">
            <div className="desctopVersionFlex tabletsVersionFlex  footerIndexWrapper">
                <div className="footerIndexColumn1">
                    <div className="footerIndexLogoWrapper">
                        <span className="footerIndexLogo" style={{color: "#5edcc3"}}>Clin.<span style={{color: "#878ed2"}}>Club</span></span>
                    </div>

                    <div className="footerIndexFondInovaciy">
                        <Image className="footerIndexFondImg" src={fond}/>
                        <p className="footerIndexFondText">Проект выполнен при поддержке Фонда 
                            содействия инновациям в рамках программы "Студенческий стартап" 
                            федерального проекта "Платформа университетского технологического предпринимательства"
                        </p>
                    </div>

                    <div className="footerIndexDocsWrapper">
                        <a className="footerIndexDoc" href="#">Политика конфиденциальности</a>
                        <a className="footerIndexDoc" href="#">Пользовательское соглашение</a>
                    </div>

                </div>
                {/* footerIndexColumn1 */}

                <div className="footerIndexColumn2">
                    <h6 className="footerIndexHeadline">Разделы</h6>
                    <div className="footerIndexLists">
                        <a className="footerIndexListItem" href="#">Главная</a>
                        <a className="footerIndexListItem" href="#">Преимущества</a>
                        <a className="footerIndexListItem" href="#">Специальности</a>
                        <a className="footerIndexListItem" href="#">Тарифы</a>
                        <a className="footerIndexListItem" href="#">Отзывы</a>
                    </div>
                </div>
                {/* footerIndexColumn2 */}


                <div className="footerIndexColumn3">
                    <h6 className="footerIndexHeadline">Контакты</h6>
                    <div className="footerIndexListsAndButton">
                        <div className="footerIndexLists">
                            <a className="footerIndexListItem" href="#">Телефон: +7(960)-078-00-10</a>
                            <a className="footerIndexListItem" href="#">Почта: i.perevertov.m@yandex.ru</a>
                            <button className="blueBg textColorWhite footerIndexButton">Поддержка</button>
                        </div>

                    </div>
                </div>

                {/* footerIndexColumn3 */}

            </div>
            {/* desctopVersion footerIndexWrapper */}
            <div className="mobileVersion tabletsVersionNone">
                <div className=" footerIndexWrapper">
                    <div className="footerIndexColumn1">
                        <div className="footerIndexLogoWrapper">
                            <span className="footerIndexLogo" style={{color: "#5edcc3"}}>Clin.<span style={{color: "#878ed2"}}>Club</span></span>
                        </div>

                        <div className="footerIndexFondInovaciy">
                            <Image className="footerIndexFondImg" src={fond}/>
                            <p className="footerIndexFondText">Проект выполнен при поддержке Фонда 
                                содействия инновациям в рамках программы "Студенческий стартап" 
                                федерального проекта "Платформа университетского технологического предпринимательства"
                            </p>
                        </div>

                        

                    </div>
                    {/* footerIndexColumn1 */}
                    <div className="footerIndexColumn2Mobile">
                        <div className="footerIndexColumn2">
                            <h6 className="footerIndexHeadline">Разделы</h6>
                            <div className="footerIndexLists">
                                <a className="footerIndexListItem" href="#">Главная</a>
                                <a className="footerIndexListItem" href="#">Преимущества</a>
                                <a className="footerIndexListItem" href="#">Специальности</a>
                                <a className="footerIndexListItem" href="#">Тарифы</a>
                                <a className="footerIndexListItem" href="#">Отзывы</a>
                            </div>
                        </div>
                        {/* footerIndexColumn2 */}


                        <div className="footerIndexColumn3">
                            <h6 className="footerIndexHeadline">Контакты</h6>
                            <div className="footerIndexListsAndButton">
                                <div className="footerIndexLists">
                                    <a className="footerIndexListItem" href="#">Телефон: +7(960)-078-00-10</a>
                                    <a className="footerIndexListItem" href="#">Почта: i.perevertov.m@yandex.ru</a>
                                    <button className="blueBg textColorWhite footerIndexButton">Поддержка</button>
                                </div>

                            </div>
                        </div>
                    {/* footerIndexColumn3 */}

                    </div>
                    


                    <div className="footerIndexDocsWrapper">
                        <a className="footerIndexDoc" href="#">Политика конфиденциальности</a>
                        <a className="footerIndexDoc" href="#">Пользовательское соглашение</a>
                    </div>

                </div>
                {/* mobileVersion footerIndexWrapper */}
            </div>
            

       

            
        </footer>
    )
}