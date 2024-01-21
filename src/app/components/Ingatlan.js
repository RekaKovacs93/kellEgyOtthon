import Image from "next/image";

export default function Ingatlan() {
  return (
    <div className="relative w-full md:mt-20 ">        
        <div className="z-5 flex-col items-center hidden md:flex">
        <h1 className="px-20 text-center text-3xl mb-20">Ingatlana eladása valószínűleg élete egyik legnagyobb pénzügyi döntése lesz!</h1>
            <p className="px-20 text-center mx-20">
            Egy otthon eladása a tulajdonos számára gyakran érzelmi kihívásokkal jár. Sok esetben az érzelmi kötődés miatt hajlamosak vagyunk túlbecsülni otthonunk értékét, vagy éppen nem megfontoltan reagálni az elképzelésünktől eltérő  vételi ajánlatra, mert az az önérzetünket érinti. Ezek a tényezők az eladási folyamat hatékonyságát csökkentik. Professzionális segítségünkkel lehetőség van a tárgyilagos megközelítésre és az érzelmi tényezők kiszűrésére az árképzésnél. Továbbá, segítünk az ingatlan optimalizált bemutatásában, növelve ezzel az érdeklődők számát, és hatékonyan kezeljük az alku folyamatot, hogy a tulajdonos a lehető legjobb ajánlatot kapja. Emellett jogi problémák is felmerülhetnek, például hiányzó vagy hibás dokumentáció  és számtalan egyéb buktató. Szolgáltatásunk részeként gondoskodunk arról, hogy a tulajdonost elkerülje az esetleges jogi kihívásokat. Széles vevőkörrel rendelkezünk, így nem csak hirdetés, hanem ajánlás útján is hatékony az értékesítésünk.
            </p>
            <div className="flex mt-10">
            <div>
                <ul className="list-none px-4 text-xl">
                  <li className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">&#10005;</span>
                    Érzelmi bevonódás
                  </li>
                  <li className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">&#10005;</span>
                    Tárgyalási megakadások
                  </li>
                  <li className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">&#10005;</span>
                    Jogi problémák
                  </li>
                  <li className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">&#10005;</span>
                    Korlátozott érdeklődői kör
                  </li>
                </ul>
              </div>
              <div className="mr-20">
                <ul className="list-disc list-inside px-4 text-xl">
                  <li className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">&#10003;</span>
                    Objektív szemlélet
                  </li>
                  <li className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">&#10003;</span>
                    Tárgyalási rutin
                  </li>
                  <li className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">&#10003;</span>
                    Jogi segítség
                  </li>
                  <li className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">&#10003;</span>
                    Széles kapcsolati háló
                  </li>
                </ul>
              </div>
              
            </div>
            <div className="flex justify-center mt-12">
              <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
                <a href="./contact">Kérem a profi segítséget!</a>
              </button>
            </div>
          </div> 

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen mx-5">
          
            <h1 className=" text-3xl text-center mb-10">Ingatlana eladása valószínűleg élete egyik legnagyobb pénzügyi döntése lesz</h1>
            <p className=" px-4 mb-10">
            Egy otthon eladása a tulajdonos számára gyakran érzelmi kihívásokkal jár. Sok esetben az érzelmi kötődés miatt hajlamosak vagyunk túlbecsülni otthonunk értékét, vagy éppen nem megfontoltan reagálni az elképzelésünktől eltérő  vételi ajánlatra, mert az az önérzetünket érinti.
            </p>
            <p className=" px-4 mb-10 text-center">
            <b>Ezek a tényezők az eladási folyamat hatékonyságát csökkentik.</b>
            </p>
            <p className=" px-4 mb-10">
            Professzionális segítségünkkel lehetőség van a tárgyilagos megközelítésre és az érzelmi tényezők kiszűrésére az árképzésnél. Továbbá, segítünk az ingatlan optimalizált bemutatásában, növelve ezzel az érdeklődők számát, és hatékonyan kezeljük az alku folyamatot, hogy a tulajdonos a lehető legjobb ajánlatot kapja.
            </p>
            <p className=" px-4 mb-10">
            Emellett jogi problémák is felmerülhetnek, például hiányzó vagy hibás dokumentáció  és számtalan egyéb buktató. Szolgáltatásunk részeként gondoskodunk arról, hogy a tulajdonost elkerülje az esetleges jogi kihívásokat. Széles vevőkörrel rendelkezünk, így nem csak hirdetés, hanem ajánlás útján is hatékony az értékesítésünk.
            </p>
            <div className="flex mx-5">
              <div>
                <ul className="list-none px-2 text-left">
                  <li className="mb-2">&#10005; Érzelmi bevonódás</li>
                  <li className="mb-2">&#10005; Tárgyalási megakadások</li>
                  <li className="mb-2">&#10005; Jogi problémák</li>
                  <li className="mb-2">&#10005; Korlátozott érdeklődői kör</li>
                </ul>
              </div>
              <div className="mr-6">
                <ul className="list-none list-inside text-left">
                  <li className="mb-2">&#10003; Objektív szemlélet</li>
                  <li className="mb-2">&#10003; Tárgyalási rutin</li>
                  <li className="mb-2">&#10003; Jogi segítség</li>
                  <li className="mb-2">&#10003; Széles kapcsolati háló</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center my-10">
              <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
                <a href="./kapcsolat">Kérem a profi segítséget!</a>
              </button>
            </div>
      </div>
    </div>
  );
}