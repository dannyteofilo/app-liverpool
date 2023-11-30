import { FormValues } from "../interfaces/forms";

export const initialValues: FormValues = {
    email: "",
    password: "",
};

export const requiredFields: (keyof FormValues)[] = [
    "email",
    "password",
];

export const fieldInfo: Record<
    keyof FormValues,
    { type: string; placeholder: string }
> = {
    email: { type: "email", placeholder: "Email" },
    password: { type: "password", placeholder: "Password" },
};