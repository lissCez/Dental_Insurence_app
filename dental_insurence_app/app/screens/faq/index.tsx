import React from "react";

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Link } from "expo-router";

const Faq = () => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>FAQ - Perguntas Frequentes</Text>
            <Text style={styles.subtitulo}>Dúvidas comuns para facilitar seu uso</Text>

            <View style={styles.faqItem}>
                <Text style={styles.question}>1. Como posso entrar em contato com o atendimento ao cliente?</Text>
                <Text style={styles.answer}>
                    Atualmente, não oferecemos um canal de atendimento. A página de chat para atendimento prioritário está em
                    desenvolvimento e será disponibilizada em breve. Pedimos desculpas pela inconveniência e agradecemos pela sua
                    compreensão.
                </Text>
                <Text style={styles.answer}>Para suporte urgente, você pode entrar em contato conosco pelo número 234-5678.</Text>
            </View>

            <View style={styles.faqItem}>
                <Text style={styles.question}>2. Onde posso ajustar minhas configurações de conta?</Text>
                <Text style={styles.answer}>
                    A seção de Configurações está sendo aprimorada e, por enquanto, não está disponível. Estamos trabalhando para
                    implementá-la o mais rápido possível. Enquanto isso, se precisar de qualquer ajuste na sua conta, entre em
                    contato conosco através do número 234-5678.
                </Text>
            </View>

            <View style={styles.faqItem}>
                <Text style={styles.question}>3. Como posso criar uma conta no aplicativo?</Text>
                <Text style={styles.answer}>
                    Para criar uma conta, basta clicar no botão "Cadastrar" localizado na página inicial e seguir as instruções
                    para preencher seus dados. Caso já tenha uma conta, utilize o botão "Entrar" para acessar.
                </Text>
            </View>

            <View style={styles.faqItem}>
                <Text style={styles.question}>4. O aplicativo está em manutenção?</Text>
                <Text style={styles.answer}>
                    O site está em funcionamento, mas estamos implementando melhorias contínuas. Isso pode resultar em algumas
                    páginas ou recursos temporariamente indisponíveis. Estamos fazendo o nosso melhor para garantir que a experiência
                    do usuário seja a melhor possível.
                </Text>
            </View>

            <Link href="/" asChild>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkTexto}>← Voltar para Home</Text>
                </TouchableOpacity>
            </Link>
        </ScrollView>
    );
};

export default Faq;

const styles = StyleSheet.create({

    container: {
        padding: 24,
        backgroundColor: "#fff",
        flexGrow: 1,
        alignItems: "center",
    },

    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "deepskyblue",
        marginBottom: 8,
        textAlign: "center",
    },

    subtitulo: {
        fontSize: 16,
        color: "#333",
        marginBottom: 20,
        textAlign: "center",
    },

    faqItem: {
        backgroundColor: "#f9f9f9",
        borderRadius: 12,
        padding: 16,
        width: "100%",
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },

    question: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 8,
        color: "#333",
    },

    answer: {
        fontSize: 16,
        color: "#666",
        lineHeight: 22,
    },

    link: {
        marginTop: 24,
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#03a1fc",
        width: "60%",
        alignItems: "center",
    },

    linkTexto: {
        color: "#03a1fc",
        fontWeight: "600",
        fontSize: 16,

    },

});

