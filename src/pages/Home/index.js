import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native'

export default function Home(){

    const navigation = useNavigation();

    function navegaDetalhes(){
        navigation.navigate('Detalhes')
    }

    return(
        <View
        style={styles.container}>
            <Text style={styles.texto}>Home</Text>
            <View
            style={styles.alinhar}>
                <Button style={styles.alinhar} title="Ir para Detalhes" onPress={ navegaDetalhes }/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
    },
    alinhar:{
        alignItems: 'center',

    },
    texto:{
        color: '#000',
        textAlign: 'center'
    }

});