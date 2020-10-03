import React from 'react';
import {Button, Text, View, ActivityIndicator, ProgressViewIOS} from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <ProgressViewIOS progress={0.5}/>
      <ActivityIndicator size="large" color="#61DBFB" />
      <Button title="click me" />
    </View>
  )
}
