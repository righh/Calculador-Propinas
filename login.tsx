import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    const eyeIcon = secureText
        ? require('./assets/eye.png')
        : require('./assets/eye-slash.png');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar sesión</Text>

            <View style={styles.inputContainer}>
                <Image source={require('./assets/user.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Número de teléfono, email o nombre de..."
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <Image source={require('./assets/lock.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    placeholderTextColor="#888"
                    secureTextEntry={secureText}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                    <Image source={eyeIcon} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
                <Text style={styles.orText}>O</Text>
                <View style={styles.separator} />
            </View>

            <TouchableOpacity style={styles.socialButton}>
                <Image source={require('./assets/google.png')} style={styles.socialIcon} />
                <Text style={styles.socialText}>Iniciar sesión con Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
                <Image source={require('./assets/facebook.png')} style={styles.socialIcon} />
                <Text style={styles.socialText}>Iniciar sesión con Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgotText}>¿Has olvidado la contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#312D2A',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        marginTop: 80,
        fontSize: 31,
        fontWeight: '900',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#464241',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 8,
        height: 57,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    input: {
        flex: 1,
        color: '#fff',
        paddingVertical: 15,
        fontSize: 16,
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#555',
    },
    orText: {
        marginHorizontal: 10,
        color: '#aaa',
        fontSize: 18,
        fontWeight: 'bold',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#464241',
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        height: 57,
    },
    socialIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    socialText: {
        color: '#fff',
        fontSize: 16,
    },
    forgotText: {
        color: '#ccc',
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 20,
        fontSize: 16,
    },
    button: {
        marginTop: 185,
        backgroundColor: '#81B64C',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#8DC753',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 22,
    },
});

export default LoginScreen;
