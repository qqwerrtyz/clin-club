import Image from "next/image";
import images_ from "../../imgs";
import Link from "next/link";

export default function BuyProVersion() {
    return (
        <div className="myProfileCol buyProVersionWrapper">
            <div className="buyProVersion">
                <p className="buyProVersionTextP">Улучшить до  
                    <span className="buyProVersionTextSpan"> PROF-врач</span>
                </p>

                <Image className="upgradeStars" src={images_.upgradeStars}/>
            </div>

            <div className="buyProVersionPoliticsOfertaWrapper">
                <Link className="buyProVersionPoliticsOferta" href={"#"}>Договор офферты</Link>
                <Link className="buyProVersionPoliticsOferta" href={"#"}>Политика конфиденциальности</Link>

            </div>

        </div>
    )
}