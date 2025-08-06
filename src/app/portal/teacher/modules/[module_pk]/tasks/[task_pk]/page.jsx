"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdditionalConditions from "@/components/portal/addTask/additionalConditions/AdditionalConditions";
import AddQuestions           from "@/components/portal/addTask/questions/AddQuestions";
import "@/app/portal/pageCss/page.css";
import "@/app/portal/pageCss/page.media.css";

export default function AddTaskPage() {
  const { module_pk, task_pk } = useParams();
  const router = useRouter();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Защита по роли
    const role = localStorage.getItem("role");
    if (role !== "teacher") {
      router.push("/");
      return;
    }

    // Fetch details of this task
    (async () => {
      try {
        const token = localStorage.getItem("access");
        const res = await fetch(
          `https://api.clinclub.ru/v1/teacher/modules/${module_pk}/tasks/${task_pk}/`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (!res.ok) throw new Error(`Ошибка ${res.status}`);
        setData(await res.json());
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [module_pk, task_pk, router]);

  if (loading) return <div>Загрузка задачи…</div>;
  if (error)   return <div style={{color:'red'}}>{error}</div>;

  return (
    <div className="teacherAddTask">
      <div className="teacherAddTaskHeadlineWrapper">
        <span className="teacherAddTaskHeadline">
          Задача {data.name}
        </span>
      </div>

      <div className="teacherTaskConditionsWrapper">
        <textarea
          placeholder="Введите условия задачи"
          className="teacherTaskCondition"
          value={data.description}
          onChange={e => {/* обновляем локально */}}
        />
      </div>

      <div className="additionalConditionsTaskWrapper">
        <div className="additionalConditionsHeaderWrapper">
          <span className="additionalConditionsHeader">Дополнительные условия</span>
        </div>
        <AdditionalConditions
          initialConditions={data.additional_conditions}
        />
      </div>

      <div className="questionsTeacherWrapper">
        <div className="questionTeacherHeader">
          <span className="questionTeacherHeadline">Вопросы</span>
        </div>
        <AddQuestions
          initialQuestions={data.questions}
        />
      </div>

      <button className="questionTeacherSave">
        Сохранить
      </button>
    </div>
  );
}
