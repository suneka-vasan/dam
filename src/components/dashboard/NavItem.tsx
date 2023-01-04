import React from 'react'
import { Link, Icon, Flex, FlexProps } from '@chakra-ui/react'
import { IconType } from 'react-icons';
import { ReactText } from 'react';

interface NavItemProps extends FlexProps {
    icon: IconType;
}
export default function NavItem({ icon, children, ...rest }: NavItemProps) {
    return (

        <Flex
            align="center"
            py="2"
            pl='4'
            mx="2"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
                bg: 'white',
                color: 'green',
            }}
            {...rest}>
            {icon && (
                <Icon
                    mr="4"
                    fontSize="16"
                    _groupHover={{
                        color: 'green',
                    }}
                    as={icon}
                />
            )}
            {children}
        </Flex>
    );
};