import React from 'react'
import {
    Grid, GridItem, Icon, Text, Box, Stack, Flex, Heading, HStack, Spacer, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton, Avatar
} from '@chakra-ui/react'
import bgPattern from '../../src/assets/bg-pattern.png'
import { CgMenuGridR } from 'react-icons/cg'
import { MdPermMedia } from 'react-icons/md'
import { IoIosNotifications } from 'react-icons/io'
import Notifications from '../components/dashboard/Notifications'
import { GoChevronDown } from 'react-icons/go'

export default function Dashboard() {
    return (
        <Grid
            templateAreas={`"header header"
                  "nav main"`}
            gridTemplateRows={'60px 1fr'}
            gridTemplateColumns={'300px 1fr'}
            minH='100vh'
            color='blackAlpha.700'
        >
            <GridItem bg='white' area={'header'} borderBottom='1px' borderBottomColor={'grey.100'}>
                <HStack>
                    <Heading color='teal.500' size={{ base: 'md', sm: 'lg' }} pl='5' py='3'>DAM</Heading>
                    <Spacer />
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='sm' />
                    <Text>User Name</Text>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<GoChevronDown />}
                            variant='unstyled'
                        />

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
                bgRepeat='no-repeat' color='white'>
                <Stack direction='column' p={5} spacing={3} >
                    <Flex alignItems='center' justifyContent='start'>
                        <Icon as={CgMenuGridR} height="1.7em" width="1.7em" /><Text fontSize='md' pl='5' >My Apps</Text>
                    </Flex>
                    <Flex alignItems='center' justifyContent='start'>
                        <Icon as={MdPermMedia} height="1.7em" width="1.7em" /><Text fontSize='md' pl='5'>Media</Text>
                    </Flex>
                    <Flex alignItems='center' justifyContent='start'>
                        <Icon as={IoIosNotifications} height="1.7em" width="1.7em" /><Text fontSize='md' pl='5'>Notifications</Text>
                    </Flex>
                </Stack>
            </GridItem>
            <GridItem bg='grey.50' area={'main'}>
                <Box m='10' bg='white' borderRadius='lg' minH='90vh' p='5'>
                    <HStack>
                        <Heading size='md' color='green.500' pb='5'>Notifications</Heading>
                        <Spacer />
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<GoChevronDown />}
                                variant='outline'
                            />

                            <MenuList>
                                <MenuItem>Mark all as read</MenuItem>
                                <MenuItem>Clear all notification</MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                    <Notifications />
                </Box>
            </GridItem>
        </Grid >
    )
}