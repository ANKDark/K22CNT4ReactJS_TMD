import React from 'react'

export default function TmdUserList({renderTmdUser}) {
  let tmdUserElement = renderTmdUser.map((tmdUser, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{tmdUser.id}</td>
        <td>{tmdUser.UserName}</td>
        <td>{tmdUser.Password}</td>
        <td>{tmdUser.Email}</td>
        <td>{tmdUser.Phone}</td>
        <td>Edit | Del</td>
        <td>
          
        </td>
      </tr>
    );
  });
  return (
    <div className="container m-2">
      <h2>DANH SÁCH USER</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {tmdUserElement}
        </tbody>
      </table>
      <button className="btn btn-primary">
        Thêm mới
      </button>
    </div>
  );
}
