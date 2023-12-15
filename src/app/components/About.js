import Image from "next/image";

export default function About() {
  return (
    <div className="">
      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center justify-between h-screen px-8 text-center">
        {/* <div className="text-center px-8 my-16"> */}
          <h1 className="text-3xl mt-20">
            Miben vagyunk mások, mint a többi ingatlanközvetítő cég?
          </h1>
          <p className="text-sm mb-5">
          A Kell Egy Otthon csapatának tagjai több évtizedes sikeres szakmai múlttal rendelkeznek.
Biztosak vagyunk abban, hogy az Ön ingatlanát is el fogjuk adni, ezért az ehhez szükséges extra
szolgáltatások költségét megelőlegezzük leendő jutalékunk terhére.
Vevőink számára küldetésünk, hogy megtaláljuk azt az otthont, amely tökéletesen illeszkedik
álmaikhoz és igényeikhez. Egyedi szolgáltatásainkkal és szakértelmünkkel azon dolgozunk, hogy
az ingatlanvásárlás folyamata ne csak hatékony, de örömteli és megnyugtató élmény legyen
számukra. Várjuk, hogy segíthessünk Önnek az ideális otthon megtalálásában!
          </p>
          <div className="flex justify-center mb-20 gap-x-5">
            <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="/#eladas">Eladó vagyok</a>
            </button>
            <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="/#vevo">Vevő vagyok</a>
            </button>
          </div>
        {/* </div> */}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-center min-h-screen mt-20">
        <div className="w-2/5 mx-20 px-8 py-10">
          <h1 className="text-2xl text-center mb-12">
            Miben vagyunk mások, mint a többi ingatlanközvetítő cég?
          </h1>
          <p className="text-lg text-center">
          A Kell Egy Otthon csapatának tagjai több évtizedes sikeres szakmai múlttal rendelkeznek.
Biztosak vagyunk abban, hogy az Ön ingatlanát is el fogjuk adni, ezért az ehhez szükséges extra
szolgáltatások költségét megelőlegezzük leendő jutalékunk terhére.
Vevőink számára küldetésünk, hogy megtaláljuk azt az otthont, amely tökéletesen illeszkedik
álmaikhoz és igényeikhez. Egyedi szolgáltatásainkkal és szakértelmünkkel azon dolgozunk, hogy
az ingatlanvásárlás folyamata ne csak hatékony, de örömteli és megnyugtató élmény legyen
számukra. Várjuk, hogy segíthessünk Önnek az ideális otthon megtalálásában!
          </p>
          {/* <div className="flex justify-center mt-12">
            <button className="border border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="/#contact">Lepjen kapcsolatba!</a>
            </button>
          </div> */}
          <div className="flex gap-5 justify-center mt-10">
          <div>
            <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="./elado" className="text-xl">Eladó vagyok</a>
            </button>
          </div>
          <div>
            <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="./vevo" className="text-xl">Vevő vagyok</a>
            </button>
          </div>
        </div>
        </div>
        <div className="w-2/3 relative flex justify-end">
          <div className="aspect-w-6 aspect-h-4 items-right">
            <Image
            src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg"
            alt="image of bedroom"
            width={1200} // Add width here
            height={800} // Add height here
            />
          </div>
        </div>
      </div>
    </div>
  );
}
