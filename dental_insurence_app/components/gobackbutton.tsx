import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Goback = ({ }) => {
    return (
        <View>
            <Link href="/screens/home" asChild>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkTexto}>⭠ Voltar</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

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

export default Goback;
