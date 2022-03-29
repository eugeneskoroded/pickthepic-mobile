import React from "react";
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from "react-native";
const Header = ({title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#5B93C6",
  },

  sectionTitle: {
    margin: 15,
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    color: "#F3F3F3",
  },
});

export default Header;
