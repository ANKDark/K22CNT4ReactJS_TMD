import React, { Component } from "react";

class TMD_EventForm4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ANK Dark",
    };
  }

  HandleGetName = () => {
    alert(this.props.name);
    this.setState({
      name: this.props.name,
    });
  };

  render() {
    return (
      <div className="alert alert-info">
        <h2>Lấy dữ liệu từ props</h2>
        <button onClick={this.HandleGetName}>Get Name</button>
        <h2>Welcome to, {this.state.name}</h2>
      </div>
    );
  }
}

export default TMD_EventForm4;
