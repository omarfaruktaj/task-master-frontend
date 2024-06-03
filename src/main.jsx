import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'
import AuthProvider from './providers/auth-provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <RouterProvider router={router}/>
   </AuthProvider>
  </React.StrictMode>,
)
