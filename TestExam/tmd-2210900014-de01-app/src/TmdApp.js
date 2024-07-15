import React, { useEffect, useState } from 'react'
import TmdListTableName from './tmd_components/TmdListTableName'
import axios from './tmd_apis/tmd-2210900014'
import TMdFormTableName from './tmd_components/TMdFormTableName'

export default function TmdApp() {
  // Đọc dữ liệu từ api
  const [tmdListTableName, setTmdListTableName] = useState([])
  const tmdGetTableName = async () => {
    let tmdResp = await axios.get("tmdTableName");
    setTmdListTableName(tmdResp.data);
  }

  useEffect(() => {
    tmdGetTableName();
  }, [])

  // Hàm xóa 
  const tmdHandleDelete = async (tmdId) => {
    let tmdResp = await axios.delete("tmdTableName/"+tmdId);
    tmdGetTableName();
  }
  const tmdObjTableName = {
      "tmdTbName": "Trần Minh Đức",
      "tmdTbEmail": "dikhapthegioi2@gmail.com",
      "tmdTbPhone": "0855312279",
      "tmdTbStatus": true,
      "tmdId": "2210900014"
  }
  const [tmdTableName, setTmdTableName] = useState(tmdObjTableName);
  const tmdHandleAdd = () => {
    tmdGetTableName();
  }
  const tmdHandleEdit = (tmdObjEditTableName) => {
    setTmdTableName(tmdObjEditTableName);
  }
  return (
    <div className='container border my-3'>
      <h1>Bài đánh giá thi hết học phần - Trần Minh Đức: 2210900014</h1>
      <TmdListTableName renderTmdListTableName = {tmdListTableName}
        onTmdDelete = {tmdHandleDelete}
        onTmdEdit = {tmdHandleEdit}
      />
      <TMdFormTableName renderTmdTableName = {tmdTableName}
        onTmdAdd = {tmdHandleAdd}
      />
    </div>
  )
}
