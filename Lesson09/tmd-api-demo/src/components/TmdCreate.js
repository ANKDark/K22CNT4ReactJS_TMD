import React, { useState } from 'react';
import axios from 'axios';

export default function TmdCreate() {
  const [tmdId, settmdId] = useState('');
  const [tmdName, settmdName] = useState('');
  const [tmdPhone, settmdPhone] = useState('');
  const [tmdEmail, settmdEmail] = useState('');
  const [tmdCreatedAt, settmdCreatedAt] = useState('');
  const [tmdStatus, settmdStatus] = useState('');
  const [tmdStudentList, setTmdStudentList] = useState([]);

  // Handle form submission
  const tmdHandleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newStudent = {
        tmdId,
        tmdName,
        tmdPhone,
        tmdEmail,
        tmdCreatedAt,
        tmdStatus
      };
      const response = await axios.post("https://666a98af7013419182cff882.mockapi.io/api/tmdv1/tmdStudent", newStudent);
      setTmdStudentList([...tmdStudentList, response.data]);
      window.location.reload();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div className='col-md-6'>
      <h2>Thêm mới sinh viên</h2>
      <hr />
      <form onSubmit={tmdHandleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Mã sinh viên</span>
          <input
            type="text"
            className="form-control"
            placeholder="Mã sinh viên"
            name='tmdId'
            value={tmdId}
            onChange={(ev) => settmdId(ev.target.value)}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">Tên sinh viên</span>
          <input
            type="text"
            className="form-control"
            placeholder="Tên sinh viên"
            name='tmdName'
            value={tmdName}
            onChange={(ev) => settmdName(ev.target.value)}
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">Số điện thoại</span>
          <input
            type="text"
            className="form-control"
            placeholder="Số điện thoại"
            name='tmdPhone'
            value={tmdPhone}
            onChange={(ev) => settmdPhone(ev.target.value)}
            aria-describedby="basic-addon3"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon4">Email</span>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name='tmdEmail'
            value={tmdEmail}
            onChange={(ev) => settmdEmail(ev.target.value)}
            aria-describedby="basic-addon4"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon5">Ngày tạo</span>
          <input
            type="text"
            className="form-control"
            placeholder="Ngày tạo"
            name='tmdCreatedAt'
            value={tmdCreatedAt}
            onChange={(ev) => settmdCreatedAt(ev.target.value)}
            aria-describedby="basic-addon5"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon6">Trạng thái</span>
          <select
            className="form-select"
            name='tmdStatus'
            value={tmdStatus}
            onChange={(ev) => settmdStatus(ev.target.value)}
            aria-describedby="basic-addon6"
          >
            <option value="">Chọn trạng thái</option>
            <option value="active">Hoạt động</option>
            <option value="inactive">Không hoạt động</option>
          </select>
        </div>
        <button type='submit' className='btn btn-primary'>Thêm mới</button>
      </form>
    </div>
  );
}
