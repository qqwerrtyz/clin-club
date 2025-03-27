import Image from "next/image"
import leaderAvatar from "../../../../public/imgs/portal/main/leaderAvatar.png"

export default function LeadersBoard() {
    const leaders = [
        {
            avatar: "",
            name: "Петрова А. И.",
            score: 100
        },

        {
            avatar: "",
            name: "Петрова А. И.",
            score: 100
        },

        {
            avatar: "",
            name: "Петрова А. И.",
            score: 100
        },

        {
            avatar: "",
            name: "Петрова А. И.",
            score: 100
        },

        {
            avatar: "",
            name: "Петрова А. И.",
            score: 100
        },
        
    ]
    return(
        <div className="divContainer leadersBoardWrapper">
            <div className="leadersBoard">
                <div className="leadersBoardHeadlineWrapper">
                    <h2 className="leadersBoardHeadline">Таблица лидеров</h2>
                </div>

                <div className="leadersBoardItemWrapper">
                    {
                        leaders.map((item, index) => {
                            return (
                                <div key={`${item}_${index}`} className="leadersBoardItem">
                                    <div className="leadersBoardPlaceAvatarNameWrapper">
                                        <span className="leadersBoardPlace">{index + 1}</span>
                                        <Image className="leadersBoardLeaderAvatar" src={leaderAvatar}/>
                                        <div className="leadersBoardNameWrapper">
                                            <span className="leadersBoardName">{item.name}</span>
                                        </div>
                                    </div>

                                    <div className="leadersBoardScoreWrapper">
                                        <span className="leadersBoardScore">{item.score} ед. опыта</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}