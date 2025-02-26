import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Components/Header";
import Foother from "./Components/Footer";

const fackestore = () => {
    return (
        <View style={styles.container}>
            <Header titulo='Fack Store'></Header>
            <View>
                <Image source={require("../assets/avatar.png")} style={styles.image}/>
            </View>

            <View style={styles.container2}>
                <Text style={styles.titulo}>{props.titulo}</Text>
                <Text>{props.nombre}</Text>
            </View>
        </View>
    )
}