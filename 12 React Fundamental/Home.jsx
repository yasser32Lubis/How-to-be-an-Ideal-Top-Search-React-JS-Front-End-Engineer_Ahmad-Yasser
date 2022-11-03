import React from "react";
import txt from "../src/css/Home.css"



class Home extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("unmount",this.props.title);
  }
  
  render() {
    return (
          <div className="container d-flex justify-content-center">
            <div className="p-1 border border-3 rounded m-2 text-center w-50 ">
              <div className="txt btn"
                style={this.props.completed ? {textDecoration:"line-through", color:"black"} : {textDecoration:""}}
                onClick={this.props.handleChangeTextState}>
                {this.props.title}  
              </div>
            </div>
          </div>
    )
  }
}

export default Home;

