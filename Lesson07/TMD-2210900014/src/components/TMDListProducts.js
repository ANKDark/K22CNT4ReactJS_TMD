import React, { Component } from 'react';

class TMDListProducts extends Component {
    render() {
        let { RenderProducts } = this.props;
        const elementProduct_tmd_2210900014 = RenderProducts.map((item, index) => (
            <tr key={index}>
              <td>{item.tmd_productid}</td>
              <td>{item.tmd_productName}</td>
              <td>{item.tmd_quantity}</td>
              <td>{item.tmd_price}</td>
            </tr>
          ));
          return (
            <div>
              <h2>Danh sách sản phẩm- Trần Minh Đức- 2210900014</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {elementProduct_tmd_2210900014}
                </tbody>
              </table>
            </div>
          );
    }
}

export default TMDListProducts;