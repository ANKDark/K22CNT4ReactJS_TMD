import "./App.css";
import TMD_ClassComp from "./components/TMD_ClassComp";
import TMD_FunDemo from "./components/TMD_FunDemo";

function App() {
  const users = {
    // Khai báo biến đối tượng
    userName: "DucDepTrai",
    password: "123456",
    fistName: "Trần Minh",
    lastName: "Đức",
  };
  //Khai báo đối tượng hàm
  function formatName(user) {
    return (
      <h2>
        Xin chào, {user.fistName} {user.lastName}
      </h2>
    );
  }
  return (
    <div className="App">
      {/* Biểu thức jsx */}
      <div>
        <p>FullName: {users.fullName}</p>
        {formatName(users)}
      </div>
      {/*Sử dụng function components*/}
      <div>
        <TMD_FunDemo />
        {/* Sử dụng Func_comp có props */}
        <TMD_FunDemo userName="TMD" fullName="Trần Minh Đức" age="19" />
      </div>

      {/* Sử dụng class components */}
      <div>
        {/* dùng không sử dụng props */}
        <TMD_ClassComp />
        {/* Sử dụng props theo thuộc tính */}
        <TMD_ClassComp company="Fit-NTU -K22CNT4" course="ReactJS" />
      </div>
    </div>
  );
}

export default App;
