import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/List/ListItem';

function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/chair.jpg")} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>A chair for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/logo-red.png")}
                        title="Saeid Dogani"
                        subTitle="5 Listing"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 10,
        fontWeight: "500",
        fontSize: 24
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailsScreen;