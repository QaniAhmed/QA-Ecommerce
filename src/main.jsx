import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProdctDetails from './pages/ProdctDetails.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import SignupPage from './pages/Signup.jsx'
import Login from './pages/login.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        index: true, 
        element: <Home /> 
      },
      {
        path: "product/:id",
        element: <ProdctDetails />
      },

      {path:"Cart",
      element:<Cart/>},
    ],
  },
  {
    path: "Register",
    element: <SignupPage />
  },{
    path: "Login",
    element: <Login />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
