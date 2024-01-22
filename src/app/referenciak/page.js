import NavBar from "../components/NavBar"
import Contact from "../components/Contact"
import MyCarousel from "../components/MyCarousel"
import References from "../components/References"

import Head from "next/head"


    const lakasok = [
      {
        title: "Mátyás tér, VIII",
        images: [
          "/Matyas09-min.jpg",
          "/Matyas06-min.jpg",
          "/Matyas10-min.jpg",
          "/Matyas12-min.jpg",
          "/Matyas04-min.jpg",
          "/Matyas11-min.jpg",
          "/Matyas05-min.jpg",
          "/Matyas02-min.jpg",
          "/Matyas08-min.jpg",
          "/Matyas01-min.jpg",
          "/Matyas03-min.jpg",
          "/Matyas07-min.jpg"
        ],
        link: "https://ths.li/PSWyMGc"
      },
      {
        title: "Postakocsi utca, XVII",
        images: [
          "/Postakocsi-01.jpg",
          "/Postakocsi-02.jpg",
          "/Postakocsi-03.jpg",
          "/Postakocsi-04.jpg",
          "/Postakocsi-05.jpg",
          "/Postakocsi-06.jpg",
          "/Postakocsi-07.jpg",
          "/Postakocsi-08.jpg",
          "/Postakocsi-09.jpg",
          "/Postakocsi-10.jpg"
        ],
        link: "https://ths.li/yuwBFzP"
      }

    ]
  



export default function ReferencesPage () {


    return (
        <div>
        <Head>
        {/* Add preloaded images to head */}
        {lakasok.map((lakas) => (
          lakas.images.map((image, index) => (
          <link key={index} rel="preload" href={image} as="image" />
        ))))}
        </Head> 
        <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
        <h1 className='text-center text-3xl px-5 md:px-10 md:py-5 py-20 md:mt-40 mt-10'>
        Így dolgozunk mi
        </h1>
        <p className='text-center px-5'>
        Mutatunk néhányat kedvenc munkáink közül, melyek jól tükrözik
        szolgáltatásaink minőségét
        </p>
        
        <div><MyCarousel lakas={lakasok[0]}></MyCarousel></div>
        <div><MyCarousel lakas={lakasok[1]}></MyCarousel></div>
        <div><References></References></div>
        

        <div className="w-full justify-center" id="contact"><Contact></Contact></div>
        </div>
    )
}
