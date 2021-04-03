import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import Para from './Para';
import ReciboTitle from './ReciboTitle';
import ReciboNumber from './ReciboNumber';
//
//
//

const stylesheet = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }
});

const Recibo = ({recibo}) => (
    <Document>
        <Page size="A4" style={stylesheet.page}>
        <ReciboTitle title='Título' />
        <ReciboNumber recibo={recibo}/>
        <Para recibo={recibo}/>
        <ReciboItems recibo={recibo}/>
        </Page>
    </Document>
    
);

export default Recibo;