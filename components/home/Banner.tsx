import { Heading, Flex } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Flex
            bgImg='./bg-pattern.png'
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            w={'100%'}
            h={'87vh'}
            justifyContent='center'
            alignItems='center'
            bgColor={'teal.500'}
        >
            <Heading textAlign={'center'} color='green.500'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Heading>
        </Flex>
    )
}