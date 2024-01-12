import NavBar from "../components/NavBar"
import Contact from "../components/Contact"
import MyCarousel from "../components/MyCarousel"
import Head from "next/head"




    const images = [
      "/Matyas01-min.jpg",
      "/Matyas02-min.jpg",
      "/Matyas03-min.jpg",
      "/Matyas04-min.jpg",
      "/Matyas05-min.jpg",
      "/Matyas06-min.jpg",
      "/Matyas07-min.jpg",
      "/Matyas08-min.jpg",
      "/Matyas09-min.jpg",
      "/Matyas10-min.jpg",
      "/Matyas11-min.jpg"
    ];
  



export default function ReferencesPage () {



    return (
        <div>
        <Head>
        {/* Add preloaded images to head */}
        {images.map((image, index) => (
          <link key={index} rel="preload" href={image} as="image" />
        ))}
      </Head>
        <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
        {/* <References></References> */}
        <div><MyCarousel images={images}></MyCarousel></div>
        <div className="w-full justify-center" id="contact"><Contact></Contact></div>
        </div>
    )
}
