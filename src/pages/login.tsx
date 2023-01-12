import React, { useState } from 'react'
import {
    Button, Link, Container, Box, Flex, Input, Heading, Text, Card, FormControl,
    FormLabel,
    FormErrorMessage
} from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import bgPattern from '../../src/assets/bg-pattern.png'

export default function Login() {
    const [loading, setLoading] = useState(false)
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm()
    const onSubmit = (data: any) => console.log(data);

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
                                <Text pb='5'>Don’t have an account? <Link href='/signup' color='teal.500'>Sign up</Link></Text>
                                <FormControl isInvalid={errors.email}>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input
                                        focusBorderColor="green.500"
                                        id="email"
                                        type="text"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: 'Please enter a valid email',
                                            },
                                        })}
                                    />
                                    {errors.email && <FormErrorMessage>{errors.email?.message}</FormErrorMessage>}
                                </FormControl>
                                <FormControl isInvalid={errors.password}>
                                    <FormLabel>Password</FormLabel>
                                    <Input focusBorderColor="green.500" type='password'
                                        id="password"
                                        {...register("password", {
                                            required: "Password is required",
                                            pattern: {
                                                message: 'Please enter a password',
                                            },
                                        })} />
                                    {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
                                </FormControl>
                                <Button mt='5' type='submit' colorScheme='green' px='10'
                                    isLoading={isSubmitting || loading}>Login</Button>
                            </form>
                        </Box>
                    </Flex>
                </Card>
            </Container>
        </Box>
    )
}

