import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, View } from "react-native";
import ListItem from "../components/List/ListItem";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/List/ListItemSeparator";
import ListItemDeleteAction from "../components/List/ListItemDeleteAction";


const initialMessages = [
    {
        id: 1,
        title: "aliqua. Ut enim ad minim veniam, quis nostrud",
        description: " aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: require("../assets/logo-red.png")
    },
    {
        id: 2,
        title: "nostrud exercitation ullamco laboris",
        description: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: require("../assets/logo-red.png")

    },
]
function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)



    const handleDelete = (message) => {

        const newMessages = messages.filter((m) => m.id !== message.id);
        setMessages(newMessages)

    }

    return (

        <Screen>
            {/* for flatList we need data to return the data array */}

            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ListItem
                            onPress={() => console.log("Message Selected", item)}
                            title={item.title}
                            subTitle={item.description}
                            icon="chevron-right"
                            image={item.image}
                            renderRightActions={() =>
                                <ListItemDeleteAction onPress={() => handleDelete(item)}
                                />}
                        />
                    )
                }}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages(
                        [
                            {
                                id: 2,
                                title: "T1",
                                description: "D1",
                                image: require("../assets/logo-red.png")

                            },
                        ]
                    )
                }}
            />
        </Screen>
    );
}

export default MessagesScreen;