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
    },
    nome_pub: {
        width: '30%',
        textAlign: 'left',
        borderRightColor: corBorder,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    exemplar_pub: {
        width: '30%',
        textAlign: 'right',
        borderRightColor: corBorder,
        borderRightWidth: 1,
        paddingRight: 8,
    },
    quant_recibo: {
        width: '10%',
        textAlign: 'right',
        borderRightColor: corBorder,
        borderRightWidth: 1,
        paddingRight: 8,
    },
    ent_por: {
        width: '30%',
        textAlign: 'right',
        paddingRight: 8,
    },
});

const ReciboRow = ({items}) => {
    const rows = items.map( item => 
        <View style={stylesheet.row} key={item.sno.toString()}>
            <Text style={stylesheet.nome_pub}>{item.nome_pub}</Text>
            <Text style={stylesheet.exemplar_pub}>{item.exemplar_pub}</Text>
            <Text style={stylesheet.quant_recibo}>{item.quant_recibo}</Text>
            <Text style={stylesheet.ent_por}>{item.ent_por}</Text>
        </View>
        )
        return (<Fragment>{rows}</Fragment>)
};

export default ReciboRow;