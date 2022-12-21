import React from 'react'
import {
    Grid, GridItem, Box, Heading, HStack, Flex, Image, Text
} from '@chakra-ui/react'
import DashboardNav from '../components/dashboard/DashboardNav'

export default function Media() {
    return (
        <Grid
            templateAreas={`"header header"
                  "nav main"`}
            gridTemplateRows={'60px 1fr'}
            gridTemplateColumns={'250px 1fr'}
            minH='100vh'
            color='blackAlpha.700'
        >
            <DashboardNav />
            <GridItem bg='grey.50' area={'main'}>
                <Box p='10'>
                    <Heading size='md' color='green.500' pb='5'>Media</Heading>
                    <HStack spacing={5}>
                    </HStack>
                </Box>
            </GridItem>
        </Grid>
    )
}