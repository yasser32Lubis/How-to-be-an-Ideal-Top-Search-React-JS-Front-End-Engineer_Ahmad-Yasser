import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FormPageContainer from './containers/FormPageContainer'

function Routing() {
  return (
    <Routes>
      <Route path="/" exact element={<FormPageContainer/>}/>
    </Routes>
  )
}

export default Routing