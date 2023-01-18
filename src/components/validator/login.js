import * as Yup from "yup"

export const defaultValuesLoginForm = {
    userName: "",
    password: "",
    remember: false,
}

export const yupValidationLoginForm = Yup.object().shape({
    userName: Yup.string().required("Username is required !"),
    password: Yup.string().required("Your password ?")
})