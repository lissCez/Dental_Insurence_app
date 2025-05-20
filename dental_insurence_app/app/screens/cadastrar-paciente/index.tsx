import Goback from '@/components/gobackbutton';
import { addPatient } from '@/src/services/patientsService';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


interface Patient {
    id: string;
    nome: string;
    sexo: string;
    naturalidade: string;
    localNascimento: string;
    dataNascimento: string;
}

const CadastrarPaciente = () => {
    const [pacientes, setPacientes] = useState<Patient[]>([]);

    const [form, setForm] = useState<Omit<Patient, 'id'>>({
        nome: '',
        sexo: '',
        naturalidade: '',
        localNascimento: '',
        dataNascimento: '',
    });

    const navigation = useNavigation();
    const handleChange = (field: keyof typeof form, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const salvar = async () => {
        if (!form.nome || !form.sexo) {
            alert("Preencha os campos obrigatórios");
            return;
        }
        try {
            const novoPaciente = { ...form };
            await addPatient(novoPaciente);
            alert("Paciente salvo com sucesso!");
            navigation.goBack();
        } catch (error) {
            console.error(error);
            alert("Erro ao salvar paciente");
        }
    };
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={styles.pacienteTitle}>Cadastro de Paciente</Text>
            <Text style={styles.formLabel}>Novo Paciente</Text>
            <TextInput placeholder="Nome" value={form.nome} onChangeText={(text) => handleChange('nome', text)} style={styles.input} />
            <TextInput placeholder="Sexo" value={form.sexo} onChangeText={(text) => handleChange('sexo', text)} style={styles.input} />
            <TextInput placeholder="Naturalidade" value={form.naturalidade} onChangeText={(text) => handleChange('naturalidade', text)} style={styles.input} />
            <TextInput placeholder="Local de Nascimento" value={form.localNascimento} onChangeText={(text) => handleChange('localNascimento', text)} style={styles.input} />
            <TextInput placeholder="Data de Nascimento" value={form.dataNascimento} onChangeText={(text) => handleChange('dataNascimento', text)} style={styles.input} />
            <Button title="Salvar Paciente" onPress={salvar} />
            <Goback />
        </View>
    );
};

export default CadastrarPaciente;

const styles = StyleSheet.create({

    pacienteTitle: {
        fontFamily: 'NotoSans_Condensed',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 29,
        color: '#0066FF',
        marginTop: 19,
        marginBottom: 10,
    },
    formLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 8,
        marginBottom: 10,
    }
});

