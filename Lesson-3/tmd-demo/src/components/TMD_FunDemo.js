import React from "react";

export default function TMD_FunDemo(props) {
  return (
    <div>
      <hr />
      <h2>Function Components Demo</h2>
      <h3>Sử dụng thuộc tính từ props</h3>
      <p>UserName: {props.userName}</p>
      <p>Fullname: {props.fullName}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
