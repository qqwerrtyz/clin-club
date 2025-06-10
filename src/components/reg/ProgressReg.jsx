export default function ProgressReg({offsettStep}) {
    return (
        <div className="regProgressWrapper">
            <div className="regProgress">
                <div className={`regProgressItem ${offsettStep == 0 ? "regProgressItemActive" : ""}`}></div>
                <div className={`regProgressItem ${offsettStep == -100 ? "regProgressItemActive" : ""}`}></div>
                <div className={`regProgressItem ${offsettStep == -200 ? "regProgressItemActive" : ""}`}></div>
                <div className={`regProgressItem ${offsettStep == -300 ? "regProgressItemActive" : ""}`}></div>

            </div>
        </div>
    )
}