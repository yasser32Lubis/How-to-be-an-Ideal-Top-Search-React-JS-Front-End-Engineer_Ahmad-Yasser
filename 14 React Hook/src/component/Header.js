import { useState } from "react";

const Header = ({setRefresh}) => {
  const [title, setTitle] = useState("");

  // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
  const addTodo = () => {
	
  const newTodo = {title, done: false}

	
  fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        }).then(() => {
			
// ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string 
			
setTitle("")
			
setRefresh(true)

			
setTimeout(() => {
}, 500)
        });
  }

  return (
    <div>
        <h2 className="tittle-text">TODO APP</h2>
        <div id="todo-header" className="header d-flex">
            <input         
            type="text"       
            value={title}        
            onChange={(e) => setTitle(e.target.value)}    
            />
            <span className="add-button" onClick={addTodo}>Tambah</span>
        </div>
    </div>
    
  );
};

export default Header;