import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function SandBox(){
    return(
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#ddd'
    }
})