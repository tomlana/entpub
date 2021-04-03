import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';


const stylesheet = StyleSheet.create({
    headerContainer: {
        marginTop: 36
    },
    Para: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
});

const Para = ({recibo}) =>Para(
    <View style={stylesheet.headerContainer}>
        <Text style={stylesheet.Para}>Entrega para:</Text>
        <Text>{recibo.nome_irm}</Text>
        <Text>{recibo.end_irm}</Text>
        <Text>{recibo.tel_irm}</Text>
        <Text>{recibo.data_recibo}</Text>
    </View>
);

export default Para;