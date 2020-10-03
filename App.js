import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, Dimensions, TouchableHighlight  } from "react-native";

import pic from "./assets/icon.png"
import other from "./assets/splash.png"

export default function App() {
const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <View style={[styles.container, { backgroundColor}]}>
      <TouchableHighlight onPress={() => setBackgroundColor("yellow")} underlayColor="orange" style={styles.button}>
        <View style={styles.row}>
        <View  style={[styles.sample, { backgroundColor: "yellow"}]} />
          <Text style={styles.buttonText}>yellow</Text>
        </View> 
      </TouchableHighlight>
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
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255, .8)"
  },
  buttonText: {
      fontSize: 30,
      textAlign: "center"
  },
  page: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: 40,
    backgroundColor: "#DDD"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
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
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white"
  }
})
