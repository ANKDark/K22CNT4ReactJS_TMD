import React, { useState } from 'react';

export default function TmdProductAddOrEdit({ tmdOnSubmit }) {
  const [tmd_productid, settmd_productid] = useState('');
  const [tmd_productName, settmd_productName] = useState('');
  const [tmd_quantity, settmd_quantity] = useState(0);
  const [tmd_price, settmd_price] = useState(0);

  const tmdHandleSubmit = (tmdEvent) => {
    tmdEvent.preventDefault();
    let tmdProduct = {
      tmd_productid: tmd_productid,
      tmd_productName: tmd_productName,
      tmd_quantity: tmd_quantity,
      tmd_price: tmd_price,
    };
    tmdOnSubmit(tmdProduct);
  };

  return (
    <div className='col-md-6'>
      <h2>Thêm mới sản phẩm / Sửa đổi</h2>
      <hr />
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Mã sản phẩm</span>
          <input
            type="text"
            className="form-control"
            placeholder="Mã sản phẩm"
            name='tmd_productid'
            value={tmd_productid}
            onChange={(ev) => settmd_productid(ev.target.value)}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">Tên sản phẩm</span>
          <input
            type="text"
            className="form-control"
            placeholder="Tên sản phẩm"
            name='tmd_productName'
            value={tmd_productName}
            onChange={(ev) => settmd_productName(ev.target.value)}
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">Số lượng sản phẩm</span>
          <input
            type="number"
            className="form-control"
            placeholder="Số lượng sản phẩm"
            name='tmd_quantity'
            value={tmd_quantity}
            onChange={(ev) => settmd_quantity(ev.target.value)}
            aria-describedby="basic-addon3"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon4">Đơn giá</span>
          <input
            type="number"
            className="form-control"
            placeholder="Đơn giá"
            name='tmd_price'
            value={tmd_price}
            onChange={(ev) => settmd_price(ev.target.value)}
            aria-describedby="basic-addon4"
          />
        </div>
        <button className='btn btn-primary' name='tmdBtnAction' onClick={tmdHandleSubmit}>Thêm mới</button>
      </form>
    </div>
  );
}
