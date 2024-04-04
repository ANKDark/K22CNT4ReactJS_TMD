import React from "react";

export default function Func_JSX_TranMinhDuc(props) {
  const users = {
    name: "Tran Minh Duc",
    age: 20,
  };
  return (
    <div>
      <h2>Function Component Demo</h2>
      <p>
        welcome to, {users.name} - {users.age}
      </p>
      <hr />
      <h3>
        Props:
        <br />
        FullName: {props.fullName}
        <br />
        Age: {props.age}
      </h3>
    </div>
  );
}
