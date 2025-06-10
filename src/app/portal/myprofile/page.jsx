import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"
import HeaderProfile from "@/components/portal/myprofile/HeaderProfile"

import BodyProfile from "@/components/portal/myprofile/BodyProfile"
import FooterProfile from "@/components/portal/myprofile/FooterProfile"

export default function MyProfile() {
    return (
        <div className="myProfileWrapper">
            <div className="myProfile">
                
                <HeaderProfile />

                <BodyProfile />
                
                <FooterProfile />
            </div>
        </div>
    )
}