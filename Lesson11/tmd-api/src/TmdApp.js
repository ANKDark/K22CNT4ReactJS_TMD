import { useEffect, useState } from "react";
import "./App.css";
import TmdCategoryList from "./components/TmdCategoryList";
import axios from "./api/TmdApi";
import TmdCategoryForm from "./components/TmdCategoryForm";

function TmdApp() {
  // Lấy dữ liệu từ API
  const [tmdCategories, setTmdCategories] = useState([]);

  const getCategories = async () => {
    const tmdCateResponse = await axios.get("tmdCategory");
    setTmdCategories(tmdCateResponse.data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  // Trạng thái form
  const [tmdCategoryIsForm, setTmdCategoryIsForm] = useState(false);
  // Dữ liệu form: Add - Edit
  let tmdCategoryInit = {
    tmdId: 0,
    tmdCategoryName: "",
    tmdCategoryStatus:false,
  };
  const [tmdCategoryEdit, setTmdCategoryEdit] = useState(tmdCategoryInit);

  const tmdHandleAddNew = (param) => {
    setTmdCategoryEdit(tmdCategoryInit);
    setTmdCategoryIsForm(param);
  };
  const tmdHandleCloseForm = (param) => {
    setTmdCategoryIsForm(param);
  };
  const tmdHandleCategorySubmit = (param) => {
    tmdCategories.push(param);
    setTmdCategories((prev) => {
      return [...prev];
    });
    setTmdCategoryIsForm(false);
  };
  // Hàm xử lý sự kiện xóa
  const tmdHandleDelete = (tmdId) => {
    axios.delete(`/tmdCategory/${tmdId}`);
    let tmdDelete = tmdCategories.filter((x) => x.tmdId !== tmdId);
    setTmdCategories(tmdDelete);
  };
  // Hàm xử lý sự kiện edit
  const tmdHandleEdit = (tmdCategory) => {
    setTmdCategoryEdit(tmdCategory);
    setTmdCategoryIsForm(true);
  };
  return (
    <div className="container border my-3">
      <h1>Trần Minh Đức - Call API</h1>

      <TmdCategoryList
        renderTmdCategories={tmdCategories}
        onAddNew={tmdHandleAddNew}
        onTmdDelete={tmdHandleDelete}
        onTmdEdit={tmdHandleEdit}
      />
      <hr />
      {tmdCategoryIsForm === true ? (
        <TmdCategoryForm
          onCloseForm={tmdHandleCloseForm}
          onTmdCategorySubmit={tmdHandleCategorySubmit}
          renderTmdCategory = {tmdCategoryEdit}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default TmdApp;
