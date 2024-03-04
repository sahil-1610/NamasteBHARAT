import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import CardData from './components/cardData/CardData.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout />} > 
     <Route path='IceCreams' element={<CardData/>}/>
   </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
