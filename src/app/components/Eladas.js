import Image from "next/image";

export default function Eladas() {
  return (
    <div className="">
      {/* Mobile View */}
      <div className="lg:hidden flex flex-col items-center justify-between min-h-screen px-8 ">
        {/* <div className="text-center px-8 my-16"> */}
          <h1 className="text-3xl my-10 text-center mt-20">
          Egy ingatlan eladása teljes munkaidős állás
          </h1>
          <p className=" text-center mb-10">
          Amikor valaki úgy dönt, hogy saját maga szeretné eladni ingatlanát általában nem látja előre, hogy mennyi időbfektetéssel és stresszel jár. Kínálati piac van, tehát <b>több az eladó ingatlan, mint a vásárló.</b> Ha nem cselekszik azonnal a vevő továbbáll, hívja a következőt. 
          </p>
          <p className="text-lg"><b>Ehhez azonban az kell hogy…</b></p>
          <ul className="list-disc list-inside mt-5 mb-10">
                <li>Mindig telefonközelben legyen</li>
                <li>Annak az árán is fel kell vennie, hogy napi többször kizökken a munkájából</li>
                <li>Minden alkalommal haza kell sietnie, meg kell szakítania megbeszéléseit, amikor valaki látni akarja otthonát</li>
                <li>Alkalmazkodnia kell az érdeklődőkhöz, mert ha nem tudja azonnal megmutatni az ingatlant, akkor nézik a következőt</li>
                <li>Egy hosszú munkanap végén, illetve hétvégén is rendelkezésre kell állnia a jelentkezőknek. Ez a folyamat akár hónapokig is elhúzódhat</li>
                <li>Ki kell tudnia szűrni az ingatlanturistákat és a nem megfelelő pénzügyi háttérrel rendelkezőket, hogy ne veszítse el miattuk az igazi vevőt. </li>
              </ul>
          <p className="text-lg"><b>Miért forduljon inkább hozzánk?</b></p>
        <ul className="list-disc list-inside mt-5">
            <li>A hét minden napján rendelkezésre állunk</li>
            <li>Kiszűrjük az ingatlanturistákat</li>
            <li>Kizárólag megfelelő pénzügyi háttérrel rendelkező érdeklődőt viszünk otthonába</li>
            <li>Feltesszük azokat a kérdéseket, amelyek relevánsak lehetnek az érdeklődőknek, a hirdetési szövegen túl, így csak a megfelelő vevőjelöltet visszük az ingatlanhoz</li>
            <li>Ha ránk bízza ingatlana eladásának menedzselését az eladási idő jelentősen rövidebb lesz</li>
            <li>Ingatlanát áralku nélkül, vagy azt minimálisra csökkentve tudjuk eladni</li>
        </ul>
          <div className="flex justify-center my-10">
            <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="/#contact">Kérem A Szakértői Támogatást</a>
            </button>
          </div>
        {/* </div> */}
      </div>

      {/* Desktop View */}
      <div className="relative w-full my-20">
      <div className="hidden lg:flex items-center justify-center min-h-screen"
          style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2023/11/21/11/38/table-8403065_1280.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
      {/* <Image
          src="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg"
          alt="Interior Photo"
          // layout="responsive"
          fill="true"
        /> */}
        <div className="absolute flex-col top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center px-20">
        {/* <div className="absolute w-3/4 1/2 bg-white z-5 flex flex-col items-center p-20"> */}
          <h1 className="text-3xl text-center mb-10 text-white">
          Egy ingatlan eladása teljes munkaidős állás
          </h1>
          <p className="text-lg text-center text-white mb-10">
          Amikor valaki úgy dönt, hogy saját maga szeretné eladni ingatlanát általában nem látja előre, hogy mennyi időbfektetéssel és stresszel jár. Kínálati piac van, tehát több az eladó ingatlan, mint a vásárló. Ha nem cselekszik azonnal a vevő továbbáll, hívja a következőt. 
          </p>
          <div className="flex gap-10 mb-5">
          <div className=" bg-white z-5 w-3/5 flex rounded-lg flex-col items-center px-10 py-5">
          <p className="text-lg mb-5"><b>Ehhez azonban az kell hogy...</b></p>
          <ul className="list-disc list-inside">
                <li>Mindig telefonközelben legyen</li>
                <li>Annak az árán is fel kell vennie, hogy napi többször kizökken a munkájából</li>
                <li>Minden alkalommal haza kell sietnie, meg kell szakítania megbeszéléseit, amikor valaki látni akarja otthonát</li>
                <li>Alkalmazkodnia kell az érdeklődőkhöz, mert ha nem tudja azonnal megmutatni az ingatlant, akkor nézik a következőt</li>
                <li>Egy hosszú munkanap végén, illetve hétvégén is rendelkezésre kell állnia a jelentkezőknek. Ez a folyamat akár hónapokig is elhúzódhat</li>
                <li>Ki kell tudnia szűrni az ingatlanturistákat és a nem megfelelő pénzügyi háttérrel rendelkezőket, hogy ne veszítse el miattuk az igazi vevőt. </li>
              </ul>
          </div>
          <div className=" bg-white z-5 w-3/5 flex rounded-lg flex-col items-center px-10 py-5 justify-center">
          <p className="text-lg mb-5"><b>Miért forduljon inkább hozzánk?</b></p>
          <ul className="list-disc list-inside">
                <li>A hét minden napján rendelkezésre állunk</li>
                <li>Kiszűrjük az ingatlanturistákat</li>
                <li>Kizárólag megfelelő pénzügyi háttérrel rendelkező érdeklődőt viszünk otthonába</li>
                <li>Feltesszük azokat a kérdéseket, amelyek relevánsak lehetnek az érdeklődőknek, a hirdetési szövegen túl, így csak a megfelelő vevőjelöltet visszük az ingatlanhoz</li>
                <li>Ha ránk bízza ingatlana eladásának menedzselését az eladási idő jelentősen rövidebb lesz</li>
                <li>Ingatlanát áralku nélkül, vagy azt minimálisra csökkentve tudjuk eladni</li>
              </ul>
          </div>
          </div>
          <p className="text-white text-center mt-10">Ha velünk szerződik olyan minőségi, hatékony szolgáltatásban lesz része, hogy ingatlana a legjobb áron és a legrövidebb időn belül kerül eladásra. Levesszünk Önről az ezzel járó terheket, így értékes idejét és energiáját, másra tudja fordítani. Szaktudásunkkal menedzseljük a folyamatot a kezdetektől a birtokbaadásig. Szándékunk, hogy az ingatlan eladása ne csupán hatékony, hanem örömteli folyamat is legyen az Ön számára. </p>
          <div className="flex gap-5 justify-center mt-5">
          <div>
          <button className="mt-5 border-2 border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Kérem A Szakértői Támogatást</a></button>
          </div>
        </div>
        </div>
        </div>
        {/* <div className="w-2/3 relative flex justify-end">
          <div className="aspect-w-6 aspect-h-4 items-right">
            <Image
            src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg"
            alt="image of bedroom"
            width={1200} // Add width here
            height={800} // Add height here
            />
          </div>
        </div> */}
      </div>
    </div>
    // </div>
  );
}
