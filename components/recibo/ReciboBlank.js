import React, {Fragment} from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const corBorder = '#90e5fc';
const stylesheet = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 28,
        fontStyle: 'bold',
        color: 'white'
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
        width: '30%',
    },
});

const ReciboBlank = ({rowsCount}) => {
    const blankRows = Array(rowsCount).fill(0);
    const rows = blankRows.map( (x,i) => 
        <View style={stylesheet.row} key={`BR${i}`}>
            <Text style={stylesheet.nome_pub}>_</Text>
            <Text style={stylesheet.exemplar_pub}>_</Text>
            <Text style={stylesheet.quant_recibo}>_</Text>
            <Text style={stylesheet.ent_por}>_</Text>
        </View>
        )
        return (<Fragment>{rows}</Fragment>)
};

export default ReciboBlank;