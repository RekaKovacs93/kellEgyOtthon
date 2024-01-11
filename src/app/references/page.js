import References from "../components/References"
import NavBar from "../components/NavBar"
import Contact from "../components/Contact"
import MyCarousel from "../components/MyCarousel"

export default function ReferencesPage () {
    return (
        <div>
        <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
        {/* <References></References> */}
        <div><MyCarousel></MyCarousel></div>
        <div className="w-full justify-center" id="contact"><Contact></Contact></div>
        </div>
    )
}