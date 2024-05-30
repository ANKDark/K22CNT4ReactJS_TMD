import React from 'react'

export default function TmdListProduct({renderTmdProducts}) {
    console.log("List produt: ", renderTmdProducts);
    let tmdtong = 0;
    let tmdElemetProduct = renderTmdProducts.map((TmdProduct, index) => {
        tmdtong += TmdProduct.tmd_quantity * TmdProduct.tmd_price;
        return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{TmdProduct.tmd_productid}</td>
                    <td>{TmdProduct.tmd_productName}</td>
                    <td>{TmdProduct.tmd_quantity}</td>
                    <td>{TmdProduct.tmd_price}</td>
                    <td>{TmdProduct.tmd_quantity * TmdProduct.tmd_price}</td>
                    <td>
                        <button className='btn btn-success mx-1'><i class="fa-solid fa-pen-to-square"></i></button>
                        <button className='btn btn-danger mx-1'><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
        )
    })
  return (
    <div>
        <h2>Danh sách sản phẩm</h2>
        <table className='table table-bodered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {tmdElemetProduct}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={5} className='text-end'>Tổng cộng: </th>
                    <th className='text-start' colSpan={2}>{tmdtong}</th>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}
