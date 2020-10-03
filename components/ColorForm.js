import React, { useState, useRef } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native"

export default function ColorForm({ onNewColor = f => f }){
    const [inputValue, setValue] = useState("")
    console.log(" => ", inputValue)
    
    const input = useRef()
    
    return (
        <View style={styles.container}>
            <TextInput value={inputValue}
            ref={input} onChangeText={text => setValue(text)} style={styles.txtInput} autoCapitalize='none'
            placeholder="enter a color..."/>
            <Button onPress={() => {
            input.current.blur();
            onNewColor(inputValue);
            setValue('')
            }} 
            title="add" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center"
    },
    txtInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 5,
        borderRadius: 5,
        padding: 5
    }
})