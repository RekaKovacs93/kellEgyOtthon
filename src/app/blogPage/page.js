import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


export default function BlogPage() {
  return (
    <main id = "blogpage" className="flex min-h-screen flex-col items-center justify-between">

      <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
    
      <h1>blogpage hello world</h1>
      <div id="footer"><Footer></Footer></div>
      
    </main>
  )
}
