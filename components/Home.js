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
        backgroundColor: "white",
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 30,
        textAlign: "center"
    },
})