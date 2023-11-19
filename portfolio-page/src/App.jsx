import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} errorElement={<Error />} />
      <Route path='/projects' element={<Projects />} errorElement={<Error />} />
      <Route path='/project/:projectname' element={<Project />} errorElement={<Error />} />
      <Route path='/contact' element={<Contact />} errorElement={<Error />} />
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
