import React from 'react';

import { FlatList, View, StyleSheet } from 'react-native';



import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listing = [
    {
        id: 1,
        title: "My Nice Jacket",
        price: 100,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Brand New Couch",
        price: 1200,
        image: require("../assets/couch.jpg")
    }
]

function ListingScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listing}
                keyExtractor={(list) => list.id.toString()}
                renderItem={({ item }) =>
                    <View style={styles.container}>
                        <Card
                            title={item.title}
                            price={item.price}
                            image={item.image}
                        />
                    </View>
                }

            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        padding: 20,
    }
})

export default ListingScreen;