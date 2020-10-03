import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, Dimensions  } from "react-native";

import pic from "./assets/icon.png"
import other from "./assets/splash.png"

export default function App() {
const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <View style={[styles.container, { backgroundColor}]}>
      <Text onPress={() => setBackgroundColor("green")} style={styles.button}>green</Text>
      <Text onPress={() => setBackgroundColor("red")} style={styles.button}>red</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    width: 90
    },
  page: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: 40,
    backgroundColor: "#DDD"
  },
  image: {
    flex: 1,
    borderRadius: 50,
    margin: 10,
    width: Dimensions.get("window").width
  },
  text: {
    textAlign: "center",
    fontSize: 22,
    color: "red",
    backgroundColor: "yellow",
    margin: 10,
    padding: 5
  },
  selectedText: {
    alignSelf: "flex-end",
    backgroundColor: "red",
    color: "yellow"
  } 
})
