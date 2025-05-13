import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from 'expo-router';

const AgendamentoConsulta = () => {
    const router = useRouter();

    const [paciente, setPaciente] = useState("");
    const [dentista, setDentista] = useState("");
    const [procedimento, setProcedimento] = useState("");
    const [data, setData] = useState(new Date());
    const [mostrarData, setMostrarData] = useState(false);

    const agendarConsulta = () => {
        if (!paciente || !dentista || !procedimento) {
            Alert.alert("Preencha todos os campos!");
            return;
        }

        Alert.alert("Consulta agendada com sucesso!");
        router.push("./calendario");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Agendamento de Consulta</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do Paciente"
                value={paciente}
                onChangeText={setPaciente}
            />

            <TextInput
                style={styles.input}
                placeholder="Nome do Dentista"
                value={dentista}
                onChangeText={setDentista}
            />

            <TextInput
                style={styles.input}
                placeholder="Tipo de Procedimento"
                value={procedimento}
                onChangeText={setProcedimento}
            />

            <View style={styles.dataHora}>
                <Text style={styles.label}>Data da Consulta:</Text>
                <Button title={data.toLocaleString()} onPress={() => setMostrarData(true)} />
                {mostrarData && (
                    <DateTimePicker
                        value={data}
                        mode="datetime"
                        display="default"
                        onChange={(event, selectedDate) => {
                            setMostrarData(false);
                            if (selectedDate) setData(selectedDate);
                        }}
                    />
                )}
            </View>

            <Button title="Agendar" onPress={agendarConsulta} color="#007AFF" />
            <Link href="/screens/home" asChild>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkTexto}>⭠ Voltar</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

export default AgendamentoConsulta;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: "#fff"
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 24,
        textAlign: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 12,
        marginBottom: 16
    },
    dataHora: {
        marginBottom: 20
    },
    label: {
        fontSize: 16,
        marginBottom: 8
    },
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