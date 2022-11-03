import React from "react";
import '../src/css/Home.css';



class Task extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("unmount",this.props.title);
  }
  
  render() {
    return (
          <div className="container d-flex justify-content-center">
            <div className="d-flex p-1 border border-3 m-2 w-50 justify-content-around">
              <div className="d-flex col-md-2 ps-3">
                <input type="checkbox" value={"checked"}/>
              </div>
              <div className="txt btn col-md-8"
                style={this.props.completed ? {textDecoration:"line-through", color:"black"} : {textDecoration:""}}
                onClick={this.props.handleChangeTextState}>
                {this.props.title}  
              </div>
              <div className="txt col-md-2">
                <button className="btn btn-danger" type="delete">Delete</button>
              </div>
            </div>
          </div>
    )
  }
}

export default Task;

