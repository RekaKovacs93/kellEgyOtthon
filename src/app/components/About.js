import Image from "next/image";

export default function About() {
  return (
    <div className="">
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="relative">

        </div>
        <div className="text-center px-8 mt-5">
          <h1 className="text-2xl mb-10">
            Miben vagyunk mások, mint a többi ingatlanközvetítő cég?
          </h1>
          <p className="text-lg mb-5">
            A Kell Egy Otthon csapatának tagjai több évtizedes sikeres szakmai múlttal rendelkeznek. Biztosak vagyunk abban, hogy az Ön ingatlanát is el fogjuk adni, ezért az ehhez szükséges extra szolgáltatások költségét megelőlegezzük leendő jutalékunk terhére.
          </p>
          <div className="flex justify-center mt-5">
            <button className="border border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="/#contact">Lepjen kapcsolatba!</a>
            </button>
          </div>
          {/* <div className="aspect-w-6 aspect-h-4">
            <Image
              src="https://cdn.pixabay.com/photo/2023/09/10/11/58/bedroom-8244727_1280.jpg"
              alt="image of bedroom"
              width={600} // Add width here
                height={400} // Add height here
            />
          </div> */}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center mt-20 mb-10">
        <div className="w-2/5 mx-20 px-8">
          <h1 className="text-2xl text-center mb-12">
            Miben vagyunk mások, mint a többi ingatlanközvetítő cég?
          </h1>
          <p className="text-lg text-center">
            A Kell Egy Otthon csapatának tagjai több évtizedes sikeres szakmai múlttal rendelkeznek. Biztosak vagyunk abban, hogy az Ön ingatlanát is el fogjuk adni, ezért az ehhez szükséges extra szolgáltatások költségét megelőlegezzük leendő jutalékunk terhére.
          </p>
          {/* <div className="flex justify-center mt-12">
            <button className="border border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="/#contact">Lepjen kapcsolatba!</a>
            </button>
          </div> */}
          <div className="flex gap-5 justify-center mt-10">
          <div>
            <button className="border border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="/#about">Eladó vagyok</a>
            </button>
          </div>
          <div>
            <button className="border border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="/#about">Vevő vagyok</a>
            </button>
          </div>
        </div>
        </div>
        <div className="w-2/3 relative flex justify-end">
          <div className="aspect-w-6 aspect-h-4 items-right">
            <Image
            src="https://cdn.pixabay.com/photo/2023/09/10/11/58/bedroom-8244727_1280.jpg"
            alt="image of bedroom"
            width={600} // Add width here
            height={400} // Add height here
            />
          </div>
        </div>
      </div>
    </div>
  );
}
