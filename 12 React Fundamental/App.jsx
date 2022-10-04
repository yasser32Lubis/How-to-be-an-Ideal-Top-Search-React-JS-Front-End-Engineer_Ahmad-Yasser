import React from "react";
import Home from "./Home.jsx";
import nav from "./css/Home.css"
import logo from "./css/Home.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      title: "",
      data: [
        {
          id: 1,
          title: "Membuat Komponen",
          completed : false
        },
        {
          id: 2,
          title: "Unit Testing",
          completed : false
        },
        {
          id: 3,
          title: "Setup Development Environment",
          completed : false
        },
        {
          tid: 4,
          title: "Deploy ke Server",
          completed : false
        }
      ],
      isShow: true
    };
  }

  componentDidMount() {
    this.setState({
      title: "Update"
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state.title);
  }

  handleChangeTextState(index) {
    const updatedData = [...this.state.data];
    updatedData[index].completed = !updatedData[index].completed;
    this.setState({
      data: updatedData
    });
  }

  render() {
    return (
      <div className="bg container-fluid">
        <div className="container p-2 d-flex justify-content-center align-items-center">
          <div className="logo"></div>
          <div className="nav">Todo App</div>
        </div>
        
        {
          this.state.data.map((num, idx) => {
            return <Home key={idx}
                         handleChangeTextState={() => this.handleChangeTextState(idx)}
                         completed={num.completed}
                         id ={num.id}
                         title={num.title}/>;
          })
        }
      </div>
    );
  }
}

export default App;
