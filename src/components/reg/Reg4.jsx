// "use client"
// import { useContext, useEffect, useState } from "react";
// import InputReg from "./InputReg";
// import { DataRegContext } from "@/app/reg/page";

// export default function Reg4() {
//     const [dataSpecializations, setDataSpecializations] = useState(null);
//     const [errSpecializations, setErrSpecializations] = useState(null)

//     useEffect(() => {
//         const fetchSpecializations = async () => {
//             try {
//                 const response = await fetch('https://api.clinclub.ru/v1/specializations/');
//                 if (!response.ok) {
//                     throw new Error('Ошибка загрузки условий');
//                 }
//                 const data = await response.json();
//                 setDataSpecializations(data);
//             } catch (err) {
//                 setErrSpecializations(err.message);
//             } 
//         };

//         fetchSpecializations();
//     }, [])

//   // Получаем доступ к данным формы и функции обновления из контекста
//   const { formData, setFormData } = useContext(DataRegContext);
  
//   // Состояния для отслеживания загрузки и ошибок
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   // Обработчик изменений для полей ввода
//   const handleChange = (e) => {
//     const { name, value } = e.target;
    
//     // Обновляем данные в контексте
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Функция отправки данных на сервер
//   const handleSubmit = async () => {
//     setIsLoading(true);
//     setError(null);
    
//     try {
//       // Проверка заполненности обязательных полей
//       if (!formData.work_place || !formData.specialization) {
//         throw new Error("Заполните все обязательные поля");
//       }

//       // Определяем endpoint в зависимости от роли
//       const endpoint = formData.role === 'student'
//         ? 'https://api.clinclub.ru/v1/auth/students/'
//         : 'https://api.clinclub.ru/v1/auth/teachers/';

//       // Отправляем POST-запрос
//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...formData,
//           // Если нужно преобразовать какие-то данные перед отправкой
//           birth_date: formatDate(formData.birth_date),
//           phone: formatPhone(formData.phone)
//         })
//       });

//       // Обрабатываем ответ сервера
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Ошибка регистрации');
//       }

//       // Успешная регистрация
//       setSuccess(true);
//       console.log('Регистрация успешна!');
      
//       // Здесь можно добавить редирект или другие действия
//       // router.push('/profile');

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Вспомогательные функции для форматирования данных
//   const formatDate = (dateString) => {
//     // Преобразование даты в формат YYYY-MM-DD
//     if (!dateString) return '';
//     return new Date(dateString).toISOString().split('T')[0];
//   };

//   const formatPhone = (phone) => {
//     // Очистка номера телефона от лишних символов
//     if (!phone) return '';
//     return phone.replace(/\D/g, '');
//   };


//     return (
//     <div className="reg4">
//         <button onClick={() => console.log(dataSpecializations)}>Привет</button>
//       {/* Поле "Место работы" */}
//       <InputReg 
//         name="work_place"
//         placeholder="Введите место работы"
//         value={formData.work_place || ''}
//         onChange={handleChange}
//       />
      
//       {/* Поле "Специализация" */}
//       {/* <InputReg 
//         name="specialization"
//         placeholder="Введите вашу специализацию"
//         value={formData.specialization || ''}
//         onChange={handleChange}
//       /> */}

//       <div className="regInputWrapper">
//         <span className="regInput">Моя специализацию</span>
//       </div>

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
//       {error && (
//         <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>
//           {error}
//         </div>
//       )}
      
//       {success && (
//         <div className="success-message" style={{ color: 'green', marginTop: '10px' }}>
//           Регистрация прошла успешно!
//         </div>
//       )}
//     </div>
//   )
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
  const [selectSpec, setSelectSpec] = useState(formData.specialization || null);

  useEffect(() => {
    const fetchSpecializations = async () => {
      try {
        const response = await fetch('https://api.clinclub.ru/v1/specializations/');
        if (!response.ok) throw new Error('Ошибка загрузки специализаций');
        const data = await response.json();
        setDataSpecializations(data);
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
      if (!formData.work_place || !formData.specialization) {
        throw new Error("Заполните все обязательные поля");
      }
      const endpoint = formData.role === 'student'
        ? 'https://api.clinclub.ru/v1/auth/students/'
        : 'https://api.clinclub.ru/v1/auth/teachers/';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          birth_date: formatDate(formData.birth_date),
          phone: formatPhone(formData.phone)
        })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка регистрации');
      }
      setSuccess(true);
      console.log('Регистрация успешна!');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toISOString().split('T')[0];
  };

  const formatPhone = (phone) => {
    if (!phone) return '';
    return phone.replace(/\D/g, '');
  };

  return (
    <div className="reg4">
      {/* Поле "Место работы" */}
      <InputReg
        name="work_place"
        placeholder="Введите место работы"
        value={formData.work_place || ''}
        onChange={handleChange}
      />

      {/* Поле "Специализация" как выпадающий список */}
      <div
        className="regInputWrapper inputSpecializations"
        onClick={() => setSpecHidden(!specHidden)}
      >
        <span className="regInput">
          {selectSpec != null ? selectSpec : "Выберите специализацию"}
        </span>
      </div>

      {specHidden && (
        <div
          className="ourSpecializationsWrapper"
          style={{ display: 'flex', flexDirection: 'column',  }}
        >
          <div
            className="ourSpecializations"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            {dataSpecializations &&
              Object.entries(dataSpecializations).map(([group, specs]) => {
                // Обработка значения "null" как единственного пункта
                if (group === 'null' && typeof specs === 'string') {
                  return (
                    <span
                      key="null"
                      className="ourCity"
                      style={{ cursor: 'pointer', paddingLeft: '1rem' }}
                      onClick={() => {
                        setSelectSpec(specs);
                        setFormData(prev => ({ ...prev, specialization: specs }));
                        setSpecHidden(false);
                      }}
                    >
                      {specs}
                    </span>
                  );
                }
                // Группировка по категориям
                return (
                  <div
                    key={group}
                    className="specGroup"
                    style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}
                  >
                    <div
                      className="specGroupTitle"
                      style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}
                    >
                      {group}
                    </div>
                    {Object.entries(specs).map(([code, name]) => (
                      <span
                        key={code}
                        className="ourCity"
                        style={{ paddingLeft: '1rem', cursor: 'pointer' }}
                        onClick={() => {
                          setSelectSpec(name);
                          setFormData(prev => ({ ...prev, specialization: name }));
                          setSpecHidden(false);
                        }}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* Кнопка отправки */}
      <button
        onClick={handleSubmit}
        className="regEndSend"
        id="send"
        disabled={isLoading}
      >
        {isLoading ? 'Отправка...' : 'Отправить'}
      </button>

      {/* Отображение сообщений об ошибке/успехе */}
      {error && (
        <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>
          {error}
        </div>
      )}

      {success && (
        <div className="success-message" style={{ color: 'green', marginTop: '10px' }}>
          Регистрация прошла успешно!
        </div>
      )}
    </div>
  );
}