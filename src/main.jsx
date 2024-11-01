import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Users from './components/Users.jsx';
import Userdetails from './components/Userdetails.jsx';
import Posts from './components/Posts.jsx';
import Postdetails from './components/Postdetails.jsx';
import Error from './components/Error.jsx';
const router=createBrowserRouter([
    {
      path:'/',
      errorElement:<Error></Error>,
      element:<Home></Home>,
      children:[
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        },
        {
          path:'users',
          loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
          element:<Users></Users>
        },
        {
          path:'user/:userId',
          loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          element:<Userdetails></Userdetails>
        },
        {
          path:'posts',
          loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
          element:<Posts></Posts>
        },
        {
          path:'post/:postId',
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          element:<Postdetails></Postdetails>
        }
      ]
    },
    
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
