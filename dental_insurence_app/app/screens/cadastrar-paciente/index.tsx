import Goback from '@/components/gobackbutton';
import PatientCard from '@/components/patientCard';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

interface Patient {
    id: string;
    nome: string;
    sexo: string;
    naturalidade: string;
    localNascimento: string;
    dataNascimento: string;
}

const Pacientes = () => {
    const [pacientes, setPacientes] = useState<Patient[]>([]);
    const [form, setForm] = useState<Omit<Patient, 'id'>>({
        nome: '',
        sexo: '',
        naturalidade: '',
        localNascimento: '',
        dataNascimento: '',
    });

    const handleChange = (field: keyof typeof form, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const adicionarPaciente = () => {
        if (!form.nome || !form.sexo) return alert('Preencha os campos obrigatórios');
        const novoPaciente: Patient = {
            id: Math.random().toString(),
            ...form,
        };
        setPacientes((prev) => [...prev, novoPaciente]);
        setForm({
            nome: '',
            sexo: '',
            naturalidade: '',
            localNascimento: '',
            dataNascimento: '',
        });
    };
    const deletarPaciente = (id: string) => {
        setPacientes((prev) => prev.filter((p) => p.id !== id));
    };

    const navigation = useNavigation();

    const salvar = () => {
        // lógica de salvar o paciente aqui
        navigation.goBack(); // volta pra lista
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={styles.pacienteTitle}>Pacientes</Text>
            <Text style={styles.formLabel}>Novo Paciente</Text>
            <TextInput
                placeholder="Nome"
                value={form.nome}
                onChangeText={(text) => handleChange('nome', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Sexo"
                value={form.sexo}
                onChangeText={(text) => handleChange('sexo', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Naturalidade"
                value={form.naturalidade}
                onChangeText={(text) => handleChange('naturalidade', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Local de Nascimento"
                value={form.localNascimento}
                onChangeText={(text) => handleChange('localNascimento', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Data de Nascimento"
                value={form.dataNascimento}
                onChangeText={(text) => handleChange('dataNascimento', text)}
                style={styles.input}
            />
            <Button title="Salvar Paciente" onPress={salvar} />
            <ScrollView style={{ marginTop: 20 }}>
                {pacientes.map((paciente) => (
                    <View key={paciente.id}>
                        <PatientCard
                            nome={paciente.nome}
                            sexo={paciente.sexo}
                            naturalidade={paciente.naturalidade}
                            localNascimento={paciente.localNascimento}
                            dataNascimento={paciente.dataNascimento}
                        />
                        <Button title="Excluir" onPress={() => deletarPaciente(paciente.id)} />
                    </View>
                ))}
                <Goback></Goback>
            </ScrollView>
        </View>
    );
};

export default Pacientes;

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
    },
});

