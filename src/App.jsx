import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Home from './components/Home'
import Book from './components/Book'
import Navbar2 from './components/Navbar2'
import BookinDetails from './components/BookinDetails'
import Team from './components/Team'
import OurTeamOne from './components/OurTeamOne'
import OurTeamTwo from './components/OurTeamTwo'
import FormDetails from './components/FormDetails'
import Career from './components/Career'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar/><Home/></>
    },
    {
      path: "/About",
      element: <> <Navbar/> <About/></>
    },
    {
      path: "/services",
      element: <> <Navbar/> <Services/></>
    },
    {
      path: "/team",
      element: <> <Navbar/> <Team/></>
    },
    {
      path: "/career",
      element: <> <Navbar/> <Career/></>
    },
    {
      path: "/book",
      element: <> <Navbar2/> <Book/></>
    },
    {
      path: "/ourteamone",
      element: <> <Navbar/> <OurTeamOne/></>
    },
    {
      path: "/ourteamtwo",
      element: <> <Navbar/> <OurTeamTwo/></>
    },
    {
      path: "/bookinfo",
      element: <><BookinDetails/></>
    },
    
  ])
  
  return (
    <>
      <RouterProvider router = {router}/>

    </>
  )
}

export default App
