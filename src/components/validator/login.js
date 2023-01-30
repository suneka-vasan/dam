import * as Yup from "yup"

export const defaultValuesLoginForm = {
    email: "",
    password: "",
    remember: false,
}

export const yupValidationLoginForm = Yup.object().shape({
    email: Yup.string().required("Email is required !").email("Enter valid Email"),
    password: Yup.string().required("Enter your password")
})