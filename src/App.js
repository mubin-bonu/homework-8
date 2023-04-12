import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <form className="registration" onSubmit={handleSubmit(onSubmit)}>
            <label>
                ФИО:
                <input className="full-name" {...register("fullName", { required: true })} />
                {errors.fullName && <span>Поле ФИО обязательно для заполнения</span>}
            </label>
            <label>
                Имя:
                <input className="first-name" {...register("firstName", { required: true })} />
                {errors.firstName && <span>Поле Имя обязательно для заполнения</span>}
            </label>
            <label>
                Год рождения:
                <select className= "yearOfBirth" {...register("yearOfBirth", { required: true })}>
                    <option value="">Выберите год</option>
                    {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                {errors.yearOfBirth && <span>Поле Год рождения обязательно для заполнения</span>}
            </label>
            <label>
                Пол:
                <select className="gender" {...register("gender", { required: true })}>
                    <option value="">Выберите пол</option>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                    <option value="other">Другой</option>
                </select>
                {errors.gender && <span>Поле Пол обязательно для заполнения</span>}
            </label>
            <button type="submit" className= "submit">Зарегистрироваться</button>
        </form>
    );
};

export default RegisterForm;
