import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup"
import * as Location from "expo-location"
import Screen from '../components/Screen';

//because we create a index.js file in Form Folder
import { AppForm, AppFormField, SubmitButton } from '../components/Form';
import AppFormPiker from '../components/Form/AppFormPiker';
import CategoryPikerItem from '../components/CategoryPikerItem';
import FormImagePicker from '../components/Form/FormImagePicker';



const validationSchema = Yup.object().shape(
    {
        title: Yup.string().required().min(1).label("Title"),
        price: Yup.number().required().min(1).max(10000).label("Pice"),
        description: Yup.string().label("Description"),
        category: Yup.object().required().nullable().label("Category"),
        images: Yup.array().required().min(1, "Please select at least one image")
    }
)

const categories = [
    {
        value: 1,
        label: "Furniture",
        backgroundColor: "#fc5c65",
        icon: "floor-lamp"
    },
    {
        value: 2,
        label: "Cars",
        backgroundColor: "#fd9644",
        icon: "car"

    },
    {
        value: 3,
        label: "Cameras",
        backgroundColor: "#fed330",
        icon: "camera"
    },
    {
        value: 4,
        label: "Games",
        backgroundColor: "#26de81",
        icon: "cards"
    },
    {
        value: 5,
        label: "Clothing",
        backgroundColor: "#2bcbba",
        icon: "shoe-heel"
    },
    {
        value: 6,
        label: "Sport",
        backgroundColor: "#45aaf2",
        icon: "basketball"
    },
    {
        value: 7,
        label: "Movie & Music",
        backgroundColor: "#4b7bec",
        icon: "headphones"
    },
    {
        value: 8,
        label: "Books",
        backgroundColor: "#1b5221",
        icon: "book"
    },
    {
        value: 9,
        label: "Other",
        backgroundColor: "#sc4s32",
        icon: "?"
    },

]

function ListEditScreen() {
    const [location, setLocation] = useState()

    const getLocation = async () => {

        const { granted } = await Location.requestBackgroundPermissionsAsync();
        if (!granted) return;
        const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude })
    }

    useEffect(() => {
        getLocation()
    },
        [])

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                //for calling the server and send data
                onSubmit={values => console.log(location)}
                validationSchema={validationSchema}
            >
                <FormImagePicker
                    //each component here should have a name props same as we use in initialValue
                    name="images" />
                <AppFormField
                    maxLength={100}
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={8}
                    width={120}
                    name="price"
                    keyboardType="numeric"
                    placeholder="Price"
                />

                {/* with PickerItemComponent props we can create a unique component for our category */}
                <AppFormPiker
                    placeholder="Category"
                    PickerItemComponent={CategoryPikerItem}
                    numberOfColumns={3}
                    name="category"
                    items={categories}
                />
                <AppFormField
                    autoCapitalize="none"
                    maxLength={255}
                    multiline
                    numberOfLine={3} // Works only on android
                    name="description"
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },

})
export default ListEditScreen;



