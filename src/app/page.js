import NavBar from './components/NavBar'
import Services from './components/Services'
import Contact from './components/Contact'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Blog from './components/Blog'
import Tudta from './components/Tudta'
import Choose from './components/Choose' 
import Vevo from './components/Vevo'
import Nyer from './components/Nyer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
    
      <div id="home" className="w-full relative"><Hero></Hero></div>
      {/* <div><Choose></Choose></div> */}
      <div id="about" className="md:min-h-screen"><About></About></div>
      <div id="services" className="md:min-h-screen"><Services></Services></div>
      <div className="w-full relative min-h-screen"><Tudta></Tudta></div>
      <div id="vevo" className="md:min-h-screen justify-center"><Vevo></Vevo></div>
      <div className="md:min-h-screen w-full justify-center"><Nyer></Nyer></div>
      <div className="md:min-h-screen" id="contact"><Contact></Contact></div>
      <div id="footer"><Footer></Footer></div>
      
    </main>
  )
}
