import React, { Component } from "react";

export default class TMD_ClassComp extends Component {
  constructor(props) {
    super(props);
    //Tạo đối tượng dữ liệu
    this.state = {
      firstName: "Trần",
      lastName: "Đức",
      userName: "K22CNT4",
    };
  }

  //Arrow Function
  Member = (props) => {
    return (
      <div className="alert alert-sucsess">
        <h3>
          Xin chào: {props.fullName} - Bạn đã.. {props.age}
        </h3>
      </div>
    );
  };

  ListMember = () => {
    return (
      <>
        <this.Member fullName="Trần Đức đẹp troai" age="19" />
        <this.Member fullName="Trần Đức đẹp troai" age="19" />
        <this.Member fullName="Trần Đức đẹp troai" age="19" />
      </>
    );
  };
  render() {
    return (
      <div className="alert alert-danger">
        <h2>Class Components Demo</h2>
        <hr />
        <h3>Dữu liệu trong state</h3>
        <h4>
          Xin chào: {this.state.firstName} {this.state.lastName}
        </h4>
        <hr />
        <h3>Dữ liệu từ props</h3>
        <p> Company: {this.props.company}</p>
        <p>Course: {this.props.course}</p>
        <hr />
        <this.Member fullName="Trần Minh Đức" age="19" />
        <hr />
        {/* {this.ListMember} */}
        <this.ListMember />
      </div>
    );
  }
}
