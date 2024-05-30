import { useState } from 'react';
import './App.css';
import TmdListProduct from './components/TmdListProduct';
import TmdProductAddOrEdit from './components/TmdProductAddOrEdit';

function TmdApp() {
  const tmd_Products = [
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
  ];

  const [TMDListProducts, setTMDListProducts] = useState(tmd_Products);

  const tmdHandleSubmit = (tmdProduct) => {
    console.log("Add", tmdProduct);
    setTMDListProducts((tmdPrev) => {
      return [
        ...tmdPrev,
        tmdProduct
      ];
    });
  };

  return (
    <div className='container border mt-5 p-3'>
      <h1 className='text-center my-3'>Xử lý chức năng CRUD - HOOK</h1>
      <hr/>
      <TmdListProduct renderTmdProducts={TMDListProducts} />
      <TmdProductAddOrEdit tmdOnSubmit={tmdHandleSubmit} />
    </div>
  );
}

export default TmdApp;
