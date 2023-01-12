import React from 'react'
import {
    Box, Heading, HStack, Flex, Image, Text, Center
} from '@chakra-ui/react'
import DashboardNav from '../components/dashboard/DashboardNav'
import fb from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'

const items = [
    {
        id: 1,
        img: fb,
        title: 'Facebook',
    },
    {
        id: 2,
        img: instagram,
        title: 'Instagram',
    },
    {
        id: 3,
        img: twitter,
        title: 'Twitter',
    },
    {
        id: 4,
        img: linkedin,
        title: 'LinkedIn',
    },
]
export default function Allapps() {
    return (
        <DashboardNav>
            <Box mt='16' minH='88vh' p='5'>
                <Heading size='md' color='green.500' pb='5'>Connected Apps</Heading>
                <HStack spacing={5}>
                    {items.map(item => {
                        return (
                            <Center key={item.id} w='200px' h='200px' bg='white' borderRadius='xl' boxShadow='base' p='3'>
                                <Box>
                                    <Image src={item.img.src} alt='Social Icons' h='75px' w='75px' />
                                    <Text color={"green.500"} textAlign='center'>
                                        {item.title}
                                    </Text>
                                </Box>
                            </Center>
                        )
                    })}
                </HStack>
            </Box>
        </DashboardNav>
    )
}