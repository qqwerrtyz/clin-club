
import AvatarAndPersonName from "./bodyComponent/AvatarAndPersonName"
import InfoCityUniverSpecial from "./bodyComponent/InfoCityUniverSpecial"

export default function BodyProfile() {
    return (
        <div className="myProfileBody">
            <AvatarAndPersonName />

            <InfoCityUniverSpecial />
        </div>
    )
}