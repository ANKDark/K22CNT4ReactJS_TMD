import React, { Component } from 'react';

class TMDProductAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tmd_productid: 0,
            tmd_productName: '',
            tmd_quantity: 0,
            tmd_price: 0,
        };
    }

    tmdHandleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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
                <form className="col-md-6" onSubmit={this.tmdHandleSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="tmd_productid">
                            Product ID
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            name="tmd_productid"
                            value={this.state.tmd_productid}
                            onChange={this.tmdHandleChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="tmd_productName">
                            Product Name
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            name="tmd_productName"
                            value={this.state.tmd_productName}
                            onChange={this.tmdHandleChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="tmd_quantity">
                            Quantity
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            name="tmd_quantity"
                            value={this.state.tmd_quantity}
                            onChange={this.tmdHandleChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="tmd_price">
                            Price
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            name="tmd_price"
                            value={this.state.tmd_price}
                            onChange={this.tmdHandleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Ghi lại
                    </button>
                </form>
            </div>
        );
    }
}

export default TMDProductAdd;
