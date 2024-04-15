import NavBar from "../components/NavBar"
import Contact from "../components/Contact"
import Lista from "../components/Lista"

import Head from "next/head"



const lakasok = [
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
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
    seta: "https://ths.li/PSWyMGc",
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
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
    seta: "https://ths.li/PSWyMGc",
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
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
    seta: "https://ths.li/PSWyMGc",
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
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
    seta: "https://ths.li/PSWyMGc",
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
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
    seta: "https://ths.li/PSWyMGc",
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
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
    seta: "https://ths.li/PSWyMGc",
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
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
    seta: "https://ths.li/PSWyMGc",
  
  },
  {
    cim: "Mátyás tér, XVI",
    ker: "XVI",
    ar: "20.5M",
    szobak: 4,
    alapterulet: "149",
    telekterulet: "1200",
    kepek: [
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
    seta: "https://ths.li/PSWyMGc",
  
  }

]





export default function Ingatlanok() {


  let slug = lakasok[0].cim.toLowerCase();
  slug = slug.replace(/\s+/g, '_');
  slug = slug.replace(/[^a-z0-9-_]/g, '');
  console.log(slug)

  return (

    <main className="flex min-h-screen flex-col items-center">
 
        <Head>
        {lakasok.map((lakas) => (
          lakas.kepek.map((image, index) => (
          <link key={index} rel="preload" href={image} as="image" />
        ))))}
        </Head> 

        <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
        <Lista lakasok={lakasok}></Lista>
        <div className="w-full justify-center" id="contact"><Contact></Contact></div>
    </main>
  )
}