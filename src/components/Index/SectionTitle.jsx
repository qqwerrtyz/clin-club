import sectionTitleMainImg from "../../../public/imgs/landing/sectionTitle/sectionTitleMainImg.png"
import forward from "../../../public/imgs/landing/sectionTitle/forward.png"
import Image from "next/image";


export default function SectionTitle() {
    return (
      <div className="sectionTitle">
          <div className="sectionTitleWrapper">

            <div className="mobileVersion tabletsVersionNone sectionTitleHeadlineWrapper">
              <h1 className="sectionTitleHeadline">Учись у лучших!</h1>
              <h1 className="sectionTitleHeadline">Реальные кейсы от практикующих врачей</h1>
            </div>

            <div className="sectionTitleTextContent">
              <div className="desctopVersion tabletsVersionBlock sectionTitleHeadlineWrapper">
                <h1 className="sectionTitleHeadline">Учись у лучших!</h1>
                <h1 className="sectionTitleHeadline">Реальные кейсы от практикующих врачей</h1>
              </div>

              {/* === sectionTitleHeadlineWrapper === */}

              <div className="sectionTitleDescriptionWrapper">
                <span className="sectionTitleDescription">
                  Развивай клиническое мышление с задачами, основанными на реальном опыте специалистов
                </span>
              </div>
              {/* === sectionTitleDescriptionWrapper === */}

              <button className="blueBg textColorWhite sectionTitleGoTraning">
                Начать обучение <Image src={forward} className="sectionTitleForward"/>
              </button>

            </div>
            {/* === sectionTitleTextContent === */}


            <div className=" sectionTitleMainImgWrapper">
              <Image className="sectionTitleMainImg" src={sectionTitleMainImg} priority/>
            </div>
          </div>
      </div>
    )
}