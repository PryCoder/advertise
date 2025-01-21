import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./components/home/home.jsx"
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from "./components/user/User.jsx"
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children : [
      {
        path: "",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
      path:"contact",
      element: <Contact />
    },
    {
      path:"user/:userId",
      element:<User />
    },
    { loader:{githubInfoLoader},
      path:"github",
      element:<Github/>

    },

    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' elements={<Layout/>}>
//       <Route path='/' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
