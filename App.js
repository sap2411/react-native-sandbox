import React, { useState } from 'react';
import { View, StyleSheet  } from "react-native";
import ColorButton from './components/ColorButton'

export default function App() {
const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ColorButton backgroundColor="red" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="green" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="blue" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="yellow" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="purple" onPress={setBackgroundColor}/>
    </View>
  );
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
