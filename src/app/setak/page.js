import NavBar from "@/app/components/NavBar"
import Contact from "@/app/components/Contact"
import Setak from "@/app/components/Setak"


export default function Ingatlanok() {


  
    return (
  
      <main className="flex min-h-screen flex-col items-center">
   
        
  
          <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
        <Setak></Setak>
          <div className="w-full justify-center" id="contact"><Contact></Contact></div>
      </main>
    )
  }