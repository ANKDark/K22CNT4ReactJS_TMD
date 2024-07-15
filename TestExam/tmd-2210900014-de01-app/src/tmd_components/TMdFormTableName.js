import React, { useEffect, useState } from "react";
import axios from '../tmd_apis/tmd-2210900014'
export default function TMdFormTableName({ renderTmdTableName, onTmdAdd }) {
  const [tmdId, setTmdId] = useState(renderTmdTableName.tmdId);
  const [tmdTbName, setTmdTbName] = useState(renderTmdTableName.tmdTbName);
  const [tmdTbEmail, setTmdTbEmail] = useState(renderTmdTableName.tmdTbEmail);
  const [tmdTbPhone, setTmdTbPhone] = useState(renderTmdTableName.tmdTbPhone);
  const [tmdTbStatus, settmdTbStatus] = useState(
    renderTmdTableName.tmdTbStatus
  );
  useEffect(() => {
    setTmdId(renderTmdTableName.tmdId)
    setTmdTbName(renderTmdTableName.tmdTbName)
    setTmdTbEmail(renderTmdTableName.tmdTbEmail)
    setTmdTbPhone(renderTmdTableName.tmdTbPhone)
    settmdTbStatus(renderTmdTableName.tmdTbStatus)
  },[renderTmdTableName])
  const tmdHandleSubmit = async (tmdEvent) => {
    tmdEvent.preventDefault();
    const tmdObjTableName = {
            "tmdTbName": tmdTbName,
            "tmdTbEmail": tmdTbEmail,
            "tmdTbPhone": tmdTbPhone,
            "tmdTbStatus": tmdTbStatus,
            "tmdId": tmdId
    }
    //Thêm vào dữ liệu trong api
    await axios.post("tmdTableName", tmdObjTableName)
    onTmdAdd();
  }
  return (
    <div>
      <h2>Form xử lý dữ liệu thêm mới</h2>
      <form action="" className="">
        <div className="input-group mb-3">
          <span className="input-group-text" id="tmdId">
            Tmd Id
          </span>
          <input
            type="text"
            className="form-control"
            name="tmdId"
            value={tmdId}
            onChange={(tmdEv) => setTmdId(tmdEv.target.value)}
            placeholder="tmdId"
            aria-label="tmdId"
            aria-describedby="tmdId"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="tmdTbName">
            Tmd Name
          </span>
          <input
            type="text"
            className="form-control"
            name="tmdTbName"
            value={tmdTbName}
            onChange={(tmdEv) => setTmdTbName(tmdEv.target.value)}
            placeholder="tmdTbName"
            aria-label="tmdTbName"
            aria-describedby="tmdTbName"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="tmdTbEmail">
            Tmd Email
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="dikhapthegioi2@gmail.com"
            name="tmdTbEmail"
            value={tmdTbEmail}
            onChange={(tmdEv) => setTmdTbEmail(tmdEv.target.value)}
            aria-label="tmdTbEmail"
            aria-describedby="tmdTbEmail"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="tmdTbPhone">
            Tmd Phone
          </span>
          <input
            type="text"
            className="form-control"
            name="tmdTbPhone"
            value={tmdTbPhone}
            onChange={(tmdEv) => setTmdTbPhone(tmdEv.target.value)}
            placeholder="0855312279"
            aria-label="tmdTbPhone"
            aria-describedby="tmdTbPhone"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="tmdTbPhone">
            Tmd Status
          </span>
          <select
            name="tmdTbStatus"
            id="tmdTbStatus"
            className="form-control"
            value={tmdTbStatus}
            onChange={(tmdEv) => settmdTbStatus(tmdEv.target.value === "true")}
          >
            <option value="true">Active</option>
            <option value="false">Non Active</option>
          </select>
        </div>
      </form>
      <button className="btn btn-primary my-3" name="btnTmdSave" onClick={tmdHandleSubmit}>
        TMD Save
      </button>
    </div>
  );
}
