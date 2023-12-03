import Image from "next/image";

const servicesData = [
    {
        title: "Profi Fotós",
        description: "Profi fotós fotózza be az ingatlanát, hogy már a képek alapján is ellenállhatatlan legyen.",
        imageURL: "https://cdn.pixabay.com/photo/2019/09/11/04/43/interior-design-4467768_1280.jpg",
    },
    {
        title: "Home Staging",
        description: "Úgy csinosítjuk az otthonát, vagy úgy bútorozzuk be, hogy beleszeretős harmóniát teremtsünk.",
        imageURL: "https://cdn.pixabay.com/photo/2022/04/14/13/36/bedroom-7132434_1280.jpg"
    },
    {
        title: "3D-s Ingatlanséta",
        description: "Virtuálisan körbesétálhatóvá tesszük az ingatlanát, hogy minden részletét megismerhessék a megtekintés előtt",
        imageURL: "https://cdn.pixabay.com/photo/2023/04/13/07/27/bedroom-7921915_1280.jpg"
    },
    {
        title: "Drónfelvétel",
        description: "Ha szükséges drónt is bevetünk, hogy az ingatlan környékét is be tudjuk mutatni.",
        imageURL: "https://cdn.pixabay.com/photo/2023/09/10/11/58/bedroom-8244727_1280.jpg"
    }
];

export default function Services() {
    return (
      <div className="mt-20 items-center w-full">

        <h1 className="text-center text-3xl">Szeretné az alábbi <b>ingyenes</b> szolgáltatásokat?</h1>
        <h1 className="text-center text-xl mb-10">Költségei a mi pénztárcánkat terhelik!</h1>
        <div className="flex flex-wrap gap-4">
          {servicesData.map((service, index) => (
            <div key={index} className="relative">
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
        <div className="flex justify-center mt-12">
            <button className="border border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="/#contact">Lepjen kapcsolatba!</a>
            </button>
          </div>
      </div>
    );
  }