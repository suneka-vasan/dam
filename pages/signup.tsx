import React from 'react'
import { Button, Link, Container, Box, Flex, Input, Heading, Text, Card, HStack, Radio, RadioGroup, Stack } from '@chakra-ui/react'

export default function Signup() {
    return (
        <Box bgColor='grey.50'>
            <Container maxW={'container.lg'} height={{ base: '100%', sm: '100vh' }} display={'flex'} alignItems='center' justifyContent='center'>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    boxShadow='xl'>
                    <Flex
                        p='10'
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
                            <Heading color='green.500'>Sign up</Heading>
                            <Text pb='5'>Alreay have an account? <Link href='/login' color='teal.500'>Login</Link></Text>
                            <Text>Looking for?</Text>
                            <HStack>
                                <Input type='radio' focusBorderColor="green.500" />
                                <Input type='radio' focusBorderColor="green.500" />
                            </HStack>
                            <Text>Email</Text>
                            <Input focusBorderColor="green.500" mb='5' />
                            <Text>Password</Text>
                            <Input focusBorderColor="green.500" mb='5' />
                            <Text>Company Name</Text>
                            <Input focusBorderColor="green.500" mb='5' />
                            <Text>Company Name</Text>
                            <Input focusBorderColor="green.500" mb='5' />
                            <Link href='/login'><Button colorScheme='green' px='10'>Sign up</Button></Link>
                        </Box>
                    </Flex>
                </Card>

            </Container>
        </Box>
    )
}
