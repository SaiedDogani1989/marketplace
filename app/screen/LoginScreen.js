import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from "yup"
import Screen from '../components/Screen';

//because we create a index.js file in Form Folder
import { AppForm, AppFormField, SubmitButton } from '../components/Form';



const validationSchema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password")
    }
)
function LoginScreen() {

    return (
        <Screen style={styles.container}>
            <Image style={styles.image} source={require("../assets/logo-red.png")} />

            <AppForm
                initialValues={{ email: '', password: "" }}
                //for calling the server and send data
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    placeholder="Email"
                    icon="email"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="password"
                    textContentType="password"
                    placeholder="Password"
                    secureTextEntry
                    icon="lock"
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    image: {
        width: 70,
        height: 70,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20

    }
})
export default LoginScreen;



