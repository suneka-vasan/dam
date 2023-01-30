import * as Yup from "yup"

export const defaultValuesSignupForm = {
    email: "",
    password: "",
    company: "",
    lookingfor: ""
}

export const yupValidationSignupForm = Yup.object().shape({
    email: Yup.string().required("Email is required !").email("Enter valid Email"),
    password: Yup.string().required("Enter your password"),
    lookingfor: Yup.string().required("Please select one")
})