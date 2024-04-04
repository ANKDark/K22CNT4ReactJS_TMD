import React, { Component } from "react";

export default class Class_TranMinhDuc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Tran Minh Duc",
      class: "K22CNT4",
    };
  }
  users = {
    name: "Tran Minh Duc",
    age: 20,
  };
  // Ham xu ly su kien
  handleChange = (event) => {
    this.setState({
      fullName: "Duc Dep Trai",
    });
  };
  render() {
    return (
      <div>
        <h2>Class component Demo</h2>
        {this.users.name} - {this.users.age}
        <hr />
        <h3>info: {this.props.info}</h3>
        <h3>Time: {this.props.time}</h3>
        <hr />
        <h3>
          State: fullName: {this.state.fullName}
          Class: {this.state.class}
        </h3>
        <button onClick={this.handleChange}>Change Name</button>
      </div>
    );
  }
}
