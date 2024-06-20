import React, { useState, useEffect } from "react";
import axios from "../api/TmdApi";

export default function TmdCategoryForm({
  onCloseForm,
  onTmdCategorySubmit,
  renderTmdCategory,
}) {
  const [tmdId, setTmdId] = useState("");
  const [tmdCategoryName, setTmdCategoryName] = useState("");
  const [tmdCategoryStatus, setTmdCategoryStatus] = useState(false);

  useEffect(() => {
    setTmdId(renderTmdCategory.tmdId);
    setTmdCategoryName(renderTmdCategory.tmdCategoryName);
    setTmdCategoryStatus(renderTmdCategory.tmdCategoryStatus);
  }, [renderTmdCategory]);

  const tmdHandleClose = (event) => {
    event.preventDefault();
    onCloseForm(false);
  };

  const tmdHandleSubmit = async (event) => {
    event.preventDefault();
    if (tmdId === 0) {
      // Thêm
      let tmdCategory = {
        tmdId: 0,
        tmdCategoryName,
        tmdCategoryStatus: tmdCategoryStatus === "true",
      };

      const response = await axios.post("tmdCategory", tmdCategory);
      const newCategory = response.data;
      onTmdCategorySubmit(newCategory);
    } else {
      // Sửa
      let tmdCategory = {
        tmdId: tmdId,
        tmdCategoryName: tmdCategoryName,
        tmdCategoryStatus: tmdCategoryStatus === "true",
      };
      axios.put(`/tmdCategory/${tmdId}`, tmdCategory);
    }
  };

  return (
    <div>
      <form onSubmit={tmdHandleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Tên Danh Mục
          </span>
          <input
            type="text"
            name="tmdCategoryName"
            value={tmdCategoryName}
            onChange={(ev) => setTmdCategoryName(ev.target.value)}
            className="form-control"
            placeholder="Tên Danh Mục"
            aria-label="Tên Danh Mục"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            name="tmdCategoryStatus"
            onChange={(ev) => setTmdCategoryStatus(ev.target.value)}
          >
            <option disabled selected>Lựa chọn trạng thái</option>
            <option value={true}>Hiển thị</option>
            <option value={false}>Tạm khóa</option>
          </select>
        </div>
        <button className="btn btn-success" type="submit">
          Ghi lại
        </button>
        <button className="btn btn-danger" onClick={tmdHandleClose}>
          Đóng
        </button>
      </form>
    </div>
  );
}
