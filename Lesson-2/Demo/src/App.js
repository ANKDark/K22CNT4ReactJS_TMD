import logo from "./logo.svg";
import "./App.css";
import Func_JSX_TranMinhDuc from "./components/Func_JSX_TranMinhDuc";
import Class_TranMinhDuc from "./components/Class_TranMinhDuc";

function App() {
  return (
    <div className="App">
      <h1>Demo JSX</h1>
      {/* function component demo */}
      <Func_JSX_TranMinhDuc />
      <Func_JSX_TranMinhDuc fullName="Tran Minh Duc Dep Trai" age="20" />
      <Class_TranMinhDuc />
      <hr />
      <Class_TranMinhDuc info="Hoc ReactJS" time="11" />
    </div>
  );
}

export default App;
