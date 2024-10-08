import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Home({ saldo }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Saldo Atual da Conta</Text>
            <Text style={styles.value}>R$ {saldo.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logo: {
        transform: [{ scale: 0.4 }],
    },
    title: {
        color: '#a3a3a3',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 18
    },
    value: {
        color: '#000',
        letterSpacing: 2,
        fontSize: 50,
        fontWeight: 'bold',
    },
});