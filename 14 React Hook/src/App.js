import { useState } from "react";
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import '../src/css/App.css'
import '../src/css/header.css'
import '../src/css/TodoList.css'

function App() {

  const [isRefresh, setIsRefresh] = useState(true)

  const setRefresh = (status) => {
    setIsRefresh(status)
  }

  return (
    <div className="bg">
      <div className="App">
        <div className="content">
          <Header setRefresh={setRefresh} />
          <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
        </div>
      </div>
    </div>
    
  );
}

export default App;
