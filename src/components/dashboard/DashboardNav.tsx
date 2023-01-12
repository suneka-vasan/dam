import React, { useState, ReactNode } from 'react'
import {
    Box, Link, Text, Heading, VStack, HStack, IconButton, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel, Spacer, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar, useColorModeValue, Flex, useDisclosure
} from '@chakra-ui/react'
import { GoChevronDown } from 'react-icons/go'
import { BsGrid, BsBell, BsImages } from "react-icons/bs"
import { FiMenu, } from 'react-icons/fi'
import bgPattern from '../../../src/assets/bg-pattern.png'
import { useRouter } from 'next/router'
import NavItem from './NavItem'


const links = [
    {
        id: 1,
        label: 'My Apps',
        icon: <BsGrid />,
        childLinks: [
            {
                childLables: 'All Apps',
                childPaths: '/all-apps'
            },
            {
                childLables: 'Connected Apps',
                childPaths: '/connected-apps'
            }
        ]
    },
    {
        id: 2,
        label: 'Media',
        icon: <BsImages />,
        path: '/media'
    },
    {
        id: 3,
        label: 'Notifcations',
        icon: <BsBell />,
        path: '/notifications'
    }
];

const activeStyle = {
    color: 'green',
    backgroundColor: 'white',
}
const nonactiveStyle = {
}

export default function Test({
    children,
}: {
    children: ReactNode;
}) {
    const router = useRouter()
    const currentRoute = router.pathname
    const [navShrinked, setNavShrinked] = useState('large')
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box bg='white' borderBottom='1px' borderBottomColor={'grey.100'} position='fixed' w='full'>
                <HStack borderBottomWidth="1px"
                    borderBottomColor={useColorModeValue('gray.200', 'gray.700')}>
                    <IconButton
                        pl='1.5'
                        background="none"
                        icon={<FiMenu />}
                        aria-label={''}
                        _hover={{ background: 'none' }}
                        _active={{ background: 'none' }}
                        _focus={{ background: 'none' }}
                        onClick={() => {
                            navShrinked === "large" ? (setNavShrinked("small")) : (setNavShrinked("large"))
                        }}
                    />
                    <Heading color='teal.500' size={{ base: 'md', sm: 'lg' }} py='3'>DAM</Heading>
                    <Spacer />
                    <HStack spacing={{ base: '0', md: '6' }}>
                        <Flex alignItems={'center'}>
                            <Menu>
                                <MenuButton pr='5'
                                    transition="all 0.3s"
                                    _focus={{ boxShadow: 'none' }}>
                                    <HStack>
                                        <Avatar
                                            size={'sm'}
                                            src={
                                                'https://bit.ly/dan-abramov'
                                            }
                                        />
                                        <Text fontSize="sm">Justina Clark</Text>
                                        <GoChevronDown />
                                    </HStack>
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Profile</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </HStack>
                </HStack>
            </Box>
            <Box minW='250' bgImage={bgPattern.src}
                bgPos='center'
                bgSize='cover'
                bgRepeat='no-repeat' mt='60px'
                h='100vh'
                pos='fixed'
                transition='0.2s ease'
                color='white'
                p='1.5'
                left={navShrinked === 'small' ? '-200px' : '0px'}>
                {navShrinked === 'small' ? (
                    <VStack display='flex' textAlign='left' alignItems='end'>
                        {links.map((link) => {
                            if (link?.path !== undefined) {
                                return (
                                    <>
                                    </>
                                )
                            }
                            else {
                                const navStyle = link.path === currentRoute ? activeStyle : nonactiveStyle;
                                return (
                                    <Menu key={link.id} placement="right" isOpen={isOpen}>
                                        <Link
                                            px={3}
                                            py='2'
                                            borderRadius={8}
                                            color='white'
                                            _hover={{ textDecor: 'none', backgroundColor: "white", color: 'green' }}
                                            onMouseEnter={onOpen}
                                            onMouseLeave={onClose}
                                            style={navStyle}>
                                            <MenuButton w="100%">
                                                <Flex>
                                                    {link.icon}
                                                    <Text display={navShrinked == "small" ? "none" : "flex"}>{link.label}</Text>
                                                </Flex>
                                            </MenuButton>
                                        </Link>
                                        <MenuList
                                            py={0}
                                            border="none"
                                            w={200}
                                            ml={3}
                                            backgroundColor='teal.500'
                                            onMouseEnter={onOpen} onMouseLeave={onClose}>
                                            {link.childLinks?.map((childLink, index) => {
                                                if (childLink !== undefined) {
                                                    const navStyle = link.path === currentRoute ? activeStyle : nonactiveStyle;
                                                    return (
                                                        <MenuItem key={index} borderRadius='lg' backgroundColor='teal.500'><Link href={childLink.childPaths}>{childLink.childLables}</Link></MenuItem>
                                                    )
                                                }
                                            })}
                                        </MenuList>
                                    </Menu>
                                )
                            }
                        })}
                        <NavItem icon={BsImages} title="Media" path='/media' />
                        <NavItem icon={BsBell} title="Notification" path='./notifications' />
                    </VStack>
                ) :
                    <VStack justifyContent={'space-between'} h='full' alignItems={'start'}>
                        <Box w='full'>
                            {links.map((link) => {
                                if (link?.path !== undefined) {
                                    const navStyle = link.path === currentRoute ? activeStyle : nonactiveStyle;
                                    return (
                                        <Link key={link.id} href={link?.path}>
                                            <HStack mb='1' px='4' py='2' style={navStyle} borderRadius='10' _hover={{ backgroundColor: 'white', color: 'green' }}>
                                                {link.icon}
                                                <Text fontSize='md'>{link.label}</Text>
                                            </HStack>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <Accordion allowToggle w='full' key={link.id}>
                                            <AccordionItem id='1'>
                                                <AccordionButton mb='1' borderRadius='10' _expanded={{ backgroundColor: 'white', color: 'green' }} _hover={{ backgroundColor: 'white', color: 'green' }}>
                                                    <Text>{link.icon}</Text>
                                                    <Box as="span" flex='1' textAlign='left' pl='2'>
                                                        {link.label}
                                                    </Box>
                                                </AccordionButton>
                                                {link.childLinks.map((childLink, index) => {
                                                    const navStyle2 = childLink.childPaths === currentRoute ? activeStyle : nonactiveStyle;
                                                    return (
                                                        <Link href={childLink.childPaths} _hover={{ textDecoration: 'none' }} key={index} mb='1' borderRadius='10'>
                                                            <AccordionPanel mb='1' px='4' py='2' pl='10' _hover={{ color: 'white', backgroundColor: 'blackAlpha.200' }} style={navStyle2} borderRadius='10'>
                                                                {childLink.childLables}
                                                            </AccordionPanel>
                                                        </Link>
                                                    )
                                                })}
                                            </AccordionItem>
                                        </Accordion>
                                    )
                                }
                            })}
                        </Box>
                        <Box p='3'>
                            <Text fontSize='base'>Privacy Policy</Text>
                            <Text fontSize='base' mb='16'>Dam &copy; {new Date().getFullYear()}</Text>
                        </Box>
                    </VStack>
                }
            </Box >
            <Box ml={navShrinked == "large" ? "250px" : "50px"} p="4" transition='0.2s ease'>
                {children}
            </Box>
        </>
    );
}

