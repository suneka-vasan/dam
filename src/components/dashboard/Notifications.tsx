import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack, Avatar, Spacer, VStack, Heading, Text, Box, Divider, CloseButton } from '@chakra-ui/react'
import { notifications } from "../../pages/api/notifications"

export default function Notifications(props: any) {
    return (
        <>
            <Tabs colorScheme='teal'>
                <TabList>
                    <Tab>All Notification</Tab>
                    <Tab>Unread</Tab>
                    <Tab>Starred</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        {notifications.map((data, key) => {
                            return (
                                <Box key={key}>
                                    <HStack alignItems='start'>
                                        <Avatar name='Dan Abrahmov' src={data.img} maxW='100px' />
                                        <Spacer />
                                        <VStack alignItems='start' spacing={0} >
                                            <HStack w='100%'>
                                                <Heading size='base' color='green.500'>{data.title}</Heading>
                                                <Spacer />
                                                <CloseButton />
                                            </HStack>
                                            <Text color='teal.500' >{data.time}</Text>
                                            <Box bg='grey.50' borderRadius='lg' p='3'>{data.bodytext}</Box>
                                        </VStack>
                                    </HStack>
                                    <Divider my='5' />
                                </Box>
                            );
                        })}
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

