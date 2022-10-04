import { useState } from "react";
import Header from "../component/Header";
import TodoList from "../component/TodoList";
import '../css/App.css';
import '../css/header.css';
import '../css/TodoList.css';
import HomeNavbar from "../component/HomeNavbar";

function Home() {

  const [isRefresh, setIsRefresh] = useState(true)

  const setRefresh = (status) => {
    setIsRefresh(status)
  }

  return (
    <div className="bg">
          <HomeNavbar/>
          <Header setRefresh={setRefresh} />
          <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
    </div>
    
  );
}

export default Home;