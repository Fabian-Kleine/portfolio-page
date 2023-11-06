import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/project/:projectname' element={<Project />} />
      <Route path='/contact' element={<Contact />} />
    </>
  )
)

function App({ routes }) {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App;
