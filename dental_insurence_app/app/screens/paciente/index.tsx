import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const CadastroPacienteScreen = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleCadastro = () => {
        if (!nome || !email) {
            Alert.alert('Preencha todos os campos!');
            return;
        }
        Alert.alert('Paciente cadastrado com sucesso!');
        setNome('');
        setEmail('');
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Cadastro de Paciente</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Cadastrar" onPress={handleCadastro} />

            <Link href="/screens/home" asChild>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkTexto}>⭠ Voltar</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

export default CadastroPacienteScreen;

const styles = StyleSheet.create({
    link: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
      width: "80%"
    },
    linkTexto: {
      color: '#03a1fc',
      fontWeight: '600',
    }
  });