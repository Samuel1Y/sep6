import React from 'react'
import {
  Route, Routes
} from 'react-router-dom'
import App from './App'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Welcome from './Pages/Welcome'
import Movies from './Pages/Movies'
import MovieView from './Pages/MovieView'
import MakeReview from './Pages/MakeReview'
import ProfileView from './Pages/ProfileView'
import Home from './Pages/Home'

export default function RootRouter() {
  // add new routes here  
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route element={<Welcome />} index />
        <Route element={<Home />} path='home' />
        <Route element={<SignIn />} path="sign-in" />
        <Route element={<SignUp />} path="sign-up" />
        <Route element={<ProfileView />} path="username" /*change to ":username"*/ />
        <Route path="/movies" >
          <Route index element={<Movies />} />
          <Route element={<MovieView />} path=":movieId" />
          <Route element={<MakeReview />} path=":movieId/make-review" />
        </Route>
      </Route>
    </Routes>
  )
}
