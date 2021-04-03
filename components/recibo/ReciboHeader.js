import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const corBorder = '#90e5fc';
const stylesheet = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 28,
        textAlign: 'center',
        fontStyle: 'bold',
        flexgrow: 1,
    },
    nome_pub: {
        width: '30%',
        borderRightColor: corBorder,
        borderRightWidth: 1,
    },
    exemplar_pub: {
        width: '30%',
        borderRightColor: corBorder,
        borderRightWidth: 1,
    },
    quant_recibo: {
        width: '10%',
        borderRightColor: corBorder,
        borderRightWidth: 1,
    },
    ent_por: {
        width: '30%'
    },
});

const ReciboHeader = () => (
    <View style={stylesheet.container}>
        <Text style={stylesheet.nome_pub}>Publicação</Text>
        <Text style={stylesheet.exemplar_pub}>Exemplar</Text>
        <Text style={stylesheet.quant_recibo}>Qtd</Text>
        <Text style={stylesheet.ent_por}>Por</Text>
    </View>
);

export default ReciboHeader;