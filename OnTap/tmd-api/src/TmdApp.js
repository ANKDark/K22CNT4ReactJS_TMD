import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "./api/TmdApi";
import TmdUserList from "./components/TmdUserList";

function TmdApp() {
  // Lấy dữ liệu từ API
  const [tmdUser, setTmdUser] = useState([]);

  const getUsers = async () => {
    try {
      const tmdCateResponse = await axios.get("tmdUsers");
      setTmdUser(tmdCateResponse.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container border my-3">
      <h1>Trần Minh Đức - Call API</h1>
      <TmdUserList  renderTmdUser={tmdUser} />
      <hr />
    </div>
  );
}

export default TmdApp;
