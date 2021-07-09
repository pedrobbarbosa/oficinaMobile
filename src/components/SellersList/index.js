import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Modal, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

const moneyModal = require("../../assets/moneyModal.png");




export function SellersList({ setProposals, proposals, loading, setLoading }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalShow, setModalShow] = useState({});

    function handleModal(item) {
        setModalVisible(!modalVisible)
        setModalShow(item)
    }

    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => handleModal(item)}
                >
                    <View style={styles.itemContainer}>
                        <Text style={styles.title}>{item.seller}</Text>
                        <View style={styles.listView}>
                            <Text style={styles.description}>
                                {item.description.length >= 35 ? `${item.description.substring(0, 20)}...` : item.description}
                                {'\n'}
                            </Text>
                            <Text style={styles.value}> + {item.value}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    };
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image style={styles.modalMoneyImage} source={moneyModal} />
                        <Text style={styles.modalText}>
                            {modalShow.seller} vendeu {modalShow.description} para {modalShow.customer}
                            { }no valor de {modalShow.value}
                        </Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Fechar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>


            {loading ? <ActivityIndicator
                size="large"
                color="#8FDDE7"
                style={styles.loading} /> :
                < FlatList
                    data={proposals}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%'
    },
    itemContainer: {
        borderBottomColor: '#FBE5C8',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        color: '#ACA6A3'
    },
    value: {
        color: '#118C4F'
    },
    listView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    centeredView: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // marginTop: 22
    },
    modalMoneyImage: {
        width: 150,
        height: 149,
        marginBottom: 20
    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        padding: 10,
    },
    buttonOpen: {
    },
    buttonClose: {
        backgroundColor: "#8FDDE7",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    loading: {
        alignSelf: 'center',
        marginVertical: 20,
    }
})