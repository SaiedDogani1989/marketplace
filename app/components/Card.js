// rsf
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from "./AppText"
import colors from '../config/colors';

function Card({ image, title, price }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.price}>${price}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 25,
        marginBottom: 25,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "70%"
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 10
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold"
    }

})

export default Card;

