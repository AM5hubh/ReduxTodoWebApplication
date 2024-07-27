import "./App.css";
import Todos from "./components/Todos";
import Addtodo from "./components/addtodo";

function App() {
  return (
    <>
      <div className=" h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">REDUX TOOLKIT</h1>
        <Addtodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
