import React, { useState } from 'react';
import { StyleSheet, FlatList  } from "react-native";
import ColorButton from './ColorButton'
import ColorForm from "./ColorForm.js"
import { useColors } from '../hooks.'

export default function ColorList() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const { colors, addColor } = useColors()

  return (
    <>
    <ColorForm onNewColor={addColor}/>
    <FlatList style={[styles.container, { backgroundColor }]}
    data={colors}
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
