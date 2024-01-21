import Image from "next/image"

const vevoData = [
    {
        title: "Személyre szabott szolgáltatás",
        description: "Tapasztalatunkkal az Ön igényeihez igazított személyre szabott szolgáltatást tudunk nyújtani. Figyelembe vesszük elvárásait, költségvetését és az egyedi kívánságait, hogy segítségünkkel megtalálja álmai otthonát."
    },
    {
        title: "Időmegtakarítás",
        description: "Elkísérjük Önt a folyamat minden pontján, az ingatlan megtekintésétől a birtokbavételig. Felderítjük a kiválasztott ingatlan jogi hátterét, hogy nyugodt szívvel vásárolhasson. Segítünk a folyamat lezajlásának zökkenőmentességében, és az adminisztratív feladatok ellátásában. Így örömteli és minden stressztől mentes vásárlást tudunk biztosítani."
    },
    {
        title: "Szakmai tanácsadás",
        description: "A vásárlási folyamat minden lépésében szakmai tanácsokkal támogatjuk , hogy nyugodtan tudja meghozni a legjobb döntéseket."
    },

    {
        title: "Jogbiztonság",
        description: "Kizárólag megfelelő jogi háttérrel rendelkező ingatlant fogunk ajánlani, és az adásvételi szerződéshez megbízható ügyvédeink rendelkezésére állnak."
    },
    {
        title: "Hitelközvetítés",
        description: "Hitelközvetítés terén segítünk Önnek a legmegfelelőbb hitelajánlat megtalálásában, optimalizálva a pénzügyi lehetőségeit és egyszerűsítve a hitelbeszerzés folyamatát."
    },
    {
        title: "Áralku és tranzakció menedzselése",
        description: "Több éves tapasztalattal rendelkezünk, így megfelelően tudunk segíteni Önnek a tranzakció zökkenőmentes lebonyolításában az ügylet lezárásáig."
    }
]

export default function Nyer(){
    return(
        // <div className="flex flex-col items-center w-full justify-center min-h-screen">
    <div className="relative w-full ">
      <div className="w-full hidden lg:flex flex-col lg:flex-row">
        <Image
          src="https://cdn.pixabay.com/photo/2019/09/11/04/43/interior-design-4467768_1280.jpg"
          alt="Interior Photo"
          layout="responsive"
          width={1024}
          height={500}
        />
        <div className="absolute flex-col top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center mb-20">
            <h1 className="text-3xl text-center mb-10 text-white">Mit nyer vele?</h1>
            <div className="flex flex-wrap gap-4 justify-center">
                {vevoData.map((vevo, index) => (
                    <div key={index} className="relative">
                        <div className="h-48 w-48 lg:h-44 lg:w-96 relative bg-white rounded-lg py- flex flex-col justify-center">
                            
                                <h1 className="text-xl text-center">{vevo.title}</h1>
                                {/* <h1 className="text-center text-2xl text-white">{vevo.title}</h1> */}
                                <p className="text-sm text-center px-5">{vevo.description}</p>
                            </div>
                        </div>
                    
                ))}
            </div>
            <div className="flexx items-center justify-center mt-10">
            <button className="mt-6 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        <a href="./kapcsolat">Beköltözöm álmaim otthonába!</a>
                    </button>
                </div>
        </div>
        </div>
              {/* Mobile View */}
      <div className="lg:hidden min-h-screen">
      <div
          className=" bg-cover bg-center "
          style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2019/04/23/09/04/indoor-4148898_1280.jpg')",
          }}
        >
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-60 p-10">
        <h1 className="text-3xl text-center mb-10 text-white pt-10">Mit nyer vele?</h1>
          <div className="h-full flex flex-col justify-center items-center">
            {vevoData.map((vevo, index) => (
              <div key={index} className="bg-white rounded-lg py-8 my-2 px-4">
                <h1 className="text-xl text-center">{vevo.title}</h1>
                <p className="text-sm text-center">{vevo.description}</p>
              </div>
            ))}
          </div>
          <button className="mt-6 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            <a href="./kapcsolat">Beköltözöm álmaim otthonába!</a>
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