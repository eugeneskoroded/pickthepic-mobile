import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button,
} from "react-native";
import {NavigationContainer} from "@react-navigation/native";

const Section = ({collection, navigation}) => {
    const isDarkMode = useColorScheme() === "dark";
    const url = "https://pickthepic.herokuapp.com";
    console.log(collection);
    return (
        <View style={styles.sectionContainer}>
            <View>
                <Image
                    source={{
                        uri: `${url}${collection.collection_cover_url}`,
                    }}
                    style={styles.sectionImage}
                />
            </View>
            <View style={styles.sectionTitle}>
                <Button
                    color="#6ADAC6"
                    onPress={() =>
                        navigation.navigate("Категория", {
                            id: collection.collection_id,
                        })
                    }
                    title={collection.collection_name.toString()}></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flexDirection: "row",
        marginTop: 20,
        marginHorizontal: 5,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    sectionTitle: {
        flex: 1,
        fontSize: 24,
        fontWeight: "600",
        backgroundColor: "#6ADAC6",
        textAlign: "center",

        margin: 5,
        borderRadius: 5,
        color: "#000000",
    },

    sectionImage: {
        flex: 1,
        width: 150,
        height: 150,
    },
});

export default Section;
