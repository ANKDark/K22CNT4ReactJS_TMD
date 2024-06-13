import React from "react";
export default function TmdStudentList({ renderTmdStudentList, tmdHandleEdit }) {
  let tmdElement = renderTmdStudentList.map((tmdStudent, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{tmdStudent.tmdId}</td>
        <td>{tmdStudent.tmdName}</td>
        <td>{tmdStudent.tmdPhone}</td>
        <td>{tmdStudent.tmdEmail}</td>
        <td>{tmdStudent.tmdCreatedAt}</td>
        <td>{tmdStudent.tmdStatus ? "Hoạt động" : "Không hoạt động"}</td>
        <td>
          <button type="button" class="btn btn-info" onClick={() => tmdHandleEdit(tmdStudent.tmdId)}>
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button type="button" class="btn btn-danger">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Mã sinh viên</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Tuổi</th>
            <th scope="col">Điện thoại</th>
            <th scope="col">Email</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody>{tmdElement}</tbody>
      </table>
    </div>
  );
}
