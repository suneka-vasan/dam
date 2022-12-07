import React from 'react'
import {
    GridItem, Text, Box, Stack, HStack, VStack, Link, Heading, Spacer, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton, Avatar,
} from '@chakra-ui/react'
import bgPattern from '../../../src/assets/bg-pattern.png'
import { CgMenuGridR } from 'react-icons/cg'
import { MdPermMedia } from 'react-icons/md'
import { IoIosNotifications } from 'react-icons/io'
import { GoChevronDown } from 'react-icons/go'

const links = [
    {
        label: 'My Apps',
        icon: <CgMenuGridR />
    },
    {
        label: 'All Apps',
        icon: '',
        path: '/all-apps'
    },
    {
        label: 'Connected Apps',
        icon: ''
    },
    {
        label: 'Media',
        icon: <MdPermMedia />
    },
    {
        label: 'Notifcations',
        icon: <IoIosNotifications />,
        path: '/notifications'
    },
];

export default function DashboardNav() {
    return (
        <>
            <GridItem bg='white' area={'header'} borderBottom='1px' borderBottomColor={'grey.100'}>
                <HStack>
                    <Heading color='teal.500' size={{ base: 'md', sm: 'lg' }} pl='5' py='3'>DAM</Heading>
                    <Spacer />
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='sm' />
                    <Text>User Name</Text>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<GoChevronDown />}
                            variant='unstyled'
                        />
                        <MenuList>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
            </GridItem>
            <GridItem bg='teal.500' area={'nav'}
                bgImage={bgPattern.src}
                bgPos='center'
                bgSize='cover'
                bgRepeat='no-repeat' color='white' p={5} >
                <VStack justifyContent={'space-between'} h='full' alignItems={'start'} >
                    <Stack direction='column' spacing={5} >
                        {
                            links.map((item, index) => (<HStack spacing={3} key={index}>
                                <Box fontSize={24}>
                                    {item.icon}
                                </Box>
                                <Text><Link href={item.path}>{item.label}</Link></Text>
                            </HStack>
                            ))
                        }
                    </Stack>
                    <VStack>
                        <Text fontSize='base' >Privacy Policy</Text>
                        <Text fontSize='base' >Dam &copy; {new Date().getFullYear()}</Text>
                    </VStack>
                </VStack>
            </GridItem>
        </>
    )
}