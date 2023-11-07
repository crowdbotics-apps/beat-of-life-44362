import { Pressable } from "react-native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Pressable><Image style={styles.logo} source={require("./AdobeStock_613652891.jpeg")} resizeMode="stretch" /></Pressable>
          <Text style={styles.text}>{"Do you dance to the beat of life? \nLet music guide you to find your person!          "}</Text>
        </View>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
      <View style={styles.lgzRtWbg}><Text style={styles.RcmFByLM}>{"Sign Up!"}</Text></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#271c69",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 80,
    width: 319,
    padding: 40,
    borderRadius: 30,
    margin: 40,
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap"
  },
  text: {
    textAlign: "center",
    fontSize: 23,
    color: "#04f94d",
    fontWeight: 700,
    fontFamily: "Playfair Display"
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: 700,
    marginBottom: 20
  },
  lgzRtWbg: {
    height: 35,
    width: 126,
    backgroundColor: "#981795",
    borderRadius: 40,
    color: "#777777",
    borderColor: "#0cf915",
    borderWidth: 3,
    position: "absolute",
    top: 529,
    left: 107
  },
  RcmFByLM: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 21,
    borderRadius: 0,
    fontFamily: "Playfair Display",
    position: "absolute",
    top: 6,
    left: 13,
    color: "#08ff12",
    opacity: 1,
    fontWeight: "700",
    textAlign: "center"
  }
});
export default WelcomeScreen;