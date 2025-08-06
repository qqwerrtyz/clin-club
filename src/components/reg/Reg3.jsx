"use client"
import { useContext, useEffect, useState } from "react";
import InputReg from "./InputReg";
import { DataRegContext } from "@/app/reg/page";

export default function Reg3({nextStep}) {
    const {formData, setFormData} = useContext(DataRegContext);
    const [citiesData, setCitiesData] = useState(null);
    const [error, setError] = useState(null)

    const [citiesHidden, setCitiesHidden] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const [selectCity, setSelectCity] = useState(null)
    useEffect(() => {
            const fetchConditions = async () => {
                try {
                    const response = await fetch('https://api.clinclub.ru/v1/cities/');
                    if (!response.ok) {
                        throw new Error('Ошибка загрузки условий');
                    }
                    const data = await response.json();
                    setCitiesData(data);
                } catch (err) {
                    setError(err.message);
                } 
            };
    
            fetchConditions();
    
    }, [])
    return (
        <div className="reg3">
            <InputReg 
                name="phone"
                placeholder="Введите ваш номер телефона"
                value={formData.phone}
                onChange={handleChange}
            />
            {/* password */}
                <InputReg 
                name="email"
                placeholder="Введите вашу почту"
                value={formData.email}
                onChange={handleChange}
            />
            <InputReg 
                name="password"
                placeholder="Введите ваш пароль"
                value={formData.password}
                onChange={handleChange}
            />
            <div className="regInputWrapper inputCities" onClick={() => {setCitiesHidden(!citiesHidden)}}>
                <span  className="regInput">{selectCity != null ? selectCity : "Выбирет город"}</span>
            </div>


            {citiesHidden && (
                <div className="ourCitiesWrapper">
                    <div className="ourCities">
                        {
                            citiesData != null && citiesData.map((item, index) => {
                                return (
                                    <span 
                                        onClick={() => {
                                            setSelectCity(item);
                                            setFormData(prev => ({...prev, "city": item}))
                                            setCitiesHidden(!citiesHidden)
                                        }}
                                        className="ourCity">{item}</span>
                                )
                            })
                        }
                    </div>
                </div>
            )}
            
            <button onClick={nextStep} className="regNext" id="next">Далее</button>


        </div>
    )
}