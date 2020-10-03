import React, { useState } from 'react';
import { View, StyleSheet, FlatList  } from "react-native";
import ColorButton from './components/ColorButton'
import ColorForm from "./components/ColorForm.js"

const defaultColors = [
  {"id":'dsf', "color": "pink"},
  {"id":'a34f', "color": "yellow"},
  {"id":'asdf', "color": "blue"},
  {"id":'ddsf', "color": "green"},
  {"id":'a3a4f', "color": "purple"},
  {"id":'asfdf', "color": "orange"},
  {"id":'q345gq', "color": "brown"}
]

export default function App() {
const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <>
    <ColorForm onNewColor={newColor => {}}/>
    <FlatList style={[styles.container, { backgroundColor }]}
    data={defaultColors}
    renderItem={({ item }) => {
      return (
        <ColorButton key={item.id} backgroundColor={item.color} onPress={setBackgroundColor}/>
      )
    }}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex"
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
