// import { DataRegContext } from "@/app/reg/page";
// import InputReg from "./InputReg";
// import { useContext } from 'react';

// export default function Reg2({nextStep}) {
//     const {formData, setFormData} = useContext(DataRegContext);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };
//     return (
//         <div className="reg2">
//             <InputReg 
//                 name="first_name"
//                 placeholder="Введите ваше имя"
//                 value={formData.first_name}
//                 onChange={handleChange}
//             />
//             <InputReg 
//                 name="last_name"
//                 placeholder="Введите вашу фамилию"
//                 value={formData.last_name}
//                 onChange={handleChange}
//             />
//             <InputReg 
//                 name="patronymic"
//                 placeholder="Введите ваше отчество"
//                 value={formData.patronymic}
//                 onChange={handleChange}
//             />
//             <InputReg 
//                 name="birth_date"
//                 placeholder="Введите дату рождения (ГГГГ-ММ-ДД)"
//                 value={formData.birth_date}
//                 onChange={handleChange}
//             />

//             <button onClick={nextStep} className="regNext" id="next">Далее</button>

//         </div>
//     )
// }
"use client"

import { DataRegContext } from "@/app/reg/page";
import InputReg from "./InputReg";
import { useContext } from "react";

export default function Reg2({ nextStep }) {
  const { formData, setFormData } = useContext(DataRegContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Для радиокнопок берем checked
    const newValue = type === "radio" ? value : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
  };

  return (
    <div className="reg2">
      <InputReg
        name="first_name"
        placeholder="Введите ваше имя"
        value={formData.first_name || ''}
        onChange={handleChange}
      />
      <InputReg
        name="last_name"
        placeholder="Введите вашу фамилию"
        value={formData.last_name || ''}
        onChange={handleChange}
      />
      <InputReg
        name="patronymic"
        placeholder="Введите ваше отчество"
        value={formData.patronymic || ''}
        onChange={handleChange}
      />
      <InputReg
        name="birth_date"
        placeholder="Введите дату рождения (ГГГГ-ММ-ДД)"
        value={formData.birth_date || ''}
        onChange={handleChange}
      />

      {/* Gender selection */}
      <div className="regGenderWrapper" style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <input
            type="radio"
            name="gender"
            value="M"
            checked={formData.gender === 'M'}
            onChange={handleChange}
            style={{ marginRight: '0.5rem' }}
          />
          Мужской
        </label>
        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <input
            type="radio"
            name="gender"
            value="F"
            checked={formData.gender === 'F'}
            onChange={handleChange}
            style={{ marginRight: '0.5rem' }}
          />
          Женский
        </label>
      </div>

      <button onClick={nextStep} className="regNext" id="next" style={{ marginTop: '1.5rem' }}>
        Далее
      </button>
    </div>
  );
}