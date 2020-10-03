import React from 'react';
import { Text, View, StyleSheet  } from "react-native";


export default function App() {

  return (
    <View style={{ padding: 50 }}>
      <Text>red</Text>
      <Text>green</Text>
      <Text>blue</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    marginTop: 40
  }
})
