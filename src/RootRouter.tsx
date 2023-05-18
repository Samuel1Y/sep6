import React from 'react'
import {
  Route, Routes
} from 'react-router-dom'
import App from './App'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Welcome from './Pages/Welcome'

export default function RootRouter() {
  // add new routes here  
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route element={<Welcome />} index />
        <Route element={<SignIn />} path="sign-in" />
        <Route element={<SignUp />} path="sign-up" />
      </Route>
    </Routes>
  )
}
