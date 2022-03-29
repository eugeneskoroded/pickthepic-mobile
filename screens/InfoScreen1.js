import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Image,
} from "react-native";
import Info from "../components/Info";

const InfoScreen1 = ({navigation}) => {
    return (
        <Info
            navigation={navigation}
            title={"Choose category"}
            nextCategory="Info2"
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
        color: "#000000",
    },
    black: {
        backgroundColor: "#000000",
    },

    white: {
        backgroundColor: "#eeee",
    },
});

export default InfoScreen1;
