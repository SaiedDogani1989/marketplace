import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function CategoryPikerItem({ onPress, item }) {
    return (
        //set item prop to get data form AppPiker
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View>
                    <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
                    <AppText style={styles.text}>{item.label}</AppText>
                </View>
            </TouchableOpacity>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        width: "33%",
        alignItems: "center",
    },
    text: {
        marginTop: 5,
        textAlign: "center"
    }
})

export default CategoryPikerItem;