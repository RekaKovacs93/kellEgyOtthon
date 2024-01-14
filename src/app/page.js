import NavBar from './components/NavBar'
import Services from './components/Services'
import Contact from './components/Contact'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Tudta from './components/Tudta'
import Choose from './components/Choose' 
import Vevo from './components/Vevo'
import Nyer from './components/Nyer'
import Eladas from './components/Eladas'
import Ingatlan from './components/Ingatlan'
import Hitel from './components/Hitel'
import Viktor from './components/Viktor'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
      <div id="home" className="w-full h-screen relative"><Hero></Hero></div>
      <div id="about" className="md:min-h-screen mt-10 md:mt-0"><About></About></div>
      <div className="md:min-h-screen md:w-full justify-center"><Viktor></Viktor></div>
      <div className="w-full justify-center" id="contact"><Contact></Contact></div>
      
    </main>
  )
}
