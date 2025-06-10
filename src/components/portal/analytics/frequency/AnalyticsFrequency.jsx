import FrequencyDiagram from "./FrequencyDiagram";

export default function AnalyticsFrequency() {
    return (
        <div className="frequencyWrapper">
            <div className="frequency">
                <div className="frequencyHeader">
                    <span className="secondHeadline">Частота решения задач</span>
                </div>

                <FrequencyDiagram />
            </div>
        </div>
    )
}