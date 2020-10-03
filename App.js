import React from 'react';
import { Image, Text, View, StyleSheet, Dimensions  } from "react-native";

import pic from "./assets/icon.png"
import other from "./assets/splash.png"

export default function App() {

  return (
    <View style={styles.page}>
      <Image style={styles.image} source={pic}/>
      <Image style={styles.image} source={other}/>
    </View>
  )
}

const styles = StyleSheet.create({
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
