import { StyleProp, View, Text, StyleSheet, ViewStyle, Pressable} from 'react-native';
import React from 'react';

type props={
    titulo:String,
    onPress:()=>void,
    variante?:'primario' | 'secundario' | 'peligro',
    estilo?:StyleProp<ViewStyle>,
    disable?:boolean,
    icono?:React.ReactNode,
    posicionIcono?:'izquierda' | 'derecha'
}

const Boton = (Props:props) => {
    const getVariante=()=>{
        switch(Props.variante){
            case 'secundario': return styles.secundario;
            case 'peligro': return styles.peligro;
            default: return styles.primario
        }
    }

    return (
        <Pressable onPress={Props.onPress}
        style={[styles.boton,getVariante(), Props.disable && styles.disable]}
        disabled = {Props.disable}>
            {Props.icono && Props.posicionIcono !== 'derecha'}
            <Text style={styles.titulo} > {Props.titulo}</Text>
        </Pressable>
    )
}


/*
const Boton = ()=> {
    return (
        <View>
           <Text>Boton</Text> 
        </View>
    )
}
    */

export default Boton

const styles = StyleSheet.create({
    boton:{
        backgroundColor:'#4B2E1E',
        flexDirection: "column"
    },
    titulo:{
        color:'white'
    },
    primario:{
        backgroundColor:'#4B2E1E'
    },
    secundario:{
        backgroundColor:'#A67B5B'
    },
    peligro:{
        backgroundColor:'red'
    }
})