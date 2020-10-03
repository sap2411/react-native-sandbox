import React from 'react';
import { View, Text, StyleSheet  } from "react-native";

export default function ColorDetails() {
  return (
    <View style={styles.conatiner}>
        <Text>Color Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex"
    }
})
