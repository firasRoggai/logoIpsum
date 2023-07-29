import './assets/css/index.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Section from "./components/Section"
import Collection from "./components/Collection"
import Footer from './components/Footer'

function App() {

  return (
    <div className='parallax-wrapper'>
    <Navbar />
    <Header />
    <Section />
    <Collection />
    <Footer />
    </div>
  )
}

export default App
