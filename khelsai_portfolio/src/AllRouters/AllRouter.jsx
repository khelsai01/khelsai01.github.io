import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../components/Home'
import Abouts from '../components/Abouts'
import Projects from '../components/Projects'
import Skill from '../components/Skill'
import Contact from '../components/Contact'

const AllRouter = () => {
  return<div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Abouts />} />
      <Route path='/project' element={<Projects />} />
      <Route path='/skill' element={<Skill />} />
      <Route path='/contact' element={<Contact />} />

    </Routes>
  </div>
 
}

export {AllRouter}