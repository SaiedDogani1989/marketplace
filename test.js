import { StyleSheet, Text, View, Alert, SafeAreaView, Image, Button, StatusBar, Platform } from 'react-native';


//safeAreaView is only works in IOS so for android we must use padding
// so we use Platform in this case.




export default function Test() {


    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello World!!</Text>
            {/* <Text numberOfLines={1}>Hello World Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World!!</Text> */}
            {/* <Text>Hello World Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World!!</Text> */}
            {/* <Image source={require("./assets/favicon.png")} /> */}
            <Image
                // blurRadius={2}
                source={{
                    width: 200,
                    height: 300,
                    uri: "https://picsum.photos/200/300"
                }} />
            {/* <Button
        color="orange"
        title='Click Me'
        onPress={() => Alert.alert("my Title", "My message", [
          { text: "Yes", onPress: () => console.log("Yes") },
          { text: "No", onPress: () => console.log("No") }
        ])} /> */}
            <Button
                color="orange"
                title='Click Me'
                onPress={() => Alert.prompt("My title", "My Message", text => console.log(text))} />
            {/* prompt is not working in android */}
            <StatusBar style="auto" />
            <View style={styleSecond.container}><Text style={styleSecond.text}>Hi This is Saeid,
                Saeid is a very good
            </Text></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});


const styleSecond = StyleSheet.create({
    container: {
        backgroundColor: "red",
        width: "20%",
        height: "10%"
    },
    text: {
        fontStyle: "italic"
    }
})
