'use client'

import { useState } from "react";

const hitelek = ["Lakáshitel", "Személyi Kölcsön", "Bankszámla", "Megtakarítások", "CSOK + *", "Babaváró Hitel" ]

export default function Hitel(){

  const [selectedUrl, setSelectedUrl] = useState('');

    return (
    <div className="relative w-full min-h-screen md:justify-center">
      <div className="w-full hidden sm:flex flex-col mt-20 items-center">
            <h1 className="text-3xl text-center mb-10">Vágjon bele az első ingatlanába akár 10% önerővel!</h1>
            <p className="text-xl mb-10 mx-40 text-center">Pénzügyi szolgáltatásainkkal teljes körű támogatást nyújtunk, segítünk hitele intézésében és minden pénzügyi részletben. Építse fel álmai otthonát könnyedén velünk!</p>
            <div className="flex flex-wrap gap-4 justify-center mx-40">
                {hitelek.map((hitel, index) => (
                    <div key={index} style={{ backgroundColor: "rgb(121, 116, 112)" }} className="relative rounded-lg">
                        <div className="h-48 w-48 md:h-44 md:w-72 relative rounded-lg py- flex flex-col justify-center">
                                <h1 className="text-2xl text-white text-center">{hitel}</h1>
                                {/* <h1 className="text-center text-2xl text-white">{vevo.title}</h1> */}
                            </div>
                        </div>
                    
                ))}
            </div>
            <p className="mt-5">* További informaciókért kattintson <button onClick={() => setSelectedUrl("https://www.portfolio.hu/bank/20240102/megerkezett-a-csok-plusz-2024-es-feltetelek-tablazatok-reszletek-egy-helyen-660543")} className="text-center underline mt-2 cursor-pointer">
            <b>IDE</b>
          </button></p>
            <div className="flex items-center justify-center mt-10">
            <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="./contact">Elindulok az otthonvásárlás útján!</a>
            </button>
          </div>
          {selectedUrl && (
        <div className="overlay" onClick={() => setSelectedUrl('')}>
          <div className="modal">
            <iframe title="Popup" width={1000} height={400} src={selectedUrl}></iframe>
          </div>
        </div>
      )}
        </div>
              {/* Mobile View */}
      <div className="sm:hidden mt-10 mx-10">
        <h1 className="text-3xl text-center mb-10 ">Vágjon bele az első ingatlanába akár 10% önerővel!</h1>
        <p className="text-center mb-5">Pénzügyi szolgáltatásainkkal teljes körű támogatást nyújtunk, segítünk hitele intézésében és minden pénzügyi részletben. Építse fel álmai otthonát könnyedén velünk!</p>
          <div className="h-full flex flex-col justify-center items-center">
            {hitelek.map((hitel, index) => (
              <div key={index} style={{ backgroundColor: "rgb(121, 116, 112)" }} className="rounded-lg w-60 py-8 my-2 px-4">
                <h1 className="text-xl text-center text-white">{hitel}</h1>
              </div>
            ))}
          </div>
          <p className="mt-5">* További informaciókért kattintson <button onClick={() => setSelectedUrl("https://www.portfolio.hu/bank/20240102/megerkezett-a-csok-plusz-2024-es-feltetelek-tablazatok-reszletek-egy-helyen-660543")} className="text-center underline mt-2 cursor-pointer">
            <b>IDE</b>
          </button></p>
            <div className="flex items-center justify-center mt-10">
            <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="./contact">Elindulok az otthonvásárlás útján!</a>
            </button>
          </div>
          {selectedUrl && (
        <div className="overlay" onClick={() => setSelectedUrl('')}>
          <div className="modal">
            <iframe title="Popup" width={250} height={400} src={selectedUrl}></iframe>
          </div>
        </div>
      )}

      </div>
    </div>
  );
}
       

        {/* <div className="absolute inset-0 overflow-hidden">
          {/* <Image
            src="https://cdn.pixabay.com/photo/2021/04/22/18/50/frames-6199828_1280.jpg"
            alt="Interior Photo"
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          /> 
        </div> */}