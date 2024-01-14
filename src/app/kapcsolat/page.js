import NavBar from "../components/NavBar"
import Contact from "../components/Contact"

export default function VevoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>

      <div className="w-full justify-center mt-10 md:mt-0" id="contact"><Contact></Contact></div>
      
    </main>
  )
}