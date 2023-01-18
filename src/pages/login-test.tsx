import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { defaultValuesLoginForm, yupValidationLoginForm } from "../components/validator/login"
import CustomField from '../components/common/CustomField'
import { NextPage } from "next";
import { Button } from '@chakra-ui/react'

interface Props { }

const Login: NextPage<Props> = (props: any) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(yupValidationLoginForm),
        defaultValues: defaultValuesLoginForm,
    })


    const onSubmit = async (values: any) => {
        console.log(values)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CustomField
                    label="Username or Email"
                    name="email"
                    register={register}
                    errors={errors}
                    control={control}
                />
                <CustomField
                    label="Password"
                    name="password"
                    type="password"
                    register={register}
                    errors={errors}
                    control={control}
                />
                <Button type={"submit"}>
                    Login
                </Button>
            </form>
        </>
    )
}

export default Login
