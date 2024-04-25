import React from "react";

export default function TMD_EventForm2() {
  //Định nghĩa các hàm xử lí sự kiện
  const EventHandleClick1 = (content) => {
    console.log("=============");
    console.log(content);
    console.log("=============");
  };
  return (
    <div className="alert alert-success">
      <h2>Event Demo - Function Component</h2>
      <button onClick={EventHandleClick1("Trần Minh Đức")}>
        Gọi khi render
      </button>
      <button onClick={() => EventHandleClick1("K22CNT4-ReactJS")}>
        Gọi khi click
      </button>
    </div>
  );
}
