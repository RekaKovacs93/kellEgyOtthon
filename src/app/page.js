import NavBar from './components/NavBar'
import Services from './components/Services'
import Contact from './components/Contact'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
    
      <div id="home" className="w-full relative"><Hero></Hero></div>
      <div id="about"><About></About></div>
      <div id="services"><Services></Services></div>
      <div id="contact"><Contact></Contact></div>
      <div id="footer"><Footer></Footer></div>
      
    </main>
  )
}
