import Header from "./header"

import "./headerFooterCss/portalHeaderFooter.css"
import "./headerFooterCss/portalHeaderFooter.media.css"
import Footer from "./Footer"
import Back from "./back/page"


export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            <div className="portalBody">
                
                <div className="portalContent">
                    <Back />
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}