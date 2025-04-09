import BuyProVersion from "./footerComponent/BuyProVersion"
import Tarif from "./footerComponent/Tarif"

export default function FooterProfile() {
    return (

        <div className="myProfileFooter">

            <Tarif />

            <BuyProVersion />
        </div>
    )
}