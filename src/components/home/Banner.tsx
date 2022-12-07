import { Heading, Flex } from '@chakra-ui/react'
import bgPattern from '../../assets/bg-pattern.png'

export default function Footer() {
    return (
        <Flex
            bgImage={bgPattern.src}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            w={'100%'}
            h={'87vh'}
            justifyContent='center'
            alignItems='center'
            bgColor={'teal.500'}
        >
            <Heading textAlign={'center'} color='green.500' size={{ base: 'md', sm: 'lg' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Heading>
        </Flex>
    )
}