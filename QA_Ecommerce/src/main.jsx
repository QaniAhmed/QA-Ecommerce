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
import { AuthProvider } from './Context/AuthContext.jsx'
import Profile from './pages/Profile.jsx'
import Wishlist from './pages/wishlist.jsx'
import SearchResults from './components/Products/SearchResults.jsx'
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

      {path:"Wishlist",
        element:<Wishlist/>
      },
      {
        path:"search",
        element:<SearchResults/>
      }

    ],
  },
  {
    path: "Register",
    element: <SignupPage />
  },{
    path: "Login",
    element: <Login />
  },
  {
    path:'Profile',
    element:<Profile/>

  }
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
)
