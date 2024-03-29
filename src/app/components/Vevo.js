import Image from "next/image"

export default function Vevo() {
    return (
      <div className="flex items-center w-full justify-center md:min-h-screen md:mt-10">
        <div className="w-full sm:w-2/5 mx-4 sm:mx-20 px-8 items-center">
          <h1 className="text-3xl text-center mt-20 md:mt-0">Szeretne idejével spórolni?</h1>
          <h1 className="text-3xl text-center ">Szeretne nagyobb biztonsággal vásárolni?</h1>
          <h1 className="text-3xl text-center mb-10">Ha álmai otthonát keresi, velünk garantáltan megtalálja!</h1>
          <p className="text-center">Ha velünk szerződik, a kínálati piac bőségéből kiválsztjuk az ön igényeinek legmegfelelőbb ingatlant, ingatlanokat. </p>
          <div className="flex items-center justify-center mt-10">
            <button className="border-2 mb-20 md:mb-0 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="./kapcsolat">Bízzon meg bennünket!</a>
            </button>
          </div>
        </div>
        <div className="w-2/3 relative justify-end hidden md:block">
          <div className="aspect-w-6 aspect-h-4 items-right">
            <Image
            src="https://cdn.pixabay.com/photo/2023/11/06/02/20/kitchen-8368661_1280.jpg"
            alt="image of bedroom"
            width={1200} // Add width here
            height={800} // Add height here
            />
          </div>
        </div>
      </div>
    );
  }
  