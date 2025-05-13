import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, senha);
            router.replace("./home");
        } catch (error: any) {
            Alert.alert("Erro ao entrar", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login da Clínica</Text>
            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                placeholder="Senha"
                style={styles.input}
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            <Button title="Entrar" onPress={handleLogin} />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 12
    }
});