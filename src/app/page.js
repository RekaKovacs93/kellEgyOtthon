import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Hero from './components/Hero'
import About from './components/About'
import Viktor from './components/Viktor'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
      <div id="home" className="w-full h-screen relative"><Hero></Hero></div>
      <div id="about" className="md:min-h-screen mt-20 md:mt-0"><About></About></div>
      <div className="md:min-h-screen md:w-full justify-center"><Viktor></Viktor></div>
      <div className="w-full justify-center" id="contact"><Contact></Contact></div>
      
    </main>
  )
}
