import Image from "next/image";

const hitelek = ["Lakáshitel", "Személyi Kölcsön", "Bankszámla", "Megtakarítások", "CSOK +", "Babaváró Hitel" ]

export default function Hitel(){
    return(
    <div className="relative w-full justify-center">
      <div className="w-full hidden sm:flex flex-col mt-20 items-center">
            <h1 className="text-3xl text-center mb-5">Vágjon bele az első ingatlanába akár 10% önerővel!</h1>
            <p className="text-lg mb-10 mx-20 text-center">Pénzügyi szolgáltatásainkkal teljes körű támogatást nyújtunk, segítünk hitele intézésében és minden pénzügyi részletben. Építse fel álmai otthonát könnyedén velünk!</p>
            <div className="flex flex-wrap gap-4 justify-center">
                {hitelek.map((hitel, index) => (
                    <div key={index} className="relative">
                        <div className="h-48 w-48 md:h-44 md:w-96 relative bg-white rounded-lg py- flex flex-col justify-center">
                                <h1 className="text-xl text-center">{hitel}</h1>
                                {/* <h1 className="text-center text-2xl text-white">{vevo.title}</h1> */}
                            </div>
                        </div>
                    
                ))}
            </div>
            <div className="flex items-center justify-center mt-10">
            <button className="mt-6 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        <a href="/#contact">Elindulok az otthonvásárlás útján!</a>
                    </button>
                </div>
        </div>
              {/* Mobile View */}
      <div className="sm:hidden w-full min-h-screen relative mb-20">
        <h1 className="text-3xl text-center mb-10 text-white pt-10">Vágjon bele az első ingatlanába akár 10% önerővel!</h1>
        <p>Pénzügyi szolgáltatásainkkal teljes körű támogatást nyújtunk, segítünk hitele intézésében és minden pénzügyi részletben. Építse fel álmai otthonát könnyedén velünk!</p>
          <div className="h-full flex flex-col justify-center items-center">
            {hitelek.map((hitel, index) => (
              <div key={index} className="bg-white py-8 my-2 px-4">
                <h1 className="text-xl text-center">{hitel}</h1>
              </div>
            ))}
          </div>
          <button className="mt-6 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            <a href="/#contact">Elindulok az otthonvásárlás útján!</a>
          </button>
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