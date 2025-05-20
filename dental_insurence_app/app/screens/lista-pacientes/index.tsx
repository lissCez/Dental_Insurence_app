import Goback from '@/components/gobackbutton';
import PatientCard from '@/components/patientCard';
import { fetchPatients } from '@/src/services/patientsService';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

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
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchPatients();
            } catch (error) {
                console.error("Erro ao buscar pacientes", error);
            }
        };
        getData();
    }, []);
    const deletarPaciente = (id: string) => {
        setPacientes(prev => prev.filter(p => p.id !== id));
    };

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.pacienteTitle}>Pacientes</Text>
            <ScrollView>
                {pacientes.map((p) => (
                    <PatientCard
                        key={p.id}
                        nome={p.nome}
                        sexo={p.sexo}
                        naturalidade={p.naturalidade}
                        localNascimento={p.localNascimento}
                        dataNascimento={p.dataNascimento}
                    />
                ))}
                <Goback />
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
    }
});

