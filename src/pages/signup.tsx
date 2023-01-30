import React, { useState, useEffect } from 'react'
import { Button, Link, Container, Box, Flex, Input, Heading, Text, Card, Radio, RadioGroup, Stack, useRadioGroup, Select, FormControl, FormLabel } from '@chakra-ui/react'
import { Controller, useForm } from "react-hook-form"
import bgPattern from '../../src/assets/bg-pattern.png'
import { yupResolver } from "@hookform/resolvers/yup"
import { defaultValuesSignupForm, yupValidationSignupForm } from "../components/validator/signup"
import CustomField from '../components/common/CustomField'

const rows = [{ value: 'Professional', label: 'Professional' }, { value: 'Personal', label: 'Personal' }]

export default function Signup() {
    const [loading, setLoading] = useState(false)
    const {
        reset,
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(yupValidationSignupForm),
        defaultValues: defaultValuesSignupForm,
    })
    const onSubmit = async (data: any) => {
        console.log({ data });
        reset()
    }
    return (
        <Box bgColor='grey.50'>
            <Container maxW={'container.lg'} height={{ base: '100%', sm: '100vh' }} display={'flex'} alignItems='center' justifyContent='center'>
                <Card marginY={{ base: '5', sm: '0' }}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    boxShadow='xl'>
                    <Flex
                        p={{ base: '5', sm: '10' }}
                        maxW={{ base: '100%', sm: '200px', md: '400px', lg: '500px' }}
                        alignItems='start'
                        justifyContent='space-between'
                        bgImage={bgPattern.src}
                        bgPos='center'
                        bgSize='cover'
                        bgRepeat='no-repeat'
                        flexDirection='column'>
                        <Heading pb={{ base: '5', sm: '0' }} size={{ base: 'md', sm: 'lg' }} color='white'>DAM</Heading>
                        <Box >
                            <Heading color='green.500' pb='5' size={{ base: 'md', sm: 'lg' }}>Lorem ipsum dolor.</Heading>
                            <Text color='white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis adipisci saepe labore earum repudiandae cum.</Text>
                        </Box>
                        <Box></Box>
                    </Flex>
                    <Flex alignItems='center' justifyContent='start' p={{ base: '5', sm: '10' }} bgColor='white' w={{ base: '100%', sm: '200px', md: '400px', lg: '500px' }}>
                        <Box w='full'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Heading color='green.500' size={{ base: 'md', sm: 'lg' }}>Sign up</Heading>
                                <Text pb='5'>Alreay have an account? <Link href='/login' color='teal.500' textDecoration='none'>Login</Link></Text>
                                <CustomField
                                    label="Looking for?"
                                    name="lookingfor"
                                    type="radio"
                                    register={register}
                                    errors={errors}
                                    control={control}
                                    radio={rows}
                                />
                                <CustomField
                                    label="Email"
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
                                <CustomField
                                    label="Company"
                                    name="company"
                                    register={register}
                                    errors={errors}
                                    control={control}
                                />
                                <Button colorScheme='green' px='10' type='submit'>Sign up</Button>
                            </form>
                        </Box>
                    </Flex>
                </Card>

            </Container >
        </Box >
    )
}
