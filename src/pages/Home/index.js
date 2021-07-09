import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { SellersList } from "../../components/SellersList";

import { api } from '../../services/api';

export function Home() {
    const [proposals, setProposals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            const response = await api.get();
            setProposals(...proposals, response.data);
            setLoading(!loading);
        }
        loadData();
    }, []);


    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.card}>
                <Card proposals={proposals} />
                <Text>{'\n'}</Text>
            </View>

            <View style={styles.containerListHeader}>
                <Text style={styles.activityText}> Atividades</Text>
                <TouchableOpacity style={styles.listButton}>
                    <Text style={styles.textButton}>Ver tudo</Text>
                </TouchableOpacity>
            </View>

            <SellersList
                setProposals={setProposals}
                proposals={proposals}
                loading={loading}
                setLoading={setLoading} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        fontFamily: ''
    },
    card: {
        alignItems: 'center'
    },
    activityText: {
        fontSize: 26,
        marginBottom: 10
    },
    containerListHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listButton: {
        padding: 5,
        margin: 5,
    },
    textButton: {
        alignItems: 'center',
        alignContent: 'center',
        color: '#75E6DA',
    }
})