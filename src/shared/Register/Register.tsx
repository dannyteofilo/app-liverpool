import React from 'react';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useSignUpMutation } from '../../redux/api/auth';
import { FormErrors, FormValues } from '../../interfaces/forms';
import { useForm } from '../../hooks/useForm';
import { login } from "../../redux/features/auth";
import { fieldInfo, initialValues } from '../../constants/formRegisterConfig';
import { setLoading } from '../../redux/features/loading';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {

    const [signUp] = useSignUpMutation();
    const dispatch = useDispatch();

    const requiredFields: (keyof FormValues)[] = ["email", "password"];

    const validate = (values: FormValues): FormErrors => {
        const errors: FormErrors = {};

        for (const field of requiredFields) {
            if (!values[field]) {
                errors[field] = `${fieldInfo[field].placeholder} es requerido`;
            }
        }
        return errors;
    };

    const handleSubmit = async () => {
        dispatch(setLoading(true));
        await signUp(values)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                toast(err, {
                    hideProgressBar: true,
                    autoClose: 3000,
                    type: "error",
                });
                console.log('err:  :: : ', err)
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
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="p-8 shadow-md card w-96 glass">
                <h2 className="text-2xl font-bold mb-4 text-liverpool-red">Registrar</h2>
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
                            {errors[field] && <p className='text-error
                                '>{errors[field]}</p>}
                        </div>
                    ))}
                    <div className="mb-4">
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="mr-2" />
                            <span>Recordarme</span>
                        </label>
                    </div>
                    <button
                        className="btn btn-primary text-with"
                        type='submit'
                    >
                        Registrar
                    </button>
                    <div className="mb-4 mt-8">
                        <label className="flex items-center text-sm">
                            <span>¿Ya tienes cuenta con nosotros? <Link to="/login" className="link link-secondary">Iniciar sesión</Link></span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
