import * as Yup from "yup"

export const defaultValuesLoginForm = {
    email: "",
    password: "",
    remember: false,
}

export const yupValidationLoginForm = Yup.object().shape({
    email: Yup.string().required("email is required !"),
    password: Yup.string().required("Your password ?")
})