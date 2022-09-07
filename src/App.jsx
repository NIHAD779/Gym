import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Plans from './Pages/Plans'
import Trainers from './Pages/Trainers'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'
import './index.css'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path='about' element ={<About/>}/>
          <Route path='contact' element ={<Contact/>}/>
          <Route path='Gallery' element ={<Gallery/>}/>
          <Route path='Plans' element ={<Plans/>}/>
          <Route path='Trainers' element ={<Trainers/>}/>
          <Route path='*' element = {<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App