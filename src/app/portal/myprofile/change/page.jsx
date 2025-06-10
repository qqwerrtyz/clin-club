import "@/app/portal/pageCss/page.css"
import "@/app/portal/pageCss/page.media.css"

export default function ChangeProfile() {
    const changeFields = {
        name: {
            rus: "ваше имя",
            type: "text"
        },

        lastname: {
            rus: "вашу фамилию",
            type: "text"
        },

        birthdate: {
            rus: "вашу дату рождения",
            type: "text"
        },

        number: {
            rus: "ваш номер телефона",
            type: "number"
        },

        email: {
            rus: "вашу почту",
            type: "email"
        },

        city: {
            rus: "ваш город",
            type: "text"
        },

        university: {
            rus: "ваше место обучения",
            type: "text"
        },

        specialization: {
            rus: "вашу специализацию",
            type: "text"
        }

    }
    return (
        <div className="changeProfileWrapper">
            <div className="changeProfile">
                {
                    Object.keys(changeFields).map((item, index) => {
                        return (
                            <div className="changeProfileInputWrapper" key={`${item}-${index}`}>
                                <input 
                                    className="changeProfileInput"
                                    placeholder={`Введите ${changeFields[item].rus}`}
                                    type={changeFields[item].type}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <button className="deleteAccount">Удалить аккаунт</button>

            <button className="saveChangeProfile">Сохранить изменения</button>
        </div>
    )
}