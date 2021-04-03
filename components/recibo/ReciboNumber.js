import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const stylesheet = StyleSheet.create({
    reciboNumberContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    reciboFont: {
        fontSize: 12,
        fontSyle: 'bold'
    },
    label: {
        width: 60
    }
});

const ReciboNumber = ({recibo}) => (
    <Fragment>
        <View style={stylesheet.reciboNumberContainer}>
            <Text style={stylesheet.label}>Número da entrega:</Text>
            <Text style={stylesheet.reciboFont}>{recibo.recibo_number}</Text>
        </View>
    </Fragment>
);

export default ReciboNumber;