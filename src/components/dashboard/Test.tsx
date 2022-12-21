import React from 'react'
import { useRouter } from 'next/router'
import { Text, Button, Box } from '@chakra-ui/react'

function DropdownMenu() {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    return (
        <>
            <Box>
                <Button onClick={handleClick} variant='unstyled'>Actions</Button>
                {isOpen ? (
                    <ul>
                        <li>Edit</li>
                        <li>Remove</li>
                        <li>Archive</li>
                    </ul>
                ) : null}
            </Box>
            <Text>Media
            </Text>
            <Text>Media
            </Text>
        </>
    );
}

export default DropdownMenu
