import React, { Component } from 'react';
import TmdProductList from './components/TmdProductList';
import TmdProductAdd from './components/TmdProductAdd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
      { title: 'Trần Minh Đức', id: 2210900014, status: 1 },
      { title: 'Cabbage', id: 1, status: 1  },
      { title: 'Garlic', id: 2, status: 0 },
      { title: 'Apple', id: 3, status: 0 },
      ]
    }
  } 
  TmdHandleSubmit = (param) => {
    console.log("App: ", param);
    //Thêm vào mảng dữ liệu products
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Trần Minh Đức -Render Data - Event Form</h1>
        <hr/>
        <TmdProductList RenderProducts={this.state.products}/>
        <hr/>
        <TmdProductAdd onSubmit = {this.TmdHandleSubmit}/>
      </div>
    );
  }
}

export default App;
