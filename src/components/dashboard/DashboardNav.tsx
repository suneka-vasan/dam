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
    AccordionPanel, Link, IconButton
} from '@chakra-ui/react'
import bgPattern from '../../../src/assets/bg-pattern.png'
import { BsFillGrid3X3GapFill, BsBellFill, BsCardImage } from "react-icons/bs";
import { FiMenu, } from 'react-icons/fi'
import { CgMenuGridR } from 'react-icons/cg'
import { MdPermMedia } from 'react-icons/md'
import { IoIosNotifications } from 'react-icons/io'
import { GoChevronDown } from 'react-icons/go'
import NextLink from 'next/link';
import { useRouter } from 'next/router';

// interface LinksProps {
//     id: number,
//     label: string,
//     icon: JSX.Element,
//     path?: string,
//     childLinks?: {
//         childLables: string,
//         childPaths: string
//     }[]
// }

const links = [
    {
        id: 1,
        label: 'My Apps',
        icon: <BsFillGrid3X3GapFill />,
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
        icon: <BsCardImage />,
        path: '/media'
    },
    {
        id: 3,
        label: 'Notifcations',
        icon: <BsBellFill />,
        path: '/notifications'
    }
];
const activeStyle = {
    color: 'green',
    backgroundColor: 'white',
}
const nonactiveStyle = {
}

export default function DashboardNav() {
    const router = useRouter();
    const currentRoute = router.pathname;
    const [navSize, changeNavSize] = useState("large")

    return (
        <>
            <GridItem bg='white' area={'header'} borderBottom='1px' borderBottomColor={'grey.100'}>
                <HStack>
                    <IconButton
                        background="none"
                        mt={5}
                        _hover={{ background: 'none' }}
                        icon={<FiMenu />}
                        onClick={() => {
                            if (navSize == "small")
                                changeNavSize("large");

                            else
                                changeNavSize("small");
                        }} aria-label={''} />
                    <Heading color='teal.500' size={{ base: 'md', sm: 'lg' }} pl='5' py='3'>DAM</Heading>
                    <Spacer />
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='sm' />
                    <Menu>
                        <MenuButton pr='5'
                            as={Button} rightIcon={<GoChevronDown />}
                            aria-label='Options'
                            variant='unstyled'>
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
                bgRepeat='no-repeat' color='white' p={2}>
                <VStack justifyContent={'space-between'} h='full' alignItems={'start'}>
                    <Box w='full'>
                        {links.map((link) => {
                            if (link?.path !== undefined) {
                                const navStyle = link.path === currentRoute ? activeStyle : nonactiveStyle;
                                return (
                                    <NextLink key={link.id} href={link?.path}>
                                        <HStack mb='1' px='4' py='2' style={navStyle} borderRadius='10' _hover={{ backgroundColor: 'white', color: 'green' }}>
                                            {link.icon}
                                            <Text fontSize='md'>{link.label}</Text>
                                        </HStack>
                                    </NextLink>
                                )
                            } else {
                                return (
                                    <Accordion allowToggle w='full' key={link.id} >
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
                                                    <Link href={childLink.childPaths} _hover={{ textDecoration: 'none' }} key={index} mb='1' borderRadius='10' >
                                                        <AccordionPanel pl='10' _hover={{ color: 'white', backgroundColor: 'blackAlpha.200' }} style={navStyle2} borderRadius='10'>
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
                    <Box p='3' display={navSize == "small" ? "none" : "block"}>
                        <Text fontSize='base' >Privacy Policy</Text>
                        <Text fontSize='base' >Dam &copy; {new Date().getFullYear()}</Text>
                    </Box>
                </VStack>
            </GridItem>
        </>
    )
}