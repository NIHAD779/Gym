import {BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Plans from './Pages/Plans'
import Trainers from './Pages/Trainers'
import Navbar from './Components/Navbar'
import './index.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <About/>
        <Contact/>
        <Gallery/>
        <Plans/>
        <Trainers/>
      </BrowserRouter>

    </div>
  )
}

export default App