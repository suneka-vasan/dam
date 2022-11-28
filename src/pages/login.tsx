import React from 'react'
import { Button, Link, Container, Box, Flex, Input, Heading, Text, Card } from '@chakra-ui/react'

export default function Login() {
    return (
        <Box bgColor='grey.50'>
            <Container maxW={'container.lg'} height={'100vh'} display={'flex'} alignItems='center' justifyContent='center'>

                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    boxShadow='xl'>
                    <Flex
                        p='10'
                        height={{ lg: '60vh' }}
                        maxW={{ base: '100%', sm: '200px', md: '400px', lg: '500px' }}
                        alignItems='start'
                        justifyContent='space-between'
                        style={{
                            backgroundImage: 'url(/bg-pattern.png)',
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            flexDirection: 'column',
                        }}>
                        <Heading as='h4' size='md' color='white'>DAM</Heading>
                        <Box >
                            <Heading color='green.500' pb='5'>Lorem ipsum dolor.</Heading>
                            <Text color='white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis adipisci saepe labore earum repudiandae cum.</Text>
                        </Box>
                        <Box></Box>
                    </Flex>
                    <Flex alignItems='center' justifyContent='center' p='10' bgColor='white'>
                        <Box>
                            <Heading color='green.500'>Login</Heading>
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
