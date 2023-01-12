import React from 'react'
import {
    Flex,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList, MenuItem, useDisclosure
} from '@chakra-ui/react'

export default function NavItem({ icon, title, path }: any) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex
            textAlign='left' alignItems='end'
        >
            <Menu placement="right" isOpen={isOpen}>
                <Link
                    px={3}
                    py={2.5}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: 'white', color: 'green' }}
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                >
                    <MenuButton w="100%">
                        <Icon as={icon} fontSize="md" _hover={{ color: 'green' }} />
                    </MenuButton>
                </Link>
                <MenuList py={0}
                    border="none"
                    w={200}
                    ml={3}
                    onMouseEnter={onOpen} onMouseLeave={onClose}
                >
                    <MenuItem backgroundColor='teal.500' color='white' borderRadius='lg'>
                        <Link textDecoration='none' href={path}>{title}</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}