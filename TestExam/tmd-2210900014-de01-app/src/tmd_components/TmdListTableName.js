import React from "react";

export default function TmdListTableName({ renderTmdListTableName, onTmdDelete, onTmdEdit }) {
  const tmdElementTableName = renderTmdListTableName.map(
    (tmdItem, tmdIndex) => {
      return (
        <tr>
          <td>{tmdItem.tmdId}</td>
          <td>{tmdItem.tmdTbName}</td>
          <td>{tmdItem.tmdTbEmail}</td>
          <td>{tmdItem.tmdTbPhone}</td>
          <td>{tmdItem.tmdTbStatus?"Active":"NonActive"}</td>
          <td>
            <button className="btn btn-success m-2" onClick={()=> tmdHandleEdit(tmdItem)}>tmd-edit</button>
            <button className="btn btn-danger" onClick={() => tmdHandleDelete(tmdItem.tmdId)}>tmd-delete</button>
          </td>
        </tr>
      );
    }
  );
// Sự kiện xóa
const tmdHandleDelete = (tmdId) => {
    if(window.confirm('Bạn có muốn xóa dữ liệu có tmdId= ' + tmdId)) {
        onTmdDelete(tmdId);
    }
}
const tmdHandleEdit = (tmdObjTableName) => {
    onTmdEdit(tmdObjTableName);
}
  return (
    <div className="">
      <h2>Danh sách thông tin</h2>
      <hr />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Tmd Id</th>
            <th>Tmd Name</th>
            <th>Tmd Email</th>
            <th>Tmd Phone</th>
            <th>Tmd Status</th>
            <th>TMD chức năng</th>
          </tr>
        </thead>
        <tbody>
            {tmdElementTableName}
        </tbody>
      </table>
    </div>
  );
}
