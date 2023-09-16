import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom"
import { ThemeProvider } from './components/theme-provider.tsx'
import { Home } from './home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/app",
    element: <App/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router}/> 
      </ThemeProvider>
  </React.StrictMode>,
)
