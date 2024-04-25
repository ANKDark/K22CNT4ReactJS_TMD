import React, { Component } from "react";

class TMD_EvenForm1 extends Component {
  // Hàm xử lí sự kiện

  eventhandleClick1 = () => {
    alert("Event Handle 1");
  };
  eventhandleClick2 = () => {
    alert("Event Handle 2");
  };
  render() {
    return (
      <div className="alert alert-danger">
        <h2>Event handle</h2>
        {/* Gọi hàm xử lý sự kiện khi render */}
        <button onClick={this.eventhandleClick1()}>Click 1</button>
        {/* Gọi hàm xử lý khi click */}
        <button onClick={this.eventhandleClick2}>Click 2</button>
      </div>
    );
  }
}

export default TMD_EvenForm1;
