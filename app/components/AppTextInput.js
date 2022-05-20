import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from '../config/colors';
import defaultStyle from "../config/styles"


function AppTextInput({ icon, width = "100%", ...otherProps }) {

    return (
        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons
                name={icon}
                size={20}
                color={colors.medium}
                style={styles.icon}
            />}
            <TextInput
                style={[defaultStyle.text, styles.text]}
                {...otherProps}
                placeholderTextColor={colors.medium}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        borderRadius: 25,
        backgroundColor: colors.light,
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    }

})

export default AppTextInput;