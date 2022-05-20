import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from '../config/colors';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';


function AppPicker(
    { icon,
        items,
        numberOfColumns = 1,
        selectedItem,
        onSelectedItem,
        placeholder,
        PickerItemComponent = PickerItem }) {
    //add PickerComponent as prop so we can create a unique component for our category

    //show modal
    const [visible, setVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={colors.medium}
                        style={styles.icon}
                    />}

                    {/* if there is a selectedItem choose that name otherwise show the placeholder */}

                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText>
                        : <AppText style={styles.placeholder}>{placeholder}</AppText>}
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={visible} animationType="slide" >
                <Screen>
                    <Button title="Close" onPress={() => setVisible(false)} />
                    <FlatList
                        data={items}
                        numColumns={numberOfColumns}
                        keyExtractor={(category) => category.value.toString()}
                        renderItem={({ item }) => {
                            return (

                                //pass the item data to pikerItem and Category component with item prop 
                                <PickerItemComponent
                                    item={item}
                                    label={item.label}
                                    onPress={() => {
                                        //after selecting item, close the modal
                                        setVisible(false)
                                        //shows the selected category 
                                        onSelectedItem(item)
                                    }}
                                />
                            )
                        }}

                    />

                </Screen>
            </Modal>
        </>


    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        borderRadius: 25,
        backgroundColor: colors.light,
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    placeholder: {
        flex: 1,
        color: colors.medium
    },
    text: {
        flex: 1
    }

})

export default AppPicker;