

"use client"

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@/app/portal/pageCss/page.css";
import "@/app/portal/pageCss/page.media.css";
import Link from "next/link";

export default function ModuleChange() {
  const { module_pk } = useParams();
  const router = useRouter();

  // Primary data state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Save state
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  useEffect(() => {
    if (!module_pk) {
      setError("ID модуля не указан");
      setLoading(false);
      return;
    }
    const role = localStorage.getItem("role");
    if (role !== "teacher") {
      router.push("/");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("access");
        const [modRes, discRes] = await Promise.all([
          fetch(`https://api.clinclub.ru/v1/teacher/modules/${module_pk}/`, { headers: { Authorization: `Bearer ${token}` } }),
          fetch("https://api.clinclub.ru/v1/disciplines/")
        ]);
        if (!modRes.ok) throw new Error(`Ошибка загрузки модуля: ${modRes.status}`);
        if (!discRes.ok) throw new Error(`Ошибка загрузки дисциплин: ${discRes.status}`);
        const modJson = await modRes.json();
        const discJson = await discRes.json();

        setData(modJson);
        setModuleName(modJson.name || "");
        setModuleDesc(modJson.description || "");
        setSelectedDiscipline(modJson.discipline || "");
        setTasks(modJson.tasks || []);
        setDisciplines(discJson);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
        setLoadingDisc(false);
      }
    };

    fetchData();
  }, [module_pk, router]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = e => {
      if (!e.target.closest('.disc-dropdown')) setDropdownOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  // Task handlers
  const addTask = () => setTasks(prev => [...prev, { name: '', description: '' }]);
  const updateTask = (idx, field, value) => {
    setTasks(prev => prev.map((t, i) => i === idx ? { ...t, [field]: value } : t));
  };
  const deleteTask = idx => setTasks(prev => prev.filter((_, i) => i !== idx));

  const handleSave = async () => {
    setSaveError(null);
    if (!moduleName.trim() || !selectedDiscipline) {
      setSaveError('Заполните название и дисциплину');
      return;
    }
    setSaving(true);
    try {
      const token = localStorage.getItem('access');
      const res = await fetch(`https://api.clinclub.ru/v1/teacher/modules/${module_pk}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : ''
        },
        body: JSON.stringify({
          discipline: selectedDiscipline,
          name: moduleName,
          description: moduleDesc,
          example_task: data.example_task || null,
          is_published: data.is_published,
          tasks: tasks.map(t => ({ name: t.name, description: t.description }))
        })
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || `Ошибка ${res.status}`);
      }
      // on success, optionally redirect or show message
      router.refresh();
    } catch (e) {
      setSaveError(e.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Загрузка модуля…</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="addModuleWrapper">
      <div className="addModule">
        <div className="addModuleInputWrapper">
          <input
            className="addModuleInput addModuleName"
            placeholder="Название модуля"
            value={moduleName}
            onChange={e => setModuleName(e.target.value)}
          />
        </div>
        <div className="addModuleInputWrapper">
          <input
            className="addModuleInput addModuleDescription"
            placeholder="Содержание модуля"
            value={moduleDesc}
            onChange={e => setModuleDesc(e.target.value)}
          />
        </div>
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
                <span key={key}
                  onClick={() => { setSelectedDiscipline(name); setDropdownOpen(false); }}
                  style={{ padding: '0.5rem', cursor: 'pointer', background: selectedDiscipline === name ? '#f0f0f0' : '#fff' }}
                >{name}</span>
              ))}
            </div>
          )}
        </div>
        <div className="addModuleTasksListWrapper">
          <div className="addModuleTasksList">
            {tasks.map((t, idx) => (
              <div className="addModuleTaskWrapper" key={idx}>
                <input
                  className="addModuleTaskInput"
                  placeholder="Заголовок задачи"
                  value={t.name}
                  onChange={e => updateTask(idx, 'name', e.target.value)}
                />
                 <button className="addModuleTaskEdit">
                      <Link style={{color: "#fff"}} href={`/portal/teacher/modules/${module_pk}/tasks/${t.id}`}>Редактировать</Link>
                  </button>
                <div className="addModuleTaskButtons">
                  <button className="addModuleTaskDelete" onClick={() => deleteTask(idx)}>Удалить</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="addModuleButtons">
          <button className="addModuleAddTask" onClick={addTask}>Добавить задачу</button>
          <div className="addModulePublishOrNotBublish">
            <button className="addModulePublish" onClick={handleSave} disabled={saving}>
              {saving ? 'Сохранение...' : 'Сохранить изменения'}
            </button>
          </div>
        </div>
        {saveError && <div style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>{saveError}</div>}
      </div>
    </div>
  );
}
