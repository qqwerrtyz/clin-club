import Header from "./header"
import "./headerFooterCss/portalHeaderFooter.css"
import "./headerFooterCss/portalHeaderFooter.media.css"
import Footer from "./Footer"

export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            <div className="portalBody">
                <div className="portalContent">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}