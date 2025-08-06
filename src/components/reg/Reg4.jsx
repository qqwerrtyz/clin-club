
// "use client"
// import { useContext, useEffect, useState } from "react";
// import InputReg from "./InputReg";
// import { DataRegContext } from "@/app/reg/page";

// export default function Reg4() {
//   const { formData, setFormData } = useContext(DataRegContext);
//   const [dataSpecializations, setDataSpecializations] = useState(null);
//   const [errSpecializations, setErrSpecializations] = useState(null);

//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   // Dropdown states
//   const [specHidden, setSpecHidden] = useState(false);
//   const [selectSpec, setSelectSpec] = useState(formData.specialization || null);

//   useEffect(() => {
//     const fetchSpecializations = async () => {
//       try {
//         const response = await fetch('https://api.clinclub.ru/v1/specializations/');
//         if (!response.ok) throw new Error('Ошибка загрузки специализаций');
//         const data = await response.json();
//         setDataSpecializations(data);
//       } catch (err) {
//         setErrSpecializations(err.message);
//       }
//     };
//     fetchSpecializations();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       // validate required fields
//       const {
//         role,
//         last_name,
//         first_name,
//         patronymic,
//         gender,
//         city,
//         email,
//         birth_date,
//         phone,
//         password,
//         work_place,
//         specialization
//       } = formData;
//       if (!role || !last_name || !first_name || !gender || !city || !email || !birth_date || !phone || !password) {
//         throw new Error('Заполните все обязательные поля');
//       }
//       let endpoint, body;
//       if (role === 'student') {
//         endpoint = 'https://api.clinclub.ru/v1/auth/students/';
//         body = {
//           last_name,
//           first_name,
//           patronymic,
//           gender,
//           city,
//           email,
//           birthdate: birth_date,
//           phone_number: phone,
//           password,
//           student_profile: {
//             university: work_place || '',
//             specialization: specialization || 'null'
//           }
//         };
//       } else {
//         endpoint = 'https://api.clinclub.ru/v1/auth/teachers/';
//         body = {
//           last_name,
//           first_name,
//           patronymic,
//           gender,
//           city,
//           email,
//           birthdate: birth_date,
//           phone_number: phone,
//           password,
//           teacher_profile: {
//             specializations: specialization || '',
//             residency: '',
//             workplace: work_place || '',
//             position: ''
//           }
//         };
//       }

//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(body)
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(Object.values(errorData).flat().join('; ') || 'Ошибка регистрации');
//       }
//       setSuccess(true);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="reg4">
//       {/* Поле "Место работы" */}
//       <InputReg
//         name="work_place"
//         placeholder="Введите место работы/университет"
//         value={formData.work_place || ''}
//         onChange={handleChange}
//       />

//       {/* Поле "Специализация" как выпадающий список */}
//       <div
//         className="regInputWrapper inputSpecializations"
//         onClick={() => setSpecHidden(!specHidden)}
//       >
//         <span className="regInput">
//           {selectSpec != null ? selectSpec : 'Выберите специализацию'}
//         </span>
//       </div>

//       {specHidden && (
//         <div className="ourSpecializationsWrapper" style={{ display: 'flex', flexDirection: 'column' }}>
//           <div className="ourSpecializations" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//             {dataSpecializations &&
//               Object.entries(dataSpecializations).map(([group, specs]) => {
//                 if (group === 'null' && typeof specs === 'string') {
//                   return (
//                     <span
//                       key="null"
//                       className="ourCity"
//                       style={{ cursor: 'pointer', paddingLeft: '1rem' }}
//                       onClick={() => {
//                         setSelectSpec(specs);
//                         setFormData(prev => ({ ...prev, specialization: specs }));
//                         setSpecHidden(false);
//                       }}
//                     >
//                       {specs}
//                     </span>
//                   );
//                 }
//                 return (
//                   <div key={group} className="specGroup" style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
//                     <div className="specGroupTitle" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{group}</div>
//                     {Object.entries(specs).map(([code, name]) => (
//                       <span
//                         key={code}
//                         className="ourCity"
//                         style={{ paddingLeft: '1rem', cursor: 'pointer' }}
//                         onClick={() => {
//                           setSelectSpec(name);
//                           setFormData(prev => ({ ...prev, specialization: name }));
//                           setSpecHidden(false);
//                         }}
//                       >{name}</span>
//                     ))}
//                   </div>
//                 );
//               })}
//           </div>
//         </div>
//       )}

//       {/* Кнопка отправки */}
//       <button
//         onClick={handleSubmit}
//         className="regEndSend"
//         id="send"
//         disabled={isLoading}
//       >
//         {isLoading ? 'Отправка...' : 'Отправить'}
//       </button>

//       {/* Отображение сообщений об ошибке/успехе */}
//       {error && <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
//       {success && <div className="success-message" style={{ color: 'green', marginTop: '10px' }}>Регистрация прошла успешно!</div>}
//     </div>
//   );
// }




"use client"
import { useContext, useEffect, useState } from "react";
import InputReg from "./InputReg";
import { DataRegContext } from "@/app/reg/page";

export default function Reg4() {
  const { formData, setFormData } = useContext(DataRegContext);
  const [dataSpecializations, setDataSpecializations] = useState(null);
  const [errSpecializations, setErrSpecializations] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Dropdown states
  const [specHidden, setSpecHidden] = useState(false);
  // selectSpec stores {code, name}
  const [selectSpec, setSelectSpec] = useState({ code: formData.specialization || '', name: '' });

  useEffect(() => {
    const fetchSpecializations = async () => {
      try {
        const response = await fetch('https://api.clinclub.ru/v1/specializations/');
        if (!response.ok) throw new Error('Ошибка загрузки специализаций');
        const data = await response.json();
        setDataSpecializations(data);
        // If formData.specialization exists, find its name
        if (formData.specialization && data) {
          for (const specs of Object.values(data)) {
            if (typeof specs === 'object' && specs[formData.specialization]) {
              setSelectSpec({ code: formData.specialization, name: specs[formData.specialization] });
              break;
            }
          }
        }
      } catch (err) {
        setErrSpecializations(err.message);
      }
    };
    fetchSpecializations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const {
        role, last_name, first_name, patronymic,
        gender, city, email, birth_date,
        phone, password, work_place
      } = formData;
      const specialization = selectSpec.code;
      if (!role || !last_name || !first_name || !gender || !city || !email || !birth_date || !phone || !password) {
        throw new Error('Заполните все обязательные поля');
      }
      let endpoint, body;
      if (role === 'student') {
        endpoint = 'https://api.clinclub.ru/v1/auth/students/';
        body = {
          last_name, first_name, patronymic,
          gender, city, email,
          birthdate: birth_date,
          phone_number: phone,
          password,
          student_profile: {
            university: work_place || '',
            specialization: specialization || 'null'
          }
        };
      } else {
        endpoint = 'https://api.clinclub.ru/v1/auth/teachers/';
        body = {
          last_name, first_name, patronymic,
          gender, city, email,
          birthdate: birth_date,
          phone_number: phone,
          password,
          teacher_profile: {
            specializations: specialization || '',
            residency: '',
            workplace: work_place || '',
            position: ''
          }
        };
      }
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(Object.values(errorData).flat().join('; ') || 'Ошибка регистрации');
      }
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reg4">
      <InputReg
        name="work_place"
        placeholder="Введите место работы/университет"
        value={formData.work_place || ''}
        onChange={handleChange}
      />
      <div
        className="regInputWrapper inputSpecializations"
        onClick={() => setSpecHidden(!specHidden)}
      >
        <span className="regInput">
          {selectSpec.name || 'Выберите специализацию'}
        </span>
      </div>
      {specHidden && (
        <div className="ourSpecializationsWrapper" style={{ display: 'flex', flexDirection: 'column' }}>
          {errSpecializations && <div style={{ color: 'red' }}>{errSpecializations}</div>}
          <div className="ourSpecializations" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {dataSpecializations && Object.entries(dataSpecializations).map(([group, specs]) => (
              group === 'null' && typeof specs === 'string' ? (
                <span
                  key="null"
                  className="ourCity"
                  style={{ cursor: 'pointer', paddingLeft: '1rem' }}
                  onClick={() => {
                    setSelectSpec({ code: '', name: specs });
                    setFormData(prev => ({ ...prev, specialization: '' }));
                    setSpecHidden(false);
                  }}
                >{specs}</span>
              ) : (
                <div key={group} className="specGroup" style={{ marginBottom: '1rem' }}>
                  <div className="specGroupTitle" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{group}</div>
                  {Object.entries(specs).map(([code, name]) => (
                    <span
                      key={code}
                      className="ourCity"
                      style={{ paddingLeft: '1rem', cursor: 'pointer' }}
                      onClick={() => {
                        setSelectSpec({ code, name });
                        setFormData(prev => ({ ...prev, specialization: code }));
                        setSpecHidden(false);
                      }}
                    >{name}</span>
                  ))}
                </div>
              )
            ))}
          </div>
        </div>
      )}
      <button
        onClick={handleSubmit}
        className="regEndSend"
        id="send"
        disabled={isLoading}
      >
        {isLoading ? 'Отправка...' : 'Отправить'}
      </button>
      {error && <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      {success && <div className="success-message" style={{ color: 'green', marginTop: '10px' }}>Регистрация прошла успешно!</div>}
    </div>
  );
}
