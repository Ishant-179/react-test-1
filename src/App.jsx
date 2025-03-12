import { useState } from 'react'
import './App.css'
import UserCard from './Components/UserCard'
import DashBoard from './pages/DashBoard'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function App() {

  const Layout = () => {
    return(
      <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <footer className='text-2xl text-white p-5 py-7 text-center bg-black'>Footer</footer>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/dashboard',
          element: <DashBoard />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
