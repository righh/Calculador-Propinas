import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,  ActivityIndicator, Alert} from "react-native";
import Boton from "./Boton";

export default function App() {
    return(
        <View style={StyleSheet.container}>
            <Text>Aplicacion Movil 5B</Text>
            <ActivityIndicator size={'large'} color={'pink'}/>
            <Text>Esta app es un ejemplo</Text>
            <Boton titulo='Press me...'IconPress={()=>{Alert.alert(|)}}/>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})