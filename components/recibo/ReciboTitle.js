import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const stylesheet = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        marginTop: 24,
    },
    reportTitle:{
        color: '#61dafb',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});

const ReciboTitle = ({title}) => (
    <View style={stylesheet.titleContainer}>
        <Text style={stylesheet.reportTitle}>{title}</Text>
    </View>
);

export default ReciboTitle;