import React, {useLayoutEffect} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import {useRoute, useNavigation} from "@react-navigation/native"

export default function Sobre(){
    return(
        <View
        style={styles.container}>
            <Text style={styles.texto}>Sobre</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',

    },
    texto:{
        color: '#000',
        textAlign: 'center'
    }

});