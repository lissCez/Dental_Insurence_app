import Goback from '@/components/gobackbutton';
import PatientCard from '@/components/patientCard';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';


interface Patient {
    id: string;
    nome: string
    sexo: string;
    naturalidade: string;
    localNascimento: string;
    dataNascimento: string;
}

const Pacientes = () => {
    const [pacientes, setPacientes] = useState<Patient[]>([
        {
            id: '1',
            nome: 'João da Silva',
            sexo: 'Masculino',
            naturalidade: 'Brasileiro',
            localNascimento: 'São Paulo, SP',
            dataNascimento: '10/05/1990',
        },
    ]);

    // CREATE

    const adicionarPaciente = () => {
        const novoPaciente: Patient = {
            id: Math.random().toString(),
            nome: 'Novo Paciente',
            sexo: 'Feminino',
            naturalidade: 'Brasileira',
            localNascimento: 'Rio de Janeiro, RJ',
            dataNascimento: '01/01/2000',
        };
        setPacientes(prev => [...prev, novoPaciente]);
    };

    // DELETE
    const deletarPaciente = (id: string) => {
        setPacientes(prev => prev.filter(p => p.id !== id));
    };

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.pacienteTitle}>Pacientes</Text>
            <Button title="Adicionar Paciente" onPress={adicionarPaciente} />
            <ScrollView>
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
        marginLeft: 38,
        marginBottom: 10,
    },

});

