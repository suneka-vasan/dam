import React from 'react'
import { HStack, Box, Text, VStack, Image } from '@chakra-ui/react'
import fb from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'

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
    }
]
export default function SocIcons(props: any) {
    return (
        <>
            <HStack spacing='24px'>
                {items.map(item => {
                    return (
                        <HStack spacing={5} key={item.id}>
                            <Box w='200px' h='200px' bg='white' borderRadius='xl' boxShadow='base' p='3' display='flex' alignItems='center' justifyContent='center'>
                                <VStack>
                                    <Image src={item.img.src} alt='Social Icons' h='75px' w='75px' />
                                    <Text color={"green.500"}>
                                        {item.title}
                                    </Text>
                                </VStack>
                            </Box>
                        </HStack>
                    )
                })}
            </HStack>
        </>
    )
}

