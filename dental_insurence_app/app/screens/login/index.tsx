import Goback from '@/components/gobackbutton';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/freepik__upload__10074.png')} style={styles.logo} />
            <View style={styles.loginBox}>
                <Text style={styles.title}>Entrar no sistema</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#999"
                    secureTextEntry
                />

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>
            <Goback />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },

    logo: {
        width: 100,
        height: 100,
        marginBottom: 24,
    },

    loginBox: {
        backgroundColor: '#f2f7ff',
        padding: 24,
        borderRadius: 16,
        width: '100%',
        maxWidth: 360,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
        alignItems: 'center',
    },

    title: {
        color: '#0066FF',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 24,
    },

    input: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#E6EEFF',
        borderRadius: 10,
        fontSize: 16,
        color: '#333',
        marginBottom: 16,
    },

    button: {
        backgroundColor: '#FF6052',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        marginTop: 8,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '600',
    },

});

