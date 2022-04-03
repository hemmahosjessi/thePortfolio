import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StartPage } from 'pages/StartPage'
import { AboutPage } from 'pages/AboutPage'
import { UIPage } from 'pages/UIPage'
import { FEPage } from 'pages/FEPage'
import { ContactPage } from 'pages/ContactPage' 

import { Header } from 'components/header/Header'


export const App = () => {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<StartPage /> }> </Route>
      <Route path="/about" element={<AboutPage />}> </Route>
      <Route path="/ui" element={<UIPage />}> </Route>
      <Route path="/fe" element={<FEPage />}> </Route>
      <Route path="/contact" element={<ContactPage />}> </Route>
    </Routes> 
    </BrowserRouter>
  )
}
