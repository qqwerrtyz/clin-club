import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"

export default function News() {
    const newsList = [
        "kvnfkbnkfnbkfnb rkn bkrn bekrl bmelk blekbm lkemb l kemblk met b",
        "kvnfkbnkfnbkfnb rkn bkrn bekrl bmelk blekbm lkemb l kemblk met b",
        "kvnfkbnkfnbkfnb rkn bkrn bekrl bmelk blekbm lkemb l kemblk met b",
        "kvnfkbnkfnbkfnb rkn bkrn bekrl bmelk blekbm lkemb l kemblk met b",
        "kvnfkbnkfnbkfnb rkn bkrn bekrl bmelk blekbm lkemb l kemblk met b",
        "kvnfkbnkfnbkfnb rkn bkrn bekrl bmelk blekbm lkemb l kemblk met b",
    ]
    return (
        <div className="newsWrapper">
            {
                newsList.map((item, index) => {
                    return (
                        <div className="newsItem">
                            <span className="newsItemText">{item}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}