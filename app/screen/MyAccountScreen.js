import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';



import ListItem from '../components/List/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemSeparator from '../components/List/ListItemSeparator';
import Icon from '../components/Icon';


const menuLists = [
    {
        title: "My listing",
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        },

    },
    {
        title: "My Message",
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        },

    },
]


function MyAccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Saeid Dogani"
                    subTitle="Saeid.dogani1989@gmail.com"
                    image={require("../assets/logo-red.png")}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuLists}
                    keyExtractor={(menuList) => menuList.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => {
                        return (
                            <ListItem
                                title={item.title}
                                IconComponent={
                                    <Icon
                                        name={item.icon.name}
                                        backgroundColor={item.icon.backgroundColor}
                                        size={50}
                                        color={colors.white}
                                    />}
                            />
                        )
                    }}
                />
            </View>
            <View>
                <ListItem
                    title="Log Out"
                    IconComponent={
                        <Icon
                            name="logout"
                            backgroundColor={colors.warning}
                            size={50}
                            color={colors.white} />}
                />
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },

    container: {
        marginVertical: 10
    },

})

export default MyAccountScreen;