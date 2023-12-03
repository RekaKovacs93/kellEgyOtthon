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
        title: "Another Service",
        description: "Valami szolgaltatas ami itt le lesz irva",
        imageURL: "https://cdn.pixabay.com/photo/2023/09/10/11/58/bedroom-8244727_1280.jpg"
    }
];

export default function Services() {
    return (
      <div className="mt-20">
        <h1 className="text-center text-2xl m-12">SZOLGÁLTATÁSOK</h1>
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
                        <p className="text-white text-center px-5">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }