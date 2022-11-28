import React from 'react'
import { Button, Link, Container, Box, Flex, Input, Heading, Text, Card, HStack, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import bgPattern from '../../src/assets/bg-pattern.png'

export default function Signup() {
    const [value, setValue] = React.useState('Professional')
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
                        <Heading pb='5' size='md' color='white'>DAM</Heading>
                        <Box >
                            <Heading color='green.500' pb='5'>Lorem ipsum dolor.</Heading>
                            <Text color='white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis adipisci saepe labore earum repudiandae cum.</Text>
                        </Box>
                        <Box></Box>
                    </Flex>
                    <Flex alignItems='center' justifyContent='center' p={{ base: '5', sm: '10' }} bgColor='white'>
                        <Box>
                            <Heading color='green.500'>Sign up</Heading>
                            <Text pb='5'>Alreay have an account? <Link href='/login' color='teal.500' textDecoration='none'>Login</Link></Text>
                            <Text>Looking for?</Text>
                            <RadioGroup onChange={setValue} value={value}>
                                <Stack mb='5' direction={{ base: 'column', sm: 'row' }}>
                                    <Box w={{ base: '100%', sm: '50%' }} border='1px' borderColor='gray.200' px='4' py='1' borderRadius='8'><Radio value='Professional' colorScheme='green' defaultChecked size='sm'>Professional</Radio></Box>
                                    <Box w={{ base: '100%', sm: '50%' }} border='1px' borderColor='gray.200' px='4' py='1' borderRadius='8'><Radio value='Personal' colorScheme='green' size='sm'>Personal</Radio></Box>
                                </Stack>
                            </RadioGroup>
                            <Text>Email</Text>
                            <Input focusBorderColor="green.500" mb='5' />
                            <Text>Password</Text>
                            <Input focusBorderColor="green.500" mb='5' />
                            <Text>Company Name</Text>
                            <Input focusBorderColor="green.500" mb='5' />
                            <Link href='/login'><Button colorScheme='green' px='10'>Sign up</Button></Link>
                        </Box>
                    </Flex>
                </Card>

            </Container >
        </Box >
    )
}
