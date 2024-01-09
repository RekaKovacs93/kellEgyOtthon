import Image from "next/image"

export default function References (){
    const references = [
        {
            title: "Mátyás utca",
            video: "/source",
            images: [
                "/source", "/source", "/source"
            ]
        },
        {
            title: "Mátyás utca",
            video: "/source",
            images: [
                "/source", "/source", "/source"
            ]
        },
        {
            title: "Mátyás utca",
            video: "/source",
            images: [
                "/source", "/source", "/source"
            ]
        }
    ]
    return (
        <div className="flex flex-col items-center w-full justify-center min-h-screen">
      <h1 className="text-center  text-3xl px-10 md:py-5 py-3">Így dolgozunk mi</h1>
      
      {/* Desktop layout */}
      <div className="hidden sm:flex flex-col sm:flex-row flex-wrap justify-center gap-x-20 gap-y-5 items-center mx-40">
        {references.map((reference, index) => (
          <div key={index} className=" items-center">
          <h1>{reference.title}</h1>
            <div className="h-48 w-48 md:h-64 md:w-64 relative">
              <Image
                src={reference.imageURL}
                alt={reference.title}
                layout="fill"
                className="rounded-lg object-cover"
              />
              <div id="card" className="absolute inset-0 rounded-lg flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h1 id="title" className="absolute text-2xl text-white opacity-100 text-center">{reference.title}</h1>
                <div id="desc" className="opacity-0">
                  <h1 className="text-center text-2xl text-white">{reference.title}</h1>
                  <p className="text-white text-base text-center px-5">{reference.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col sm:hidden gap-10 px-10 py-5 ">
        {references.map((reference, index) => (
          <div key={index} className="border rounded-lg">
            <div className="h-48 relative rounded-t-lg">
              <Image
                src={reference.imageURL}
                alt={reference.title}
                layout="fill"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl">
                {reference.title}
              </div>
            </div>
            <div className="text-center my-2 px-4">
              <p className="text-base">{reference.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
          <a href="/#contact">Érdekelnek az ingyenes szolgáltatások!</a>
        </button>
      </div>
    </div>
    )
}