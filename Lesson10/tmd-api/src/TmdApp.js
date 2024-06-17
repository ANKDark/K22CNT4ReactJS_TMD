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
  }
  useEffect(() => {
    getCategories();
  }, [])

  // Trạng thái form
  const [tmdCategoryIsForm, setTmdCategoryIsForm] = useState(false);

  const tmdHandleAddNew = (param)=> {
    setTmdCategoryIsForm(param);
  }
  const tmdHandleCloseForm = (param) => {
    setTmdCategoryIsForm(param);
  }
  const tmdHandleCategorySubmit = (param) => {
    tmdCategories.push(param);
    setTmdCategories((prev) => {
      return [...prev];
    })
    setTmdCategoryIsForm(false);
  }
  return (
    <div className="container border my-3">
      <h1>Trần Minh Đức - Call API</h1>

      <TmdCategoryList renderTmdCategories = {tmdCategories}
        onAddNew = {tmdHandleAddNew}
      />
      <hr />
      {
        tmdCategoryIsForm === true? <TmdCategoryForm onCloseForm = {tmdHandleCloseForm}
          onTmdCategorySubmit = {tmdHandleCategorySubmit}
        />:""
      }
    </div>
  );
}

export default TmdApp;
