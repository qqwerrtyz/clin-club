import { StatsContext } from "@/app/portal/myprofile/page";
import { useContext } from "react";

export default function InfoCityUniverSpecial() {
    
    const { userData, loading, error } = useContext(StatsContext)
    if (loading || error || !userData || !userData.user) {
        return null;
    }
    return (
        <div className="myProfileCol myProfileInfoWrapper">
            <div className="myProfileInfo myProfileInfoCityUnivercity">
                <div className="myProfileInfoPropWrapper">
                    <span className="myProfileInfoProp">Город: {!userData.user.city ? "Не указано" : userData.user.city}</span>
                </div>

                <div className="myProfileInfoPropWrapper">
                    <span className="myProfileInfoProp">Место обучения (ВУЗ): {!userData.university ? "Не указано" : userData.university}</span>
                </div>

                <div className="myProfileInfoPropWrapper">
                    <span className="myProfileInfoProp">Специализация: {userData.specialization}</span>
                </div>
            </div>
        </div>
    )
}