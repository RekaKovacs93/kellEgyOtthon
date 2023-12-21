import Image from "next/image";

const servicesData = [
    {
        title: "Profi fotós",
        description: "Tapasztalt, ingatlanokra szakosodott fotós csapat készíti el a fényképeket, így otthona garantáltan kiemelkedik a többi közül.",
        imageURL: "https://cdn.pixabay.com/photo/2019/09/11/04/43/interior-design-4467768_1280.jpg",
    },
    {
        title: "Ingatlan felkészítés",
        description: "Ingatlan felkészítés szolgáltatásunkkal úgy dekoráljuk, vagy rendezzük be ingatlanát, hogy az megteremtse az otthon ellenállhatatlan vonzerejét potenciális vevői számára.",
        imageURL: "https://cdn.pixabay.com/photo/2022/04/14/13/36/bedroom-7132434_1280.jpg"
    },
    {
        title: "3D-s ingatlanséta",
        description: "A 3D-s ingatlanséta egy virtuális túra, amely lehetővé teszi a hirdetést megtekintők számára, hogy online térben sétálják körbe az ingatlanát, mintha valóságban is ott lennének. Így megtekinhetik az egész teret háromdimenziós formában.",
        imageURL: "https://cdn.pixabay.com/photo/2023/04/13/07/27/bedroom-7921915_1280.jpg"
    },
    {
        title: "Drónfelvétel",
        description: "A drónfelvételeink lenyűgöző és részletes légi nézetet biztosítanak, kiemelik az ingatlan környezetét és egyedi perspektívát nyújtanak, növelve ezzel otthonának vonzerejét és értékét.",
        imageURL: "https://cdn.pixabay.com/photo/2017/08/06/03/04/drone-2588156_1280.jpg"
    },
    {
      title: "Hivatalos értékbecslő",
      description: "Szeretnénk, hogy teljes biztonságban érezze magát az egész folyamat során. Amennyiben kétségei merülnek fel az általunk meghatározott reális eladási árral kapcsolatban, igénybe vesszük egy értékbecslő szakvéleményét is.",
      imageURL: "https://cdn.pixabay.com/photo/2023/04/13/07/27/bedroom-7921915_1280.jpg"
    },
    {
      title: "Alacsony jutalék",
      description: "Ebben is arra törekszünk, hogy partnereink elégedettek legyenek. Magasabb szintű szolgáltatást kínálunk, miközben alacsonyabb jutalékszintet számolunk fel, mint a nagy hálózatok.",
      imageURL: "https://cdn.pixabay.com/photo/2022/04/14/13/36/bedroom-7132434_1280.jpg"
    }
];

export default function Services() {
  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen">
      <h1 className="text-center  text-3xl px-10 md:py-5 py-3">Szeretné az alábbi <b>ingyenes</b> szolgáltatásokat?</h1>
      <h1 className="text-center md:text-xl md:mb-14 md:px-10">Költségei a mi pénztárcánkat terhelik!</h1>

      {/* Desktop layout */}
      <div className="hidden sm:flex flex-col sm:flex-row flex-wrap justify-center gap-x-20 gap-y-5 items-center mx-40">
        {servicesData.map((service, index) => (
          <div key={index} className=" items-center">
            <div className="h-48 w-48 md:h-64 md:w-64 relative">
              <Image
                src={service.imageURL}
                alt={service.title}
                layout="fill"
                className="rounded-lg object-cover"
              />
              <div id="card" className="absolute inset-0 rounded-lg flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h1 id="title" className="absolute text-2xl text-white opacity-100 text-center">{service.title}</h1>
                <div id="desc" className="opacity-0">
                  <h1 className="text-center text-2xl text-white">{service.title}</h1>
                  <p className="text-white text-base text-center px-5">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col sm:hidden gap-10 px-10 py-5 ">
        {servicesData.map((service, index) => (
          <div key={index} className="border rounded-lg">
            <div className="h-48 relative rounded-t-lg">
              <Image
                src={service.imageURL}
                alt={service.title}
                layout="fill"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl">
                {service.title}
              </div>
            </div>
            <div className="text-center my-2 px-4">
              <p className="text-base">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
          <a href="/#contact">Kérem az ingyenes szolgáltatásokat</a>
        </button>
      </div>
    </div>
  );
}
