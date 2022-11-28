import { Container, Box, Flex } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Container maxW='container.xl' py='3'>
            <Flex color={"green.500"} justify={"space-between"}>
                <Box>Dam &copy; {new Date().getFullYear()}</Box>
                <Box>Made by Glenise</Box>
            </Flex>
        </Container>
    )
}