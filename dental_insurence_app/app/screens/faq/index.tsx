import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';



const Faq = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.faqTitle}>FAQ - Perguntas Frequentes</Text>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.faqItem}>
                    <Text style={styles.question}>1. Como posso entrar em contato com o atendimento ao cliente?</Text>
                    <Text style={styles.answer}>
                        Atualmente, não oferecemos um canal de atendimento. A página de chat para atendimento prioritário
                        está em desenvolvimento e será disponibilizada em breve. Pedimos desculpas pela inconveniência e
                        agradecemos pela sua compreensão.
                    </Text>
                    <Text style={styles.answer}>
                        Para suporte urgente, você pode entrar em contato conosco pelo número 234-5678.
                    </Text>
                </View>



                <View style={styles.faqItem}>
                    <Text style={styles.question}>2. Onde posso ajustar minhas configurações de conta?</Text>
                    <Text style={styles.answer}>
                        A seção de Configurações está sendo aprimorada e, por enquanto, não está disponível. Estamos
                        trabalhando para implementá-la o mais rápido possível. Enquanto isso, se precisar de qualquer
                        ajuste na sua conta, entre em contato conosco através do número 234-5678.
                    </Text>
                </View>



                <View style={styles.faqItem}>
                    <Text style={styles.question}>3. Como posso criar uma conta no aplicativo?</Text>
                    <Text style={styles.answer}>
                        Para criar uma conta, basta clicar no botão "Cadastrar" localizado na página inicial e seguir
                        as instruções para preencher seus dados. Caso já tenha uma conta, utilize o botão "Entrar" para acessar.
                    </Text>
                </View>



                <View style={styles.faqItem}>
                    <Text style={styles.question}>4. O aplicativo está em manutenção?</Text>
                    <Text style={styles.answer}>
                        O site está em funcionamento, mas estamos implementando melhorias contínuas. Isso pode resultar
                        em algumas páginas ou recursos temporariamente indisponíveis. Estamos fazendo o nosso melhor para
                        garantir que a experiência do usuário seja a melhor possível.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};



export default Faq;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },
    faqTitle: {
        fontFamily: 'NotoSans_Condensed',
        fontSize: 24,
        color: '#0066FF',
        marginLeft: 20,
        marginBottom: 10,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    faqItem: {
        marginBottom: 24,
        padding: 16,
        backgroundColor: '#F9F9F9',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    question: {
        fontFamily: 'NotoSans_Regular',
        fontSize: 18,
        color: '#333333',
        marginBottom: 8,
        fontWeight: 'bold',
    },
    answer: {
        fontFamily: 'NotoSans_Regular',
        fontSize: 16,
        color: '#666666',
        lineHeight: 24,
    },
});
