import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack, Avatar, Spacer, VStack, Heading, Text, Box, Divider, CloseButton } from '@chakra-ui/react'

const tabitems = ['All notification', 'Unread', 'Starred'];
const items = [
    {
        img: 'https://bit.ly/dan-abramov',
        title: 'Notification-1',
        bodytext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        time: '1 Hour ago',
    },
    {
        img: 'https://bit.ly/dan-abramov',
        title: 'Notification-2',
        bodytext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        time: '1 Hour ago',
    },
    {
        img: 'https://bit.ly/dan-abramov',
        title: 'Notification-3',
        bodytext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        time: '1 Hour ago',
    },
    {
        img: 'https://bit.ly/dan-abramov',
        title: 'Notification-4',
        bodytext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        time: '1 Hour ago',
    },

];
export default function NotificationSection(props: any) {
    return (
        <>
            <Tabs colorScheme='teal' backgroundColor='white' minH='88vh' p='5' borderRadius='xl' boxShadow='base' mt='16'>
                <TabList>
                    {tabitems.map((item, index) => {
                        return (
                            <Tab key={index}>{item}</Tab>
                        );
                    })}
                </TabList>
                <TabPanels>
                    <TabPanel>
                        {items.map((item, index) => {
                            return (
                                <HStack alignItems='start' spacing={5} key={index} borderBottom='1px solid' mb='5' pb='5' borderBottomColor={'grey.50'}>
                                    <Avatar name='Dan Abrahmov' src={item.img} maxW='100px' />
                                    <Box w='full'>
                                        <HStack w='full' justifyContent={'space-between'}>
                                            <Heading size='base' color='green.500'>{item.title}</Heading>
                                            <CloseButton />
                                        </HStack>
                                        <Text color='teal.500' >{item.time}</Text>
                                        <Box bg='grey.50' borderRadius='lg' p='3' >{item.bodytext}</Box>
                                    </Box>
                                </HStack>
                            );
                        })}
                    </TabPanel>
                    <TabPanel>
                        <Text>two!</Text>
                    </TabPanel>
                    <TabPanel>
                        <Text>three!</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

