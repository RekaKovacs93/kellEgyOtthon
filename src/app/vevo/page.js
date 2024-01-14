import NavBar from "../components/NavBar"
import Vevo from "../components/Vevo"
import Nyer from "../components/Nyer"
import Hitel from "../components/Hitel"
import Viktor from "../components/Viktor"
import Contact from "../components/Contact"

export default function VevoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
    
     
      <div id="vevo" className="md:min-h-screen justify-center mt-10 md:mt-0"><Vevo></Vevo></div>
      <div className="min-h-screen md:w-full md:justify-center"><Nyer></Nyer></div>
      <div className="min-h-screen md:w-full md:justify-center"><Hitel></Hitel></div>
      <div className="md:min-h-screen md:w-full justify-center"><Viktor></Viktor></div>
      <div className="w-full justify-center" id="contact"><Contact></Contact></div>
      
    </main>
  )
}