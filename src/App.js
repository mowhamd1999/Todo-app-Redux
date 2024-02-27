import "./App.css";
import TodoList from "./Component/TodoList";
import DisplayTodos from "./Component/DisplayTodos";
function App() {
  return (
    <div className="container">
      <TodoList />
      <DisplayTodos />
    </div>
  );
}

export default App;
