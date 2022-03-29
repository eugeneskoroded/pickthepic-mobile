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
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import CollectionScreen from "./CollectionScreen";
import InfoScreen1 from "./InfoScreen1";
import InfoScreen2 from "./InfoScreen2";
import InfoScreen3 from "./InfoScreen3";
const Stack = createStackNavigator();

const Body = () => {
    const isDarkMode = false;
    const backgroundStyle = {
        backgroundColor: isDarkMode ? styles.black : styles.white,
    };

    const forFade = ({current, next}) => {
        const opacity = Animated.add(
            current.progress,
            next ? next.progress : 0,
        ).interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, 1, 0],
        });

        return {
            leftButtonStyle: {opacity},
            rightButtonStyle: {opacity},
            titleStyle: {opacity},
            backgroundStyle: {opacity},
        };
    };
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Info1"
                component={InfoScreen1}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Info2"
                component={InfoScreen2}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Info3"
                component={InfoScreen3}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Категории"
                component={HomeScreen}
                options={{
                    headerTintColor: "white",
                    headerStyle: {backgroundColor: "#5B93C6"},
                    headerLeft: () => null,
                }}
            />
            <Stack.Screen
                name="Категория"
                component={CollectionScreen}
                options={{
                    headerStyleInterpolator: forFade,
                    headerStyle: {backgroundColor: "#5B93C6"},
                    headerTintColor: "white",
                }}
            />
        </Stack.Navigator>
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

export default Body;
