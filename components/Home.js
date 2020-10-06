import React from 'react'
import {Text, Button, View} from 'react-native'

export default function Home(){
    return(
        <View style={styles.container}>
            <Text >Welcome to Color Catalog</Text>
            <Button style={styles.buttonText} onPress={() => navigation.navigate("List", { color: item.color })} >
                Let's see some colors!
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white"
    },
    buttonText: {
        fontSize: 30,
        textAlign: "center"
    },
})