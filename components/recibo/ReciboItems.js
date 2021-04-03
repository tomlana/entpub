import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import ReciboHeader from './ReciboHeader';
import ReciboRow from './ReciboRow';
import ReciboBlank from './ReciboBlank';

const contadorRowsTabela = 5;

const stylesheet = StyleSheet.create({
    tabelaContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
});

const ReciboItems = ({recibo}) => (
        <View style={stylesheet.tabelaContainer}>
            <ReciboHeader />
            <ReciboRow items={recibo.items} />
            <ReciboBlank rowsCount={ contadorRowsTabela - recibo.items.length } />
        </View>
);

export default ReciboItems;