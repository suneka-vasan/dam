import React from 'react'
import {
    HStack, Heading, Box, Menu, MenuButton, MenuList, MenuItem, IconButton
} from '@chakra-ui/react'
import { GoChevronDown } from 'react-icons/go'
import NotificationSection from '../components/dashboard/NotificationSection'
import DashboardNav from '../components/dashboard/DashboardNav'

export default function Notifications() {
    return (
        <>
            <DashboardNav>
                <Box mt='16' backgroundColor='white' minH='88vh' p='5' borderRadius='xl' boxShadow='base'>
                    <HStack justifyContent={'space-between'}>
                        <Heading size='md' color='green.500' pb='3'>Notifications</Heading>
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
            </DashboardNav>
        </>
    )
}