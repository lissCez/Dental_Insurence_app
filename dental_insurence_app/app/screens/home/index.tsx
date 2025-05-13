import React from "react";
import { Link } from 'expo-router';
import { Image, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import LinkCard from "@/components/linkCard";

const HomeScreen = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Painel da Clínica</Text>
        <Text style={styles.titulo2}>Acesso Rápido</Text>
        <Text>Gerencie sua clínica com facilidade através dessa ações rápidas</Text>
        <Image source={require('../../../assets/images/doutora.png')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '90%', height: 'auto', margin: 20, borderRadius: 12}}/>
        <ScrollView
            contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
                margin: 16
            }}>
            <LinkCard
                title="Entrar na Conta"
                description="Acesse sua conta para agendar, editar ou acompanhar suas consultas odontológicas."
                iconName="login"
            />
            <Link href="/screens/login" asChild>
                    <TouchableOpacity style={styles.link}>
                        <Text style={styles.linkTexto}>Acessar →</Text>
                    </TouchableOpacity>
            </Link>
            <LinkCard
                title="Lista de Pacientes"
                description="Veja e edite informações pessoais e o histórico do paciente."
                iconName="clipboard-list"
            />
            <Link href="/screens/paciente" asChild>
                    <TouchableOpacity style={styles.link}>
                        <Text style={styles.linkTexto}>Acessar →</Text>
                    </TouchableOpacity>
            </Link>
            <LinkCard
                title="Calendário de Consultas"
                description="Visualize suas consultas marcadas e navegue pelas datas disponíveis."
                iconName="calendar"
            />
            <Link href="/screens/calendario" asChild>
                    <TouchableOpacity style={styles.link}>
                        <Text style={styles.linkTexto}>Acessar →</Text>
                    </TouchableOpacity>
            </Link>
            <LinkCard
                title="Perfil do Dentista"
                description="Consulte os dados e especialidades do dentista responsável pelo atendimento."
                iconName="account-edit"
            />
            <Link href="/screens/dentista" asChild>
                    <TouchableOpacity style={styles.link}>
                        <Text style={styles.linkTexto}>Acessar →</Text>
                    </TouchableOpacity>
            </Link>
            <LinkCard
                title="Cadastrar novo Dentista"
                description="Adicione um novo profissional à plataforma com seus dados e especialidade."
                iconName="account-multiple-plus"
            />
            <Link href="/screens/cadastrar-dentista" asChild>
                    <TouchableOpacity style={styles.link}>
                        <Text style={styles.linkTexto}>Acessar →</Text>
                    </TouchableOpacity>
            </Link>
            <LinkCard
                title="Cadastrar Paciente"
                description="Registre um novo paciente com seus dados de contato e informações clínicas."
                iconName="account-multiple-plus-outline"
            />
            <Link href="/screens/cadastrar-paciente" asChild>
                    <TouchableOpacity style={styles.link}>
                        <Text style={styles.linkTexto}>Acessar →</Text>
                    </TouchableOpacity>
            </Link>
            <LinkCard
                title="Ver Consultas"
                description="Visualize, edite ou cancele consultas já agendadas."
                iconName="paperclip"
            />
            <Link href="/screens/agendamentos" asChild>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkTexto}>Acessar →</Text>
                </TouchableOpacity>
            </Link>
        </ScrollView>
    </ScrollView>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  titulo: {
    color: 'deepskyblue',
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center"
  },
  titulo2: {
    color: 'black',
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center"
  },
  link: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
    marginBottom: 10
  },
  linkTexto: {
    color: '#03a1fc',
    fontWeight: '600',
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    width: '80%'
  },
  botaoTexto: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  }
});
