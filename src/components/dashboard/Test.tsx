import React, { ReactNode, useState } from 'react';
import {
    Box,
    useColorModeValue,
    Drawer,
    DrawerContent,
    useDisclosure,
} from '@chakra-ui/react';
import MobileNav from '../dashboard/MobileNav'
import SidebarContent from '../dashboard/SidebarContent'

// interface LinkItemProps {
//     name: string;
//     icon: IconType;
// }
// const LinkItems: Array<LinkItemProps> = [
//     { name: 'Home', icon: FiHome },
//     { name: 'Trending', icon: FiTrendingUp },
//     { name: 'Explore', icon: FiCompass },
//     { name: 'Favourites', icon: FiStar },
//     { name: 'Settings', icon: FiSettings },
// ];


export default function Test({
    children,
}: {
    children: ReactNode;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [navSize, changeNavSize] = useState("large")
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
                onClick={() => {
                    if (navSize == "small")
                        changeNavSize("large")
                    else
                        changeNavSize("small")
                }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            <Box ml={navSize == "small" ? "250px" : "70px"} p="4" transition='0.5s ease-in-out'>
                {children}
            </Box>
        </Box>
    );
}