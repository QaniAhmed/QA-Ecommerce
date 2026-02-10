import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProdctDetails from './pages/ProdctDetails.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // هذا المكون يحتوي فقط على Header, Footer, و Outlet
    children: [
      {
        index: true, // كلمة index تعني: اظهر هذا المكون عندما يكون المسار "/" بالضبط
        element: <Home /> 
      },
      {
        path: "product/:id",
        element: <ProdctDetails />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
