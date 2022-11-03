import * as React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import NameForm from "./component/form/FormCoding";

function App() {
  return (
    <div className='App'>
      <Router>
          <NameForm/>
      </Router>
    </div>
  );
}

export default App;
