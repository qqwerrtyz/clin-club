"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Portal() {
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem("access");

        if (!accessToken) return;

        fetch("https://api.clinclub.ru/v1/auth/users/me/", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Ошибка авторизации");
                return res.json();
            })
            .then((data) => {
                if (data.is_student) {
                    localStorage.setItem("role", "student");
                    router.push("/portal/student");
                } else if (data.is_teacher) {
                    localStorage.setItem("role", "teacher");
                    router.push("/portal/teacher");
                } else {
                    localStorage.setItem("role", "user");
                    router.push("/portal/unknown");
                }
            })
            .catch((err) => {
                console.error("Ошибка получения данных пользователя:", err);
                localStorage.removeItem("role");
                router.push("/login");
            });
    }, [router]);

    return <div>Проверка роли пользователя...</div>;
}
