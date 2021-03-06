import React from 'react';
import ColorList from './components/ColorList'
import ColorDetails from './components/ColorDetails'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from './components/Home.js'

const { Navigator, Screen } = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="List" options={{ title: "Color List"}} component={ColorList} />
        <Screen name="Details" component={ColorDetails} />
      </Navigator>
    </NavigationContainer>
  )
}