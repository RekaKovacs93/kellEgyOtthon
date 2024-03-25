import NavBar from "../components/NavBar"
import Contact from "../components/Contact"
import Lista from "../components/Lista"

export default function KinalatPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">

        <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
        <Lista></Lista>
        <div className="w-full justify-center" id="contact"><Contact></Contact></div>

    </main>
  )
}