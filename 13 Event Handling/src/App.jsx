import React from "react";
import '../src/css/App.css';
import Task from "./Task";


class Todo_App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    value: '',
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeTextState(index) {
    const updatedData = [...this.state.data];
    updatedData[index].completed = !updatedData[index].completed;
    this.setState({
      data: updatedData
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault()
  }

  render() {
    return (
      <div className="bg">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className='text-tittle'>TODO LIST</p>
              <div className='container d-flex flex-row justify-content-around align-items-center'>
                <form onSubmit={this.handleSubmit}>
                  <div className='container-input'>
                    <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
                    <input className="submit-btn" type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            {this.state.data.map((num, idx) => {
              return <Task key={idx}
                         handleChangeTextState={() => this.handleChangeTextState(idx)}
                         completed={num.completed}
                         id ={num.id}
                         title={num.title}/>;
                        })}
          </div>
      </div>
      
        );
  }
}

export default Todo_App;
