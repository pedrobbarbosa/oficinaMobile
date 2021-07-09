import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Card({ proposals }) {
    const [proposalAmount, setProposalAmount] = useState(0);

    useEffect(() => {
        setProposalAmount(get_balance(proposals))
    }, [proposals]);

    function get_balance(proposals) {
        return proposals.reduce((acc, cur) => { return acc + parseInt(cur.value.substring(2,)) }, 0)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {"\n"}
                Valor total
                {"\n"}
            </Text>
            <Text style={styles.subtitle}>$ {proposalAmount} {"\n"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8FDDE7',
        borderRadius: 50,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
    },
    subtitle: {
        color: '#fff',
        fontSize: 42
    },
})