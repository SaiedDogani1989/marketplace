import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from '../../config/colors';
import AppText from '../AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({ image, title, subTitle, onPress, icon, renderRightActions, IconComponent }) {
    return (
        //touchableHighlight must have a onPress event to works unless nothing happen
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
                <View style={styles.container}>
                    {/* with ImageIcon we dont need to add icon props here */}
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    {icon &&
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={colors.medium}
                        />}
                </View>
            </TouchableHighlight>
        </Swipeable>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
        backgroundColor: colors.white
    },
    detailContainer: {
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: "500",
    },
    detailContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1
    },
    iconContainer: {
        justifyContent: "center",
    }


})

export default ListItem;