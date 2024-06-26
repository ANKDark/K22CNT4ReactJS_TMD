import React from "react";

export default function TmdCategoryList({
  renderTmdCategories,
  onAddNew,
  onTmdDelete,
  onTmdEdit,
}) {
  // console.log("DataCate: ", renderTmdCategories);
  let tmdCategoryElement = renderTmdCategories.map((tmdCategory, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{tmdCategory.tmdId}</td>
        <td>{tmdCategory.tmdCategoryName}</td>
        <td>
          {tmdCategory.tmdCategoryStatus === true ? "Hiển thị" : "Tạm khóa"}
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => tmdHandleDelete(tmdCategory.tmdId)}
          >
            Delete
          </button>
          <button
            className="btn btn-success"
            onClick={() => tmdHandleEdit(tmdCategory)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });
  const tmdHandleAdd = () => {
    onAddNew(true);
  };
  // Hàm xử lý sự kiện xóa
  const tmdHandleDelete = (tmdId) => {
    if (
      window.confirm(
        "Bạn có thực sự muốn xóa category có mã " + tmdId + " không?"
      )
    ) {
      onTmdDelete(tmdId);
    } else {
    }
  };
  // hàm xử lý sự kiện edit
  const tmdHandleEdit = (tmdCategory) => {
    onTmdEdit(tmdCategory);
  };
  return (
    <div className="container m-2">
      <h2>DANH SÁCH LOẠI SẢN PHẨM</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã loại</th>
            <th>Tên loại</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>{tmdCategoryElement}</tbody>
      </table>
      <button className="btn btn-primary" onClick={tmdHandleAdd}>
        Thêm mới
      </button>
    </div>
  );
}
