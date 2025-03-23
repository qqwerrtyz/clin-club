import Header from "./header"
import "./portal.css"
export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <Header />
            <body>
                {children}
            </body>

        </html>
    )
}