import React, { useState } from 'react'
import {
    Button, Link, Container, Box, Flex, Heading, Text, Card
} from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import bgPattern from '../../src/assets/bg-pattern.png'
import { yupResolver } from "@hookform/resolvers/yup"
import { defaultValuesLoginForm, yupValidationLoginForm } from "../components/validator/login"
import CustomField from '../components/common/CustomField'

export default function Login() {
    const [loading, setLoading] = useState(false)
    const {
        reset,
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(yupValidationLoginForm),
        defaultValues: defaultValuesLoginForm,
    })
    const onSubmit = async (data: any) => {
        console.log(data);
        reset()
    }

    return (
        <Box bgColor='grey.50'>
            <Container maxW={'container.lg'} height={{ base: '100vh', sm: '100vh' }} display={'flex'} alignItems='center' justifyContent='center'>
                <Card marginY={{ base: '5', sm: '0' }}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    boxShadow='xl'>
                    <Flex
                        p={{ base: '5', sm: '10' }}
                        height={{ lg: '60vh' }}
                        maxW={{ base: '100%', sm: '200px', md: '400px', lg: '500px' }}
                        alignItems='start'
                        justifyContent='space-between'
                        bgImage={bgPattern.src}
                        bgPos='center'
                        bgSize='cover'
                        bgRepeat='no-repeat'
                        flexDirection='column'>
                        <Heading pb={{ base: '5', sm: '0' }} size={{ base: 'sm', sm: 'md' }} color='white'>DAM</Heading>
                        <Box >
                            <Heading color='green.500' pb='5' size={{ base: 'md', sm: 'lg' }}>Lorem ipsum dolor.</Heading>
                            <Text color='white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis adipisci saepe labore earum repudiandae cum.</Text>
                        </Box>
                        <Box></Box>
                    </Flex>
                    <Flex alignItems='center' justifyContent='start' p={{ base: '5', sm: '10' }} bgColor='white'>
                        <Box w='400px'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Heading color='green.500' size={{ base: 'md', sm: 'lg' }}>Login</Heading>
                                <Text pb='5'>Don&lsquo;t have an account? <Link href='/signup' color='teal.500'>Sign up</Link></Text>
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
                                <Button mt='5' type='submit' colorScheme='green' px='10'
                                    isLoading={loading}>Login</Button>
                            </form>
                        </Box>
                    </Flex>
                </Card>
            </Container>
        </Box>
    )
}