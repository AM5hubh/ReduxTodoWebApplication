import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <div className=" h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center">REDUX TOOLKIT<br></br>Todo Page</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
