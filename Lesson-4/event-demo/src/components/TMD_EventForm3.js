import React, { Component } from "react";
// Xử lí sự kiện với props, state
class TMD_EventForm3 extends Component {
  constructor(props) {
    super(props);
    //Tạo đối tượng qua state
    this.state = {
      name: "Trần Minh Đức",
      job: "CEO microsoft",
    };
  }
  //Hàm xử lí sự kiện
  handleChangeName = () => {
    this.setState({
      name: "Đức đẹp trai",
    });
  };
  handleChangeJob = () => {
    this.setState({
      job: "Tổng thống Mỹ",
    });
  };
  render() {
    return (
      <div className="alert alert-primary">
        <h2>Thay đổi dữ liệu trong state</h2>
        <p>
          Dữ liệu: {this.state.name} - {this.state.job}
        </p>
        <button onClick={this.handleChangeName}>Thay đổi name</button>
        <button onClick={this.handleChangeJob}>Thay đổi job</button>
      </div>
    );
  }
}

export default TMD_EventForm3;
