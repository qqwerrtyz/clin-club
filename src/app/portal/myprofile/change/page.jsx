"use client"
import { useEffect, useState } from "react"
import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"

export default function ChangeProfile() {
  const [specializations, setSpecializations] = useState({})
  const [selectedSpec, setSelectedSpec] = useState("")
  const [loadingSpecs, setLoadingSpecs] = useState(true)

  const changeFields = {
    name: { rus: "ваше имя", type: "text" },
    lastname: { rus: "вашу фамилию", type: "text" },
    birthdate: { rus: "вашу дату рождения", type: "text" },
    number: { rus: "ваш номер телефона", type: "number" },
    email: { rus: "вашу почту", type: "email" },
    city: { rus: "ваш город", type: "text" },
    university: { rus: "ваше место обучения", type: "text" }
    // specialization отдельно
  }

  useEffect(() => {
    const fetchSpecializations = async () => {
      try {
        const response = await fetch("https://api.clinclub.ru/v1/specializations/")
        const data = await response.json()
        setSpecializations(data)
      } catch (err) {
        console.error("Ошибка загрузки специализаций:", err)
      } finally {
        setLoadingSpecs(false)
      }
    }

    fetchSpecializations()
  }, [])

  return (
    <div className="changeProfileWrapper">
      <div className="changeProfile">
        {Object.keys(changeFields).map((item, index) => (
          <div className="changeProfileInputWrapper" key={`${item}-${index}`}>
            <input
              className="changeProfileInput"
              placeholder={`Введите ${changeFields[item].rus}`}
              type={changeFields[item].type}
            />
          </div>
        ))}

        <div className="changeProfileInputWrapper">
          <select
            className="changeProfileInput"
            value={selectedSpec}
            onChange={(e) => setSelectedSpec(e.target.value)}
          >
            <option value="">Выберите специализацию</option>
            {Object.entries(specializations).map(([group, options]) => {
              if (group === "null") return null // пропускаем "Не выбрано"
              return (
                <optgroup label={group} key={group}>
                  {Object.entries(options).map(([code, name]) => (
                    <option key={code} value={name}>
                      {name}
                    </option>
                  ))}
                </optgroup>
              )
            })}
          </select>
        </div>
      </div>

      <button className="deleteAccount">Удалить аккаунт</button>
      <button className="changePhoto">Изменить фото</button>
      <button className="saveChangeProfile">Сохранить изменения</button>
    </div>
  )
}
