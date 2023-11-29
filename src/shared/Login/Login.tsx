import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Header from '../../components/Header/Header';
import { useSignInMutation } from '../../redux/api/auth';
import { FormErrors, FormValues } from '../../interfaces/forms';
import { useForm } from '../../hooks/useForm';
import { login } from "../../redux/features/auth";
import { fieldInfo, initialValues } from '../../constants/formRegisterConfig';
import { setLoading } from '../../redux/features/loading';

const Login: React.FC = () => {

    const [signIn] = useSignInMutation();
    const dispatch = useDispatch();

    const requiredFields: (keyof FormValues)[] = ["email", "password"];

    const validate = (values: FormValues): FormErrors => {
        const errors: FormErrors = {};

        for (const field of requiredFields) {
            if (!values[field]) {
                errors[field] = `${fieldInfo[field].placeholder} is required`;
            }
        }
        return errors;
    };

    const handleSubmit = async () => {
        dispatch(setLoading(true));
        await signIn(values)
            .then((result: any) => {
                const { data, error } = result;
                if (data) {
                    toast('Login exitoso', {
                        hideProgressBar: true,
                        autoClose: 3000,
                        type: "success",
                    });
                }

                if (data) {
                    dispatch(login(data));
                } else {
                    toast(error.data.error.errors[0].msg, {
                        hideProgressBar: true,
                        autoClose: 3000,
                        type: "error",
                    });
                }
                dispatch(setLoading(false));
            })
            .catch((err) => {
                dispatch(setLoading(false));
                console.log(err, "Login ERROR");
            });
    };

    const {
        values,
        errors,
        handleChange,
        handleSubmit: handleFormSubmit,
        handleBlur,
    } = useForm(initialValues, validate, handleSubmit);


    return (
        <>
            <Header isLoggedIn={false} />
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white p-8 shadow-md rounded-md w-96">
                    <h2 className="text-2xl font-bold mb-4 text-liverpool-red">Iniciar Sesión</h2>
                    <form onSubmit={handleFormSubmit}>
                        {requiredFields.map((field) => (
                            <div key={field} className="mb-4">
                                <input
                                    className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-liverpool-red"
                                    id={field}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[field]}
                                    name={field}
                                    type={fieldInfo[field].type}
                                    placeholder={fieldInfo[field].placeholder}
                                />
                                {errors[field] && <p>{errors[field]}</p>}
                            </div>
                        ))}
                        <div className="mb-4">
                            <label className="flex items-center text-sm text-liverpool-gray">
                                <input type="checkbox" className="mr-2" />
                                <span>Recordarme</span>
                            </label>
                        </div>
                        <button
                            className="bg-liverpool-red text-white py-2 px-4 rounded-md hover:bg-opacity-80"
                            type='submit'
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
