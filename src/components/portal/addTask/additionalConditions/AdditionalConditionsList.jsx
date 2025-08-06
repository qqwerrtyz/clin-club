// import { useContext } from "react"
// import { AdditionalConditionsContext } from "./AdditionalConditions"

// export default function AdditionalConditionsList({}) {

//     const {
//         isOpenList,
//         conditionsData,
//         addCondition,
//         loading,
//         error
//     } = useContext(AdditionalConditionsContext);
    

//     if (!isOpenList) return null;
    
//     if (loading) {
//         return (
//             <div className="additionalConditionsList">
//                 <div className="loading-message">Загрузка условий...</div>
//             </div>
//         );
//     }
    
//     if (error) {
//         return (
//             <div className="additionalConditionsList">
//                 <div className="error-message">Ошибка: {error}</div>
//             </div>
//         );
//     }
    
//     if (!conditionsData) {
//         return (
//             <div className="additionalConditionsList">
//                 <div className="error-message">Данные условий недоступны</div>
//             </div>
//         );
//     }


//     return (
//         <div className="additionalConditionsList">
//             {Object.entries(conditionsData).map(([category, items]) => (
//                 <div key={category} className="conditions-category">
//                     {/* Не кликабельный заголовок категории */}
//                     <div className="conditions-category-header">
//                         {category}
//                     </div>
                    
//                     {/* Кликабельные элементы категории */}
//                     <div className="conditions-items">
//                         {items.map((item) => {
//                             // item - это массив [id, name]
//                             const [id, name] = item;
//                             return (
//                                 <span
//                                     key={id}
//                                     onClick={() => addCondition(name)}
//                                     className="additionalConditionsListItem"
//                                 >
//                                     {name}
//                                 </span>
//                             );
//                         })}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }

import { useContext } from "react"
import { AdditionalConditionsContext } from "./AdditionalConditions"

export default function AdditionalConditionsList() {
  const {
    isOpenList,
    conditionsData,
    addCondition,
    selectConditions, // получаем выбранные условия
    loading,
    error
  } = useContext(AdditionalConditionsContext);

  if (!isOpenList) return null;
  if (loading) {
    return (
      <div className="additionalConditionsList" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div className="loading-message">Загрузка условий...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="additionalConditionsList" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div className="error-message">Ошибка: {error}</div>
      </div>
    );
  }
  if (!conditionsData) {
    return (
      <div className="additionalConditionsList" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div className="error-message">Данные условий недоступны</div>
      </div>
    );
  }

  return (
    <div className="additionalConditionsList" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      {Object.entries(conditionsData).map(([category, items]) => (
        <div key={category} className="conditions-category" style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Заголовок категории */}
          <div className="conditions-category-header" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            {category}
          </div>
          {/* Элементы категории */}
          <div className="conditions-items" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingLeft: '1rem' }}>
            {items.map(([id, name]) => {
              const isSelected = selectConditions.includes(name);
              return (
                <span
                  key={id}
                  onClick={() => {
                    if (!isSelected) addCondition(name);
                  }}
                  className="additionalConditionsListItem"
                  style={{
                    cursor: isSelected ? 'not-allowed' : 'pointer',
                    opacity: isSelected ? 0.5 : 1
                  }}
                >
                  {name}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  )
}