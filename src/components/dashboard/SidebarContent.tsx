import React, { useState } from 'react';
import {
    Box, Flex, Text, IconButton, useColorModeValue, CloseButton, BoxProps, Link, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel, HStack
} from '@chakra-ui/react'
import { RiMenuFoldFill } from 'react-icons/ri';
import NavItem from '../dashboard/NavItem'
import { BsGrid, BsBell, BsImages } from "react-icons/bs";
import { IconType } from 'react-icons';
import bgPattern from '../../../src/assets/bg-pattern.png'
import { useRouter } from 'next/router';

interface LinkItemProps {
    id: number,
    label: string,
    icon: IconType,
    path?: string,
    childLinks?: {
        childLables: string,
        childPaths: string
    }[]
}

const LinkItems: Array<LinkItemProps> = [
    {
        id: 1,
        label: 'My Apps',
        icon: BsGrid,
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
        icon: BsImages,
        path: '/media'
    },
    {
        id: 3,
        label: 'Notifcations',
        icon: BsBell,
        path: '/notifications'
    }
];

const activeStyle = {
    color: 'green',
    backgroundColor: 'white',
}
const nonactiveStyle = {
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

export default function SidebarContent({ onClose, ...rest }: SidebarProps) {
    const router = useRouter();
    const currentRoute = router.pathname;
    const [navSize, changeNavSize] = useState("large")
    return (
        <>

            <Box
                transition="0.5s ease-in-out"
                bgImage={bgPattern.src}
                bgPos='center'
                bgSize='cover'
                bgRepeat='no-repeat' color='white'
                borderRightColor={useColorModeValue('gray.200', 'gray.700')}
                w={navSize == "small" ? "75px" : "250px"}
                pos="fixed"
                h="full"
                {...rest}>
                <Flex h="20" px='2' alignItems="center" justifyContent={{ base: 'space-between', md: 'start' }} bg={useColorModeValue('white', 'gray.900')}>
                    <IconButton
                        background="none"
                        _hover={{ background: 'none' }}
                        icon={<RiMenuFoldFill />}
                        aria-label={''}
                        color='green.500' size='lg'
                        onClick={() => {
                            if (navSize == "small")
                                changeNavSize("large")
                            else
                                changeNavSize("small")
                        }} />
                    <Text pl='1' fontSize="2xl" color='teal.500' fontWeight="bold">
                        DAM
                    </Text>
                    <CloseButton display={{ base: 'flex', md: 'none' }} mr='0' onClick={onClose} color='gray' />
                </Flex>
                <Box w='full'>
                    {LinkItems.map((link) => {
                        if (link?.path !== undefined) {
                            const navStyle = link.path === currentRoute ? activeStyle : nonactiveStyle;
                            return (
                                <Link key={link.id} href={link?.path}>
                                    <NavItem icon={link.icon} style={navStyle} mt='1' >
                                        <Text display={navSize == "large" ? "flex" : "none"}>{link.label}</Text>
                                    </NavItem>
                                </Link>
                            )
                        } else {
                            return (
                                <Box mt='2' mx='2' key={link.id} >
                                    <Accordion allowToggle >
                                        <AccordionItem>
                                            <AccordionButton p='0' borderRadius='lg' _expanded={{ backgroundColor: 'white', color: 'green' }} _hover={{ backgroundColor: 'white', color: 'green' }}>
                                                <NavItem icon={link.icon} pl='2' >
                                                    <Text display={navSize == "large" ? "flex" : "none"}>{link.label}</Text>
                                                </NavItem>
                                            </AccordionButton>
                                            {link.childLinks?.map((childLink, index) => {
                                                const navStyle2 = childLink.childPaths === currentRoute ? activeStyle : nonactiveStyle;
                                                return (
                                                    <Link href={childLink.childPaths} _hover={{ textDecoration: 'none' }} key={index} mb='1' borderRadius='10' >
                                                        <AccordionPanel mt='1' style={navStyle2} py='2' pl='12' _hover={{ color: 'white', backgroundColor: 'blackAlpha.200' }} borderRadius='10'>
                                                            {childLink.childLables}
                                                        </AccordionPanel>
                                                    </Link>
                                                )
                                            })}
                                        </AccordionItem>
                                    </Accordion>
                                </Box>
                            )
                        }
                    })}
                </Box>
            </Box>
        </>
    );
};