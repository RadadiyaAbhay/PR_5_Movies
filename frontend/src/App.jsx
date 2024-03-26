import './App.css'
import React from 'react'
import {useDispatch} from 'react-redux'
import { getMovie } from './services/actions/movie.action'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router'
import Add from './components/Add/Add'
import View from './components/View/View'
import Edit from './components/Edit/Edit'
import Details from './components/Details/Details'
import ViewAll from './components/ViewAll/ViewAll'
function App() {
  const dispatch = useDispatch()
  dispatch(getMovie())
  return(
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<View/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
    </>
  )
}

export default App
