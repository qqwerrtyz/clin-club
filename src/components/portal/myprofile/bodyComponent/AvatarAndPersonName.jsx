import Image from "next/image"
import images_ from "@/components/portal/imgs"

export default function AvatarAndPersonName () {
    return (
        <div className="myProfileCol ">
            <div className="myProfileInfoWrapper">
                <div className="myProfileInfoAvatarWrapper">
                    <Image className="myProfileInfoAvatar" src={images_.avatar_test}/>
                </div>

                <div className="myProfileInfo">
                    <div className="myProfileInfoNameBirthdateWrapper">
                        <span className="myProfileInfoName" >Лиза Михайлова</span>
                        <span className="myProfileInfoBirthdate">30.11.2000</span>
                    </div>

                    <div className="myProfileInfoTelGmailWrapper myProfileInfoTelGmailWrapperDesctopV">
                        <div className="myProfileInfoTelWrapper">
                            <Image className="myProfileInfoTelGmailIcon" src={images_.phoneIcon}/>
                            <span className="myProfileInfoTelGmail">+79595437484</span>
                        </div>

                        <div className="myProfileInfoGmailWrapper">
                            <Image className="myProfileInfoTelGmailIcon" src={images_.mailIcon}/>
                            <span className="myProfileInfoTelGmail">example@mail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="myProfileInfoTelGmailWrapper myProfileInfoTelGmailWrapperMobileV">
                <div className="myProfileInfoTelWrapper">
                    <Image className="myProfileInfoTelGmailIcon" src={images_.phoneIcon}/>
                    <span className="myProfileInfoTelGmail">+79595437484</span>
                </div>

                <div className="myProfileInfoGmailWrapper">
                    <Image className="myProfileInfoTelGmailIcon" src={images_.mailIcon}/>
                    <span className="myProfileInfoTelGmail">example@mail.com</span>
                </div>
            </div>
        </div>
    )
}