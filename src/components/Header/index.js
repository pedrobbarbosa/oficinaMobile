import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

var profileUser = require('../../assets/profileUser.jpg');

export function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Text style={styles.subtitle}>
                    1 jul, Quinta
                    {'\n'}
                    <Text style={styles.title}>Olá, Pedro</Text>
                </Text>
                <Image style={styles.image} source={profileUser} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        margin: 15,
    },
    image: {
        borderRadius: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        fontSize: 16,
        color: '#ACA6A3'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})