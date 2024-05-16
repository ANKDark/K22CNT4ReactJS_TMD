import React, { Component } from 'react';
import TMDListProducts from './components/TMDListProducts';
import TMDProductAdd from './components/TMDProductAdd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tmd_Products: [
        {
          tmd_productid: "2210900014",
          tmd_productName: "Trần Minh Đức",
          tmd_quantity: 1,
          tmd_price: 10000000000000
        },
        {
          tmd_productid: "P002",
          tmd_productName: "IPhone 12",
          tmd_quantity: 20,
          tmd_price: 1250
        },
        {
          tmd_productid: "P003",
          tmd_productName: "IPhone 13",
          tmd_quantity: 10,
          tmd_price: 1500
        }
      ]
    };
  }
  TmdHandleSubmit = (param) => {
    console.log("App: ", param);
    let {tmd_Products} = this.state;
    tmd_Products.push(param);
    this.setState({
      tmd_Products:tmd_Products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Trần Minh Đức - 2210900014</h1>
        <hr/>
        <TMDListProducts RenderProducts={this.state.tmd_Products}/>
        <TMDProductAdd onSubmit = {this.TmdHandleSubmit}/>
        <hr/>
      </div>
    );
  }
}

export default App;