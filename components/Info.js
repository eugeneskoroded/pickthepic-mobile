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

const Info = ({navigation, title, nextCategory}) => {
    return (
        <View style={styles.container}>
            <Image
                style={{
                    width: 250,
                    height: 150,
                    resizeMode: "contain",
                }}
                source={require("../assets/cover.png")}
            />
            <Text style={styles.sectionTitle}>{title}</Text>
            <Button
                title="next"
                onPress={() => navigation.replace(nextCategory)}></Button>
        </View>
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
        marginBottom: 30,
    },
    black: {
        backgroundColor: "#000000",
    },

    white: {
        backgroundColor: "#eeee",
    },
});

export default Info;
