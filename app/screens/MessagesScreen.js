import React, { useState } from 'react'
import { FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

const initialMessages = [
    {
        id: 1,
        title: 'Brian Mwendwa',
        description: 'Hello is this couch still in stock?',
        image: require('../assets/user.jpg')
    },
    {
        id: 2,
        title: 'Brian Mwendwa',
        description: 'I am interesed in this item. When is it available for pickup?',
        image: require('../assets/user.jpg')
    }
]

export default function MessagesScreen() {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        // delete from messages array
        setMessages(messages.filter(items => items.id !== message.id));
        // delete from backend
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                (<ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("clicked", item)}
                    renderRightActions={() =>
                        <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                />)}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/user.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    )
}
