import React, {useEffect, useState} from "react";

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ActivityIndicator,
} from "react-native";

import {collData} from "../сollections";
import Section from "../components/Section";

const HomeScreen = ({navigation}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let response = await fetch(
            "https://pickthepic.herokuapp.com/api/collections",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            },
        );
        let data = await response.json();

        const filter = data.filter(item => item.collection_show === true);
        setData(filter);
        console.log(data);
    };
    const isDarkMode = false;
    const backgroundStyle = {
        backgroundColor: isDarkMode ? styles.black : styles.white,
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View>
                    {data ? (
                        data.map((collection, index) => (
                            <Section
                                key={index}
                                collection={collection}
                                navigation={navigation}
                            />
                        ))
                    ) : (
                        <ActivityIndicator
                            style={styles.container}
                            size="large"
                            color="#5B93C6"
                        />
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
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

export default HomeScreen;
