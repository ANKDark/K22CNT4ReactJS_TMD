import React, { Component } from "react";

class TmdProductAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            title: '',
            status: 0,
        }
    }
    tmdHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    //submit form
    tmdHandleSubmit = (ev) => {
        ev.preventDefault();

        this.props.onSubmit(this.state);
    }
  render() {
    return (
      <div>
        <h2>Thêm mới sản phẩm</h2>
        <form className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text" id="tmdid">
              ID
            </span>
            <input
              type="text"
              className="form-control"
              name="id"
              value={this.state.id}
              onChange={this.tmdHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="tmdtitle">
              Title
            </span>
            <input
              type="text"
              className="form-control"
              name="title"
              value={this.state.title}
              onChange={this.tmdHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="tmdstatus">
              Status
            </span>
            <input
              type="text"
              className="form-control"
              name="status"
              value={this.state.status}
              onChange={this.tmdHandleChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.tmdHandleSubmit}>Ghi lại</button>
        </form>
      </div>
    );
  }
}

export default TmdProductAdd;
