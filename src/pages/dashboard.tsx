import React from 'react'
import {
    Grid, GridItem, Icon, Text, Box, Stack, Flex, Heading
} from '@chakra-ui/react'
import bgPattern from '../../src/assets/bg-pattern.png'
import { CgMenuGridR } from 'react-icons/cg'
import { MdPermMedia } from 'react-icons/md'
import { IoIosNotifications } from 'react-icons/io'
import SocIcons from '../components/dashboard/SocIcons'

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
                <Heading color='teal.500' size={{ base: 'md', sm: 'lg' }} pl='5' py='3'>DAM</Heading>
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
                <Box p='5'>
                    <Heading size='md' color='green.500' pb='5'>All Apps</Heading>
                    <SocIcons />
                </Box>
            </GridItem>
        </Grid>
    )
}