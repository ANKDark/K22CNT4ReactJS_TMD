import React, { Component } from "react";
import TMD_EvenForm1 from "./components/TMD_EvenForm1";
import TMD_EventForm2 from "./components/TMD_EventForm2";
import TMD_EventForm3 from "./components/TMD_EventForm3";
import TMD_EventForm4 from "./components/TMD_EventForm4";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Event Form Demo</h1>
        <TMD_EvenForm1 />
        <TMD_EventForm2 />
        <TMD_EventForm3 />
        <TMD_EventForm4 name="Trần Minh Đức" />
      </div>
    );
  }
}

export default App;
