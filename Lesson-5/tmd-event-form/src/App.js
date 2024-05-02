import React, { Component } from 'react';
import TMD_Form1 from './components/TMD_Form1';
import TMDForm2 from './components/TMDForm2';
import TMDForm3 from './components/TMDForm3';

class App extends Component {
  TMDSubmit = (param) => {
    console.log("App:", param)
  }
  render() {
    return (
      <div>
        <h1>Controlled Component ReactJS Form</h1>
        <TMD_Form1 />
        <br />
        <TMDForm2 />
        <br />
        <TMDForm3 onSubmit={this.TMDSubmit} />
      </div>
    );
  }
}

export default App;