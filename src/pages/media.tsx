import React, { useState } from 'react'
import {
    Grid, GridItem, Box, Heading, HStack, Flex, Image, Text
} from '@chakra-ui/react'
import DashboardNav from '../components/dashboard/DashboardNav'
import Test from '../components/dashboard/Test'
import Test_1 from '../components/dashboard/Test_1'
import NotificationSection from '../components/dashboard/NotificationSection'


export default function Media() {
    const [navShrinked, setNavShrinked] = useState('large');
    return (
        <>
            <Test_1 >
                <NotificationSection />
            </Test_1>
        </>

        // <Grid
        //     templateAreas={`"header header"
        //           "nav main"`}
        //     gridTemplateRows={'60px 1fr'}
        //     gridTemplateColumns={navShrinked === 'large' ? '250px 1fr' : '50px 1fr'}
        //     minH='100vh'
        //     color='blackAlpha.700'
        // >
        //     <DashboardNav />
        //     <Test_1 />
        //     <GridItem bg='grey.50' area={'main'}>
        //         <Box p='10'>
        //             <Heading size='md' color='green.500' pb='5'>Media</Heading>
        //             <HStack spacing={5}>
        //                 <NotificationSection />
        //             </HStack>
        //         </Box>
        //     </GridItem>
        // </Grid>
    )
}