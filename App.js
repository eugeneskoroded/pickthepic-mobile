import "react-native-gesture-handler";
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from "react-native";
import Header from "./components/Header";
import Body from "./screens/Body";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const App = () => {
    return (
        <NavigationContainer>
            <Body />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
    },
    black: {
        backgroundColor: "#000000",
    },

    white: {
        backgroundColor: "#eeee",
    },
});

export default App;
