import React, { useState } from 'react';
import { View, StyleSheet, FlatList  } from "react-native";
import ColorButton from './components/ColorButton'

const defaultColors = [
  {"id":'dsf', "color": "pink"},
  {"id":'a34f', "color": "yellow"},
  {"id":'asdf', "color": "blue"},
  {"id":'q34gq', "color": "red"},
  {"id":'dsf', "color": "green"},
  {"id":'a34f', "color": "purple"},
  {"id":'asdf', "color": "orange"},
  {"id":'q34gq', "color": "brown"}
]

export default function App() {
const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <FlatList style={[styles.container, { backgroundColor }]}
    data={defaultColors}
    renderItem={({ item}) => {
      return (
        <ColorButton key={item.id} backgroundColor={item.color} onPress={setBackgroundColor}/>
      )
    }}
    />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingTop: 30
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
