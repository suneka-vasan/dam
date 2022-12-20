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
    AccordionIcon,
} from '@chakra-ui/react'
import bgPattern from '../../../src/assets/bg-pattern.png'
import { CgMenuGridR } from 'react-icons/cg'
import { MdPermMedia, MdArrowRight } from 'react-icons/md'
import { IoIosNotifications } from 'react-icons/io'
import { GoChevronDown } from 'react-icons/go'

const links = [
    { id: 1, label: 'My Apps', icon: <CgMenuGridR />, childlinks: ['All Apps', 'Connected Apps'] },
    { id: 2, label: 'Media', icon: <MdPermMedia />, childlinks: [], path: '/media' },
    { id: 3, label: 'Notifcations', icon: <IoIosNotifications />, childlinks: [], path: '/notifications' },
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
                    {/* <Box>
                        {links.map((link, index) => (
                            <Stack key={index}>
                                <HStack>
                                    <Text>{link.icon}</Text>
                                    <Link href={link.path} onClick={() => setToggle(!toggle)}><Text>{link.label}</Text></Link>
                                </HStack>
                                {link.childlinks.map((childlink, index) => (
                                    <Link key={index} href={link.path}>
                                        {toggle && (
                                            <Text pl='5'>{childlink}</Text>
                                        )}
                                    </Link>
                                ))}
                            </Stack>
                        ))}
                    </Box> */}
                    <VStack w='full'>
                        <Accordion allowToggle w='full'>
                            <AccordionItem >
                                <h2>
                                    <AccordionButton>
                                        <CgMenuGridR fontSize='md' />
                                        <Box as="span" flex='1' textAlign='left' pl='3'>
                                            My Apps
                                        </Box>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    <Text><Link href='/all-apps'>All Apps</Link></Text>
                                    <Text><Link>Connected Apps</Link></Text>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <Link href='/media'>
                                    <AccordionButton>
                                        <MdPermMedia />
                                        <Box as="span" flex='1' textAlign='left' pl='3'>
                                            Media
                                        </Box>
                                    </AccordionButton>
                                </Link>
                            </AccordionItem>
                            <AccordionItem>
                                <Link href='/notifications'>
                                    <AccordionButton>
                                        <MdPermMedia />
                                        <Box as="span" flex='1' textAlign='left' pl='3'>
                                            Notification
                                        </Box>
                                    </AccordionButton>
                                </Link>
                            </AccordionItem>
                        </Accordion>
                    </VStack>
                    <VStack alignItems={'start'}>
                        <Text fontSize='base' >Privacy Policy</Text>
                        <Text fontSize='base' >Dam &copy; {new Date().getFullYear()}</Text>
                    </VStack>
                </VStack>
            </GridItem>
        </>
    )
}             