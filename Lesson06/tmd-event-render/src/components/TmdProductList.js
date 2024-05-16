import React, { Component } from "react";

class TmdProductList extends Component {
  render() {
    let { RenderProducts } = this.props;
    let fnStatus = (param) => {
        if(param === 1) {
            return "Active";
        }else {
            return "NonActive";
        }
    }
    console.log("Products: ", RenderProducts);
    const elementProduct = RenderProducts.map((item, index) => (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        {/* <td>{item.status === 1?'Active' : 'NonActive'}</td> */}
        <td>
            {fnStatus(item.status)}
        </td>
      </tr>
    ));
    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {elementProduct}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TmdProductList;
