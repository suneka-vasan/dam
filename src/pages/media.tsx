import React from 'react'
import {
    Box, Heading, HStack
} from '@chakra-ui/react'
import DashboardNav from '../components/dashboard/DashboardNav'


export default function Media() {
    return (
        <>
            <DashboardNav >
                <Box mt='16' backgroundColor='white' minH='88vh' p='5' borderRadius='xl' boxShadow='base'>
                    <HStack justifyContent={'space-between'}>
                        <Heading size='md' color='green.500' pb='5'>Media</Heading>
                    </HStack>
                </Box>
            </DashboardNav>
        </>
    )
}