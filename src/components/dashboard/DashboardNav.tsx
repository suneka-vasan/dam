import React, { useState } from 'react'
import {
    GridItem, Text, Box, Stack, HStack, VStack, Link, Heading, Spacer, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar, Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from '@chakra-ui/react'
import bgPattern from '../../../src/assets/bg-pattern.png'
import { CgMenuGridR } from 'react-icons/cg'
import { MdPermMedia } from 'react-icons/md'
import { IoIosNotifications } from 'react-icons/io'
import { GoChevronDown } from 'react-icons/go'

const links = [
    {
        id: 1,
        label: 'My Apps',
        icon: <CgMenuGridR />,
        childlinks: [
            {
                childlables: 'All Apps',
                childpaths: '/all-apps'
            },
            {
                childlables: 'Connected Apps',
                childpaths: '/connected-apps'
            }
        ]
    },
    {
        id: 2,
        label: 'Media',
        icon: <MdPermMedia />,
        childlinks: [],
        path: '/media'
    },
    {
        id: 3,
        label: 'Notifcations',
        icon: <IoIosNotifications />,
        childlinks: [],
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
                    <Menu >
                        <MenuButton pr='5'
                            as={Button} rightIcon={<GoChevronDown />}
                            aria-label='Options'
                            variant='unstyled'
                        >
                            User Name
                        </MenuButton>
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
                    <Box w='full'>
                        <Accordion allowToggle w='full'>
                            {links.map((link, index) => (
                                <AccordionItem key={index}>
                                    <Link href={link.path}>
                                        <AccordionButton _expanded={{ bg: 'white', color: 'green.500' }} _hover={{ bg: 'white', color: 'green.500' }} borderRadius='10'>
                                            <Text>{link.icon}</Text>
                                            <Box as="span" flex='1' textAlign='left' pl='3'>
                                                {link.label}
                                            </Box>
                                        </AccordionButton>
                                    </Link>
                                    {link.childlinks.map((childlink, index) => (
                                        <AccordionPanel py='2' key={index} _hover={{ color: 'green.500' }}>
                                            <Text pl='7'>
                                                <Link href={childlink.childpaths} >
                                                    {childlink.childlables}
                                                </Link>
                                            </Text>
                                        </AccordionPanel>
                                    ))}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Box>
                    <Box p='3'>
                        <Text fontSize='base' >Privacy Policy</Text>
                        <Text fontSize='base' >Dam &copy; {new Date().getFullYear()}</Text>
                    </Box>
                </VStack>
            </GridItem>
        </>
    )
}   