import NavBar from "../components/NavBar"
import Eladas from "../components/Eladas"
import Ingatlan from "../components/Ingatlan"
import Services from "../components/Services"
import Tudta from "../components/Tudta"
import Viktor from "../components/Viktor"
import Contact from "../components/Contact"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
    

      <div id="eladas" className="md:min-h-screen w-full mt-10 md:mt-0"><Eladas></Eladas></div>
      <div className="md:min-h-screen min-h-full w-full"><Ingatlan></Ingatlan></div>
      <div id="services" className="md:min-h-screen"><Services></Services></div>
      <div className="w-full relative md:min-h-screen"><Tudta></Tudta></div>
      <div className="md:min-h-screen md:w-full justify-center"><Viktor></Viktor></div>
      <div className="w-full justify-center" id="contact"><Contact></Contact></div>
      
    </main>
  )
}
