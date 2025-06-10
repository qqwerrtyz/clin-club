

import MyModulesCarousel from "./MyModules/MyModulesCarousel";
import SortAndDropDown from "./MyModules/SortAndDropDown";

export default function MyModules() {
    
    return (
        <div className="divContainer myModules">

            <div className="myModulesHeadlineAndSort">
                <div className="myModulesHeadlineWrapper">
                    <span className="textColorBlack myModulesHeadline">Мои модули</span>
                </div>
                
                <SortAndDropDown />
                

                
            </div>

            <div className="myModulesCarouselAndGoLeft">
                <MyModulesCarousel />
            </div>

            
            
        </div>
    )
}