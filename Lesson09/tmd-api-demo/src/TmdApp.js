import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TmdStudentList from './components/TmdStudentList';
import TmdCreate from './components/TmdCreate';

function TmdApp() {
  const [tmdStudentList, setTmdStudentList] = useState([]);
  const [editStudentId, setEditStudentId] = useState(null);

  // Fetch student data from API
  const tmdGetStudent = async () => {
    try {
      const response = await axios.get("https://666a98af7013419182cff882.mockapi.io/api/tmdv1/tmdStudent");
      setTmdStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    tmdGetStudent();
  }, []);

  const handleEdit = (studentId) => {
    setEditStudentId(studentId);
  };

  const handleDelete = async (studentId) => {
    try {
      await axios.delete(`https://666a98af7013419182cff882.mockapi.io/api/tmdv1/tmdStudent/${studentId}`);
      setTmdStudentList(tmdStudentList.filter(student => student.id !== studentId));
      window.location.reload();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className='container border mt-5 p-3'>
      <h1 className='text-center my-3'>Xử lý chức năng API</h1>
      <hr/>
      <TmdStudentList 
        renderTmdStudentList={tmdStudentList} 
        tmdHandleEdit={handleEdit} 
        tmdHandleDelete={handleDelete} 
      />
      <TmdCreate 
        setTmdStudentList={setTmdStudentList} 
        tmdStudentList={tmdStudentList} 
        editStudentId={editStudentId} 
      />
      {editStudentId && <p>Đã chọn sửa sinh viên có id: {editStudentId}</p>}
    </div>
  );
}

export default TmdApp;
