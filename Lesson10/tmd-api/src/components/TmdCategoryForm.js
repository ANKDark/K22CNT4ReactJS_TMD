import React, { useState } from "react";
import axios from "../api/TmdApi";

export default function TmdCategoryForm({ onCloseForm, onTmdCategorySubmit }) {
  const [tmdCategoryName, setTmdCategoryName] = useState("");
  const [tmdCategoryStatus, setTmdCategoryStatus] = useState("");

  const tmdHandleClose = (event) => {
    event.preventDefault();
    onCloseForm(false);
  }

  const tmdHandleSubmit = async (event) => {
    event.preventDefault();
    let tmdCategory = {
      tmdId: 0,
      tmdCategoryName: tmdCategoryName,
      tmdCategoryStatus: tmdCategoryStatus,
    };
    console.log("Add: ", tmdCategory);
    
    const response = await axios.post("tmdCategory", tmdCategory);
    const newCategory = response.data;

    onTmdCategorySubmit(newCategory);
  }

  return (
    <div>
      <form onSubmit={tmdHandleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Category Name
          </span>
          <input
            type="text"
            name="tmdCategoryName"
            value={tmdCategoryName}
            onChange={(ev) => setTmdCategoryName(ev.target.value)}
            className="form-control"
            placeholder="Category Name"
            aria-label="Category Name"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={tmdCategoryStatus}
            name="tmdCategoryStatus"
            onChange={(ev) => setTmdCategoryStatus(ev.target.value)}
          >
            <option value="" disabled hidden>
              Lựa chọn trạng thái
            </option>
            <option value={true}>Hiển thị</option>
            <option value={false}>Tạm khóa</option>
          </select>
        </div>
        <button className="btn btn-success" type="submit">Ghi lại</button>
        <button className="btn btn-danger" onClick={tmdHandleClose}>Đóng</button>
      </form>
    </div>
  );
}
