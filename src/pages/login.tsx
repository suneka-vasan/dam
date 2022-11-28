import React from 'react'
import { Button, Link, Container, Box, Flex, Input, Heading, Text, Card } from '@chakra-ui/react'
import bgPattern from '../../src/assets/bg-pattern.png'

export default function Login() {
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
                    <Flex alignItems='center' justifyContent='center' p={{ base: '5', sm: '10' }} bgColor='white'>
                        <Box>
                            <Heading color='green.500' size={{ base: 'md', sm: 'lg' }}>Login</Heading>
                            <Text pb='5'>Don’t have an account? <Link href='/signup' color='teal.500'>Sign up</Link></Text>
                            <Text>Email</Text>
                            <Input focusBorderColor="green.500" mb='5' />
                            <Text>Password</Text>
                            <Input focusBorderColor="green.500" mb='5' />
                            <Link href='/login'><Button colorScheme='green' px='10'>Login</Button></Link>
                        </Box>
                    </Flex>
                </Card>
            </Container>
        </Box>
    )
}
