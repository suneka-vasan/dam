import React from 'react'
import {
    Grid, GridItem, Box, Heading, HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react'
import NotificationSection from '../components/dashboard/NotificationSection'
import DashboardNav from '../components/dashboard/DashboardNav'
import { GoChevronDown } from 'react-icons/go'

export default function Notifications() {
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
                <Box m='10' bg='white' minH='90vh' p='5' borderRadius='xl' boxShadow='base'>
                    <HStack justifyContent={'space-between'}>
                        <Heading size='md' color='green.500' pb='5'>Notifications</Heading>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<GoChevronDown />}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem>Mark all as read</MenuItem>
                                <MenuItem>Clear all notification</MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                    <NotificationSection />
                </Box>
            </GridItem>
        </Grid >
    )
}