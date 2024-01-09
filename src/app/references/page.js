import References from "../components/References"
import NavBar from "../components/NavBar"
import Contact from "../components/Contact"

export default function ReferencesPage () {
    return (
        <div>
        <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
        <References></References>
        <div className="w-full justify-center" id="contact"><Contact></Contact></div>
        </div>
    )
}