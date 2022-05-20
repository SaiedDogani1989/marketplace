import React, { useEffect } from 'react'
import { StyleSheet, Image, View, TouchableWithoutFeedback, Alert } from 'react-native'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"



function ImageInput({ imageUri, onChangeImage }) {

    const handlePress = () => {
        if (!imageUri) selectedImage();
        else Alert.alert("Delete", "Are you sure you want to delete this image?",
            [
                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" }
            ])
    }

    const selectedImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            })
            if (!result.cancelled) {
                onChangeImage(result.uri)
            }
        } catch (error) {
            console.log("Error", error)
        }

    }

    //user permission

    const userPermission = async () => {
        const result = await ImagePicker.requestCameraPermissionsAsync();

        if (!result.granted) {
            alert("You need to enable permission to access the library")
        }

    }


    useEffect(() => {
        userPermission()
    }, [])

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (
                    <MaterialCommunityIcons
                        color={colors.medium} name='camera' size={60} />)}
                {(imageUri) && <Image
                    source={{ uri: imageUri }}
                    style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 100,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    }
})


export default ImageInput;