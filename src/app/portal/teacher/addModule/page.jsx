// "use client"
// import "@/app/portal/pageCss/page.css"
// import "@/app/portal/pageCss/page.media.css"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { useEffect } from "react"

// export default function AddModule() {
    
//     const router = useRouter();

//     useEffect(() => {
//         // Проверяем роль пользователя
//         const role = localStorage.getItem("role");
//         if (role !== "teacher") {
//         router.push("/");
//         return;
//         }

//         // Инициализируем nameModule, если ещё нет
//         if (!localStorage.getItem("nameModule")) {
//         localStorage.setItem("nameModule", "");
//         }
//     }, [router]);
//     return (
//         <div className="addModuleWrapper">
//             <div className="addModule">
//                 <div className="addModuleInputWrapper">
//                     <input className="addModuleInput addModuleName" placeholder="Название модуля"/>
//                 </div>

//                 <div className="addModuleInputWrapper">
//                     <input className="addModuleInput addModuleDescription" placeholder="Содержание модуля"/>
//                 </div>
                
//                 <div className="addModuleInputWrapper">
//                     <input className="addModuleInput addModuleTime" placeholder="Среднее время выполнения"/>
//                 </div>


                // <div className="addModuleTasksListWrapper">
                //     <div className="addModuleTasksList">
                //         <div className="addModuleTaskWrapper">
                //             <input className="addModuleTaskInput" placeholder="Заголовок задачи"/>
                //             <div className="addModuleTaskButtons">
                //                 <button className="addModuleTaskEdit">
                //                     <Link style={{color: "#fff"}} href={"/portal/teacher/addTask"}>Редактировать</Link>
                //                 </button>
                //                 <button className="addModuleTaskDelete">Удалить</button>
                //             </div>
                //         </div>

                //         <div className="addModuleTaskWrapper">
                //             <input className="addModuleTaskInput" placeholder="Заголовок задачи"/>
                //             <div className="addModuleTaskButtons">
                //                 <button className="addModuleTaskEdit">
                //                     <Link style={{color: "#fff"}} href={"/portal/teacher/addTask"}>Редактировать</Link>
                //                 </button>
                //                 <button className="addModuleTaskDelete">Удалить</button>
                //             </div>
                //         </div>

                //         <div className="addModuleTaskWrapper">
                //             <input className="addModuleTaskInput" placeholder="Заголовок задачи"/>
                //             <div className="addModuleTaskButtons">
                //                 <button className="addModuleTaskEdit">
                //                     <Link style={{color: "#fff"}} href={"/portal/teacher/addTask"}>Редактировать</Link>
                //                 </button>
                //                 <button className="addModuleTaskDelete">Удалить</button>
                //             </div>
                //         </div>

                //         <div className="addModuleTaskWrapper">
                //             <input className="addModuleTaskInput" placeholder="Заголовок задачи"/>
                //             <div className="addModuleTaskButtons">
                //                 <button className="addModuleTaskEdit">
                //                     <Link style={{color: "#fff"}} href={"/portal/teacher/addTask"}>Редактировать</Link>
                //                 </button>
                //                 <button className="addModuleTaskDelete">Удалить</button>
                //             </div>
                //         </div>


                        
                //     </div>
                // </div>

//                 <div className="addModuleButtons">
//                     <button className="addModuleAddTask">Добавить задачу</button>

//                     <div className="addModulePublishOrNotBublish">
//                         <button className="addModulePublish">Опубликовать</button>
//                         {/* <button className="addModuleNotPublish">Снять с публикации</button> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// "use client"
// import "@/app/portal/pageCss/page.css";
// import "@/app/portal/pageCss/page.media.css";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function AddModule() {
//   const router = useRouter();

//   // State for disciplines dropdown
//   const [disciplines, setDisciplines] = useState(null);
//   const [loadingDisc, setLoadingDisc] = useState(true);
//   const [errorDisc, setErrorDisc] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedDiscipline, setSelectedDiscipline] = useState("");

//   useEffect(() => {
//     // Проверяем роль
//     const role = localStorage.getItem("role");
//     if (role !== "teacher") {
//       router.push("/");
//       return;
//     }
//     // Fetch disciplines
//     const fetchDisciplines = async () => {
//       setLoadingDisc(true);
//       setErrorDisc(null);
//       try {
//         const res = await fetch("https://api.clinclub.ru/v1/disciplines/");
//         if (!res.ok) throw new Error('Ошибка загрузки дисциплин');
//         const data = await res.json();
//         setDisciplines(data);
//       } catch (err) {
//         setErrorDisc(err.message);
//       } finally {
//         setLoadingDisc(false);
//       }
//     };

//     fetchDisciplines();
//   }, [router]);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClick = (e) => {
//       if (!e.target.closest('.disc-dropdown')) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener('click', handleClick);
//     return () => document.removeEventListener('click', handleClick);
//   }, []);

//   return (
//     <div className="addModuleWrapper">
//       <div className="addModule">
//         <div className="addModuleInputWrapper">
//           <input className="addModuleInput addModuleName" placeholder="Название" />
//         </div>
//         <div className="addModuleInputWrapper">
//           <input className="addModuleInput addModuleDescription" placeholder="Описание" />
//         </div>

//         {/* Discipline dropdown instead of time input */}
//         <div className="addModuleInputWrapper disc-dropdown" style={{ position: 'relative' }}>
//           <div
//             className="addModuleInput addModuleTime"
//             onClick={() => setDropdownOpen(prev => !prev)}
//             style={{ cursor: 'pointer' }}
//           >
//             {selectedDiscipline || 'Выберите дисциплину'}
//           </div>
//           {dropdownOpen && (
//             <div
//               className="dropdownMenu"
//               style={{
//                 position: 'absolute',
//                 top: '100%',
//                 left: 0,
//                 right: 0,
//                 background: '#fff',
//                 border: '1px solid #ccc',
//                 maxHeight: '200px',
//                 overflowY: 'auto',
//                 zIndex: 10,
//                 display: 'flex',
//                 flexDirection: 'column'
//               }}
//             >
//               {loadingDisc && <span style={{ padding: '0.5rem', textAlign: 'center' }}>Загрузка...</span>}
//               {errorDisc && <span style={{ padding: '0.5rem', color: 'red' }}>{errorDisc}</span>}
//               {disciplines && Object.entries(disciplines).map(([key, name]) => (
//                 <span
//                   key={key}
//                   onClick={() => {
//                     setSelectedDiscipline(name);
//                     setDropdownOpen(false);
//                   }}
//                   style={{ padding: '0.5rem', cursor: 'pointer', background: selectedDiscipline === name ? '#f0f0f0' : '#fff' }}
//                 >
//                   {name}
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Tasks list... unchanged */}
//         <div className="addModuleTasksListWrapper">
//           <div className="addModuleTasksList">
//              <div className="addModuleTasksListWrapper">
//                     <div className="addModuleTasksList">
//                         <div className="addModuleTaskWrapper">
//                             <input className="addModuleTaskInput" placeholder="Заголовок задачи"/>
//                             <div className="addModuleTaskButtons">
//                                 <button className="addModuleTaskEdit">
//                                     <Link style={{color: "#fff"}} href={"/portal/teacher/addTask"}>Редактировать</Link>
//                                 </button>
//                                 <button className="addModuleTaskDelete">Удалить</button>
//                             </div>
//                         </div>

                        

//                         <div className="addModuleTaskWrapper">
//                             <input className="addModuleTaskInput" placeholder="Заголовок задачи"/>
//                             <div className="addModuleTaskButtons">
//                                 <button className="addModuleTaskEdit">
//                                     <Link style={{color: "#fff"}} href={"/portal/teacher/addTask"}>Редактировать</Link>
//                                 </button>
//                                 <button className="addModuleTaskDelete">Удалить</button>
//                             </div>
//                         </div>

//                         <div className="addModuleTaskWrapper">
//                             <input className="addModuleTaskInput" placeholder="Заголовок задачи"/>
//                             <div className="addModuleTaskButtons">
//                                 <button className="addModuleTaskEdit">
//                                     <Link style={{color: "#fff"}} href={"/portal/teacher/addTask"}>Редактировать</Link>
//                                 </button>
//                                 <button className="addModuleTaskDelete">Удалить</button>
//                             </div>
//                         </div>


                        
//                     </div>
//                 </div>
//           </div>
//         </div>

//         <div className="addModuleButtons">
//           <button className="addModuleAddTask">Добавить задачу</button>
//           <div className="addModulePublishOrNotBublish">
//             <button className="addModulePublish">Опубликовать</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// ==================

// "use client"
// import "@/app/portal/pageCss/page.css";
// import "@/app/portal/pageCss/page.media.css";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function AddModule() {
//   const router = useRouter();

//   // Controlled inputs
//   const [moduleName, setModuleName] = useState("");
//   const [moduleDesc, setModuleDesc] = useState("");

//   // Disciplines dropdown
//   const [disciplines, setDisciplines] = useState(null);
//   const [loadingDisc, setLoadingDisc] = useState(true);
//   const [errorDisc, setErrorDisc] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedDiscipline, setSelectedDiscipline] = useState("");

//   const [publishing, setPublishing] = useState(false);
//   const [publishError, setPublishError] = useState(null);

//   useEffect(() => {
//     // Проверяем роль
//     const role = localStorage.getItem("role");
//     if (role !== "teacher") {
//       router.push("/");
//       return;
//     }
//     // Fetch disciplines
//     (async () => {
//       setLoadingDisc(true);
//       setErrorDisc(null);
//       try {
//         const res = await fetch("https://api.clinclub.ru/v1/disciplines/");
//         if (!res.ok) throw new Error('Ошибка загрузки дисциплин');
//         const data = await res.json();
//         setDisciplines(data);
//       } catch (err) {
//         setErrorDisc(err.message);
//       } finally {
//         setLoadingDisc(false);
//       }
//     })();
//   }, [router]);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClick = (e) => {
//       if (!e.target.closest('.disc-dropdown')) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener('click', handleClick);
//     return () => document.removeEventListener('click', handleClick);
//   }, []);

//   const handlePublish = async () => {
//     setPublishError(null);
//     if (!moduleName.trim() || !selectedDiscipline) {
//       setPublishError('Заполните название и дисциплину');
//       return;
//     }
//     setPublishing(true);
//     try {
//       const access = localStorage.getItem('access');
//       const res = await fetch('https://api.clinclub.ru/v1/teacher/modules/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: access ? `Bearer ${access}` : ''
//         },
//         body: JSON.stringify({
//           discipline: selectedDiscipline,
//           name: moduleName,
//           description: moduleDesc,
//           example_task: {
//             name: moduleName + ' пример',
//             description: moduleDesc,
//             additional_conditions: [],
//             questions: []
//           },
//           is_published: true,
//           tasks: []
//         })
//       });
//       if (!res.ok) {
//         const errData = await res.json();
//         throw new Error(errData.detail || 'Ошибка при создании модуля');
//       }
//       // Успех: можно сбросить или перейти
//       router.push('/portal/teacher/modules');
//     } catch (err) {
//       setPublishError(err.message);
//     } finally {
//       setPublishing(false);
//     }
//   };

//   return (
//     <div className="addModuleWrapper">
//       <div className="addModule">
//         <div className="addModuleInputWrapper">
//           <input
//             className="addModuleInput addModuleName"
//             placeholder="Название модуля"
//             value={moduleName}
//             onChange={e => setModuleName(e.target.value)}
//           />
//         </div>
//         <div className="addModuleInputWrapper">
//           <input
//             className="addModuleInput addModuleDescription"
//             placeholder="Содержание модуля"
//             value={moduleDesc}
//             onChange={e => setModuleDesc(e.target.value)}
//           />
//         </div>

//         {/* Discipline dropdown */}
//         <div className="addModuleInputWrapper disc-dropdown" style={{ position: 'relative' }}>
//           <div
//             className="addModuleInput addModuleTime"
//             onClick={() => setDropdownOpen(prev => !prev)}
//             style={{ cursor: 'pointer' }}
//           >
//             {selectedDiscipline || 'Выберите дисциплину'}
//           </div>
//           {dropdownOpen && (
//             <div
//               className="dropdownMenu"
//               style={{
//                 position: 'absolute', top: '100%', left: 0, right: 0,
//                 background: '#fff', border: '1px solid #ccc', maxHeight: '200px', overflowY: 'auto', zIndex: 10,
//                 display: 'flex', flexDirection: 'column'
//               }}
//             >
//               {loadingDisc && <span style={{ padding: '0.5rem', textAlign: 'center' }}>Загрузка...</span>}
//               {errorDisc && <span style={{ padding: '0.5rem', color: 'red' }}>{errorDisc}</span>}
//               {disciplines && Object.entries(disciplines).map(([key, name]) => (
//                 <span
//                   key={key}
//                   onClick={() => { setSelectedDiscipline(name); setDropdownOpen(false); }}
//                   style={{ padding: '0.5rem', cursor: 'pointer', background: selectedDiscipline === name ? '#f0f0f0' : '#fff' }}
//                 >
//                   {name}
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="addModuleTasksListWrapper">
//           <div className="addModuleTasksList">
            
//             <div className="addModuleTaskWrapper">
//                 <input className="addModuleTaskInput" placeholder="Заголовок задачи"/>
//                 <div className="addModuleTaskButtons">
//                     <button className="addModuleTaskEdit">
//                         <Link style={{color: "#fff"}} href={"/portal/teacher/addTask"}>Редактировать</Link>
//                     </button>
           
//                     <button className="addModuleTaskDelete">Удалить</button>
//                 </div>
                
//             </div>
            


//           </div>
//         </div>

//         <div className="addModuleButtons">
//           <button className="addModuleAddTask">Добавить задачу</button>
//           <div className="addModulePublishOrNotBublish">
//             <button
//               className="addModulePublish"
//               onClick={handlePublish}
//               disabled={publishing}
//             >
//               {publishing ? 'Публикация...' : 'Опубликовать'}
//             </button>
//           </div>
//         </div>

//         {publishError && (
//           <div style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
//             {publishError}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




// =============
"use client"
import "@/app/portal/pageCss/page.css";
import "@/app/portal/pageCss/page.media.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddModule() {
  const router = useRouter();

  // Controlled module fields
  const [moduleName, setModuleName] = useState("");
  const [moduleDesc, setModuleDesc] = useState("");

  // Tasks state
  const [tasks, setTasks] = useState([]);

  // Disciplines dropdown
  const [disciplines, setDisciplines] = useState(null);
  const [loadingDisc, setLoadingDisc] = useState(true);
  const [errorDisc, setErrorDisc] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState("");

  // Publishing state
  const [publishing, setPublishing] = useState(false);
  const [publishError, setPublishError] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "teacher") {
      router.push("/");
      return;
    }
    (async () => {
      setLoadingDisc(true);
      setErrorDisc(null);
      try {
        const res = await fetch("https://api.clinclub.ru/v1/disciplines/");
        if (!res.ok) throw new Error('Ошибка загрузки дисциплин');
        setDisciplines(await res.json());
      } catch (e) {
        setErrorDisc(e.message);
      } finally {
        setLoadingDisc(false);
      }
    })();
  }, [router]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = e => {
      if (!e.target.closest('.disc-dropdown')) setDropdownOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  // Add new empty task
  const addTask = () => {
    setTasks(prev => [...prev, { name: '', description: '' }]);
  };

  // Update task name
  const updateTaskName = (index, value) => {
    setTasks(prev => {
      const copy = [...prev];
      copy[index].name = value;
      return copy;
    });
  };

  // Delete task
  const deleteTask = index => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  const handlePublish = async () => {
    setPublishError(null);
    if (!moduleName.trim() || !selectedDiscipline) {
      setPublishError('Заполните название и дисциплину');
      return;
    }
    // Validate tasks names
    for (let t of tasks) {
      if (!t.name.trim()) {
        setPublishError('У всех задач должно быть название');
        return;
      }
    }
    setPublishing(true);
    try {
      const access = localStorage.getItem('access');
      const res = await fetch('https://api.clinclub.ru/v1/teacher/modules/', {
        method: 'POST', headers: {
          'Content-Type': 'application/json',
          Authorization: access ? `Bearer ${access}` : ''
        },
        body: JSON.stringify({
          discipline: selectedDiscipline,
          name: moduleName,
          description: moduleDesc,
          example_task: {
            name: moduleName + ' пример',
            description: moduleDesc,
            additional_conditions: [],
            questions: []
          },
          is_published: true,
          tasks: tasks.map(t => ({ name: t.name, description: t.description }))
        })
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || 'Ошибка при создании модуля');
      }
      router.push('/portal/teacher/modules');
    } catch (e) {
      setPublishError(e.message);
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div className="addModuleWrapper">
      <div className="addModule">
        {/* Название */}
        <div className="addModuleInputWrapper">
          <input
            className="addModuleInput addModuleName"
            placeholder="Название модуля"
            value={moduleName}
            onChange={e => setModuleName(e.target.value)}
          />
        </div>
        {/* Описание */}
        <div className="addModuleInputWrapper">
          <input
            className="addModuleInput addModuleDescription"
            placeholder="Содержание модуля"
            value={moduleDesc}
            onChange={e => setModuleDesc(e.target.value)}
          />
        </div>
        {/* Дисциплина */}
        <div className="addModuleInputWrapper disc-dropdown" style={{ position: 'relative' }}>
          <div
            className="addModuleInput addModuleTime"
            onClick={() => setDropdownOpen(prev => !prev)}
            style={{ cursor: 'pointer' }}
          >
            {selectedDiscipline || 'Выберите дисциплину'}
          </div>
          {dropdownOpen && (
            <div className="dropdownMenu" style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#fff', border: '1px solid #ccc', maxHeight: '200px', overflowY: 'auto', zIndex: 10, display: 'flex', flexDirection: 'column' }}>
              {loadingDisc && <span style={{ padding: '0.5rem', textAlign: 'center' }}>Загрузка...</span>}
              {errorDisc && <span style={{ padding: '0.5rem', color: 'red' }}>{errorDisc}</span>}
              {disciplines && Object.entries(disciplines).map(([key, name]) => (
                <span
                  key={key}
                  onClick={() => { setSelectedDiscipline(name); setDropdownOpen(false); }}
                  style={{ padding: '0.5rem', cursor: 'pointer', background: selectedDiscipline === name ? '#f0f0f0' : '#fff' }}
                >{name}</span>
              ))}
            </div>
          )}
        </div>
        {/* Tasks list */}
        <div className="addModuleTasksListWrapper">
          <div className="addModuleTasksList">
            {tasks.map((t, idx) => (
              <div className="addModuleTaskWrapper" key={idx}>
                <input
                  className="addModuleTaskInput"
                  placeholder="Заголовок задачи"
                  value={t.name}
                  onChange={e => updateTaskName(idx, e.target.value)}
                />
               
                <div className="addModuleTaskButtons">
                  <button className="addModuleTaskDelete" onClick={() => deleteTask(idx)}>Удалить</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Action buttons */}
        <div className="addModuleButtons">
          <button className="addModuleAddTask" onClick={addTask}>Добавить задачу</button>
          <div className="addModulePublishOrNotBublish">
            <button className="addModulePublish" onClick={handlePublish} disabled={publishing}>
              {publishing ? 'Публикация...' : 'Опубликовать'}
            </button>
          </div>
        </div>
        {publishError && <div style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>{publishError}</div>}
      </div>
    </div>
  );
}
