import React, { useState } from 'react'
import {
    GridItem, Text, Box, Stack, HStack, VStack, Heading, Spacer, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar, Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel, Link
} from '@chakra-ui/react'
import bgPattern from '../../../src/assets/bg-pattern.png'
import { CgMenuGridR } from 'react-icons/cg'
import { MdPermMedia } from 'react-icons/md'
import { IoIosNotifications } from 'react-icons/io'
import { GoChevronDown } from 'react-icons/go'
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const links = [
    {
        id: 1,
        label: 'My Apps',
        icon: <CgMenuGridR />,
        path: '#',
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
const activestyle1 = {
    color: 'green',
    backgroundColor: 'white'
}
const nonactivestyle1 = {
    color: ''
}

export default function DashboardNavExample() {
    const router = useRouter();
    const currentRoute = router.pathname;


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
                bgRepeat='no-repeat' color='white' p={2} >
                <VStack justifyContent={'space-between'} h='full' alignItems={'start'} >
                    <Box w='full'>
                        {links.map((link) => {
                            const navStyle = link.path === currentRoute ? activestyle1 : nonactivestyle1;
                            if (link.childlinks.length === 0) {
                                return (
                                    <NextLink key={link.id} href={link.path} >
                                        <HStack mb='1' px='4' py='2' borderRadius='10' style={navStyle} _hover={{ backgroundColor: 'white', borderRadius: '10', color: 'green' }}>
                                            {link.icon}
                                            <Text fontSize='md'>{link.label}</Text>
                                        </HStack>
                                    </NextLink>
                                )
                            } else {
                                return (
                                    <Accordion allowToggle w='full' key={link.id}>
                                        <AccordionItem>
                                            <NextLink href={''} passHref style={navStyle}>
                                                <AccordionButton mb='1' borderRadius='10' _expanded={{ backgroundColor: 'white', color: 'green', borderRadius: '10' }} _hover={{ backgroundColor: 'white', color: 'green' }}>
                                                    <Text>{link.icon}</Text>
                                                    <Box as="span" flex='1' textAlign='left' pl='3'>
                                                        {link.label}
                                                    </Box>
                                                </AccordionButton>
                                            </NextLink>
                                            {link.childlinks.map((childlink, index) => (
                                                <AccordionPanel borderRadius='10' py='2' key={index} _hover={{ color: 'white', backgroundColor: 'blackAlpha.200' }}>
                                                    <Text pl='7'>
                                                        <Link href={childlink.childpaths}>
                                                            {childlink.childlables}
                                                        </Link>
                                                    </Text>
                                                </AccordionPanel>
                                            ))}
                                        </AccordionItem>
                                    </Accordion>
                                )

                            }

                        })}
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