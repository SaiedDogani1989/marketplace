import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';


function WelcomeScreen() {

    console.log("Hello")
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")} />
                <Text style={styles.tagline}>Sell What you don't need</Text>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => console.log("Clicked")} />
                <AppButton
                    title="Register"
                    onPress={() => console.log("Clicked")}
                    color="secondary"
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        alignItems: "center",
        top: 70
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    },
    buttonContainer: {
        width: "100%",
        padding: 20
    }

})

export default WelcomeScreen;