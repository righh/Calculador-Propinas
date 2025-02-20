import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import Header from './Components/Header'


const Plantilla = () => {
    return (
        <View style={styles.container}>
            <Header titulo="Calculadora" nombre="Luis Alberto Mendoza"/>
            <Header titulo="Practica2" nombre="Juan Manuel H H"/>
        </View>
    )
}

export default Plantilla


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch"
    }
})
