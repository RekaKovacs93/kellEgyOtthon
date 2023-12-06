import Image from "next/image"

const vevoData = [
    {
        title: "Személyre szabott szolgáltatás",
        description: "Tapasztalt ingatlan tanácsadóink az Ön igényeihez igazított személyre szabott szolgáltatást nyújtják. Figyelembe veszik elvárásait, költségvetését és az egyedi kívánságait, hogy segítsenek megtalálni álmai otthonát"
    },
    {
        title: "Időmegtakarítás",
        description: "Elvégezzük Ön helyett a bőséges kínálati piacról az Önnek megfelelő ingatlanok kiválasztását. Tanácsadóink segítenek a folyamat lezajlásának zökkenőmentességében, és az adminisztratív feladatokat ellátásában."
    },
    {
        title: "Szakmai tanácsadás",
        description: "A vásárlási folyamat minden lépésében, szakmai tanácsokkal támogatjuk Önt, hogy nyugodtan tudja meghozni a legjobb döntéseket."
    },

    {
        title: "Jogbiztonság",
        description: "Kizárólag megfelelő jogi háttérrel rendelkező ingatlant fogunk ajánlani és az adás-vételi szerződéshez megbízható ügyvédeink rendelkezésre állnak."
    },
    {
        title: "Hitelközvetítés",
        description: "Amennyiben hitelre van szüksége, Banki háttér, amelyik bank a legjobbat kínálja lehetőségeihez képest, CSOK +1"
    },
    {
        title: "Áralku és tranzakció menedzselése",
        description: "Ügynökeink több évtizedes tapasztalattal rendelkeznek, így megfelelően tudnak segíteni Önnek a tranzakció zökkenőmentes lebonyolításában az ügylet lezárásáig."
    }
]

export default function Nyer(){
    return(
        // <div className="flex flex-col items-center w-full justify-center min-h-screen">
    <div className="relative w-full">
      <div className="w-full hidden sm:flex flex-col sm:flex-row">
        <Image
          src="https://cdn.pixabay.com/photo/2023/08/26/13/54/room-8215035_1280.jpg"
          alt="Interior Photo"
          layout="responsive"
          width={1024}
          height={500}
        />
        <div className="absolute flex-col top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
            <h1 className="text-3xl text-center mb-10 text-white">Mit nyer vele?</h1>
            <div className="flex flex-wrap gap-4 justify-center">
                {vevoData.map((vevo, index) => (
                    <div key={index} className="relative">
                        <div className="h-48 w-48 md:h-44 md:w-96 relative bg-white rounded-lg py- flex flex-col justify-center">
                            
                                <h1 className="text-xl text-center">{vevo.title}</h1>
                                {/* <h1 className="text-center text-2xl text-white">{vevo.title}</h1> */}
                                <p className="text-sm text-center px-5">{vevo.description}</p>
                            </div>
                        </div>
                    
                ))}
            </div>
            <div className="flex items-center justify-center mt-10">
            <button className="mt-6 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        <a href="/#contact">Kérem A Profi Segítséget!</a>
                    </button>
                </div>
        </div>
        </div>
              {/* Mobile View */}
      <div className="sm:hidden w-full min-h-screen relative mb-20">
      <div
          className="absolute bg-cover bg-center "
          style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2021/04/22/18/50/frames-6199828_1280.jpg')",
          }}
        >
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-80 p-10">
        <h1 className="text-3xl text-center mb-10 text-white pt-10">Mit nyer vele?</h1>
          <div className="h-full flex flex-col justify-center items-center">
            {vevoData.map((vevo, index) => (
              <div key={index} className="bg-white py-8 my-2 px-4">
                <h1 className="text-xl text-center">{vevo.title}</h1>
                <p className="text-sm text-center">{vevo.description}</p>
              </div>
            ))}
          </div>
          <button className="mt-6 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            <a href="/#contact">Kérem A Profi Segítséget!</a>
          </button>
        </div>
      </div>
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