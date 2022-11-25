import React from 'react'
import {
    ButtonGroup, Button, Container, Link, HStack, Heading, Spacer
} from '@chakra-ui/react'

export default function Nav() {
    return (
        <>
            <Container maxW='container.xl' py='3'>
                <HStack>
                    <Heading color='teal.500'>DAM</Heading>
                    <Spacer />
                    <ButtonGroup spacing='6' ml={'auto'}>
                        <Link href='/login'><Button colorScheme='green'>Login</Button></Link>
                        <Button colorScheme='teal'>Sign up</Button>
                    </ButtonGroup>
                </HStack>
            </Container>
        </>
    )
}