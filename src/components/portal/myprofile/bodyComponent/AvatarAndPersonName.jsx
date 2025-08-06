import Image from "next/image"
import images_ from "@/components/portal/imgs"
import { useContext } from "react"
import { StatsContext } from "@/app/portal/myprofile/page"

export default function AvatarAndPersonName () {
    const { userData, loading, error } = useContext(StatsContext)
    if (loading || error || !userData || !userData.user) {
        return null;
    }
    return (
        <div className="myProfileCol ">
            <div className="myProfileInfoWrapper">
                <div className="myProfileInfoAvatarWrapper">
                    <Image className="myProfileInfoAvatar" src={images_.avatar_test}/>
                </div>
                <div className="myProfileInfo">
                    <div className="myProfileInfoNameBirthdateWrapper">
                        <span className="myProfileInfoName" >{userData.full_name}</span>
                        <span className="myProfileInfoBirthdate">30.11.2000</span>
                    </div>

                    <div className="myProfileInfoTelGmailWrapper myProfileInfoTelGmailWrapperDesctopV">
                        <div className="myProfileInfoTelWrapper">
                            <Image className="myProfileInfoTelGmailIcon" src={images_.phoneIcon}/>
                            <span className="myProfileInfoTelGmail">{!userData.phone_number ? "Не указано" : userData.phone_number}</span>
                        </div>

                        <div className="myProfileInfoGmailWrapper">
                            <Image className="myProfileInfoTelGmailIcon" src={images_.mailIcon}/>
                            <span className="myProfileInfoTelGmail">{!userData.user.email ? "Не указано" : userData.user.email}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="myProfileInfoTelGmailWrapper myProfileInfoTelGmailWrapperMobileV">
                <div className="myProfileInfoTelWrapper">
                    <Image className="myProfileInfoTelGmailIcon" src={images_.phoneIcon}/>
                    <span className="myProfileInfoTelGmail">{userData.user.phone_number}</span>
                </div>

                <div className="myProfileInfoGmailWrapper">
                    <Image className="myProfileInfoTelGmailIcon" src={images_.mailIcon}/>
                    <span className="myProfileInfoTelGmail">{userData.user.email}</span>
                </div>
            </div>
        </div>
    )
}