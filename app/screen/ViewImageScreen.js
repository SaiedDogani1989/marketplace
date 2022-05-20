import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors"


function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' color="white" size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' color="white" size={30} />
            </View>
            <Image
                resizeMode='contain'
                style={styles.imageScreen} source={require("../assets/chair.jpg")} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30

    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30

    },
    imageScreen: {
        height: "100%",
        width: "100%"
    }
})

export default ViewImageScreen;