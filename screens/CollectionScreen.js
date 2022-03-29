import React, {useState, useEffect} from "react";
import {Alert} from "react-native";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Platform,
    PermissionsAndroid,
    ActivityIndicator,
} from "react-native";
import CameraRoll from "@react-native-community/cameraroll";
import RNFetchBlob from "rn-fetch-blob";
import {ImageSlider} from "react-native-image-slider-banner";

const CollectionScreen = ({route}) => {
    const [url, setUrl] = useState("");
    const [data, setData] = useState("");
    const [sliderData, setSliderData] = useState([]);
    const [loading, setLoading] = useState(true);

    const imgUrl = "https://pickthepic.herokuapp.com";
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let response = await fetch(
            `https://pickthepic.herokuapp.com/api/${route.params.id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            },
        );
        let data = await response.json();
        setData(data);
        const tempdata = [];
        data.map(item => tempdata.push({img: imgUrl + item.image_url}));
        setSliderData(tempdata);
        setLoading(false);
    };

    const getPermissionAndroid = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "Image Download Permission",
                    message:
                        "Your permission is required to save images to your device",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK",
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            }
            Alert.alert(
                "Save remote Image",
                "Grant Me Permission to save Image",
                [{text: "OK", onPress: () => console.log("OK Pressed")}],
                {cancelable: false},
            );
        } catch (err) {
            Alert.alert(
                "Save remote Image",
                "Failed to save Image: " + err.message,
                [{text: "OK", onPress: () => console.log("OK Pressed")}],
                {cancelable: false},
            );
        }
    };

    const handleDownload = async url => {
        // if device is android you have to ensure you have permission
        if (Platform.OS === "android") {
            const granted = await getPermissionAndroid();
            if (!granted) {
                return;
            }
        }
        RNFetchBlob.config({
            fileCache: true,
            appendExt: "png",
        })
            .fetch("GET", url)
            .then(res => {
                CameraRoll.saveToCameraRoll(res.data, "photo")
                    .then(() => {
                        Alert.alert(
                            "Save remote Image",
                            "Image Saved Successfully",
                            [
                                {
                                    text: "OK",
                                    onPress: () => console.log("OK Pressed"),
                                },
                            ],
                            {cancelable: false},
                        );
                    })
                    .catch(err => {
                        Alert.alert(
                            "Save remote Image",
                            "Failed to save Image: " + err.message,
                            [
                                {
                                    text: "OK",
                                    onPress: () => console.log("OK Pressed"),
                                },
                            ],
                            {cancelable: false},
                        );
                    });
            })
            .catch(error => {
                Alert.alert(
                    "Save remote Image",
                    "Failed to save Image: " + error.message,
                    [{text: "OK", onPress: () => console.log("OK Pressed")}],
                    {cancelable: false},
                );
            });
    };
    return (
        <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                {loading ? (
                    <View style={styles.indicator}>
                        <ActivityIndicator size="large" color="#5B93C6" />
                    </View>
                ) : (
                    <View style={styles.container}>
                        <ImageSlider
                            data={sliderData}
                            caroselImageStyle={{height: 550}}
                            caroselImageContainerStyle={{height: 650}}
                            indicatorContainerStyle={{margin: 55}}
                            previewImageStyle={{height: 700}}
                            autoPlay={false}
                            onItemChanged={item => setUrl(item.img)}
                            closeIconColor="#eee">
                            <View
                                style={{
                                    marginTop: 15,
                                    flex: 1,
                                    justifyContent: "center",
                                    padding: 5,
                                }}>
                                <Button
                                    color="#6ADAC6"
                                    title="Скачать"
                                    onPress={() => {
                                        handleDownload(url);
                                    }}></Button>
                            </View>
                        </ImageSlider>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    indicator: {
        marginTop: 280,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: 30,
        padding: 10,
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

export default CollectionScreen;
