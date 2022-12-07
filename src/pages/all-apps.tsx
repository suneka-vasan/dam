import React from 'react'
import {
    Grid, GridItem, Box, Heading, HStack, Flex, Image, Text
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
        <Grid
            templateAreas={`"header header"
                  "nav main"`}
            gridTemplateRows={'60px 1fr'}
            gridTemplateColumns={'300px 1fr'}
            minH='100vh'
            color='blackAlpha.700'
        >
            <DashboardNav />
            <GridItem bg='grey.50' area={'main'}>
                <Box p='10'>
                    <Heading size='md' color='green.500' pb='5'>All Apps</Heading>
                    <HStack spacing={5}>
                        {items.map(item => {
                            return (
                                <Flex key={item.id} w='200px' h='200px' bg='white' borderRadius='xl' boxShadow='base' p='3' alignItems='center' justifyContent='center'>
                                    <Box>
                                        <Image src={item.img.src} alt='Social Icons' h='75px' w='75px' />
                                        <Text color={"green.500"}>
                                            {item.title}
                                        </Text>
                                    </Box>
                                </Flex>
                            )
                        })}
                    </HStack>
                </Box>
            </GridItem>
        </Grid>
    )
}