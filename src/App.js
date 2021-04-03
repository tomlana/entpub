import React, { Component, Fragment } from 'react';
import './App.css';
import {PDFViewer} from '@react-pdf/renderer';
import Recibo from './components/recibo/Recibo';

class App extends Component() {
  render(){
  return (
    <Fragment>
      <PDFViewer width="1000" height="600" className="app">
        <Recibo />
      </PDFViewer>
    </Fragment>
  );
  }
}

export default App;
