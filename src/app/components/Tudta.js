import Image from "next/image";

export default function Tudta() {
  return (
<div className="relative w-full lg:mt-20 mt-10 ">
  <div className="w-full hidden lg:block">
    <Image
      src="https://cdn.pixabay.com/photo/2023/11/13/11/51/living-room-8385326_1280.jpg"
      alt="Interior Photo"
      layout="responsive"
      width={1024}
      height={500}
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col">
      <h1 className="px-20 my-20 text-center text-3xl text-white">
        Az eddig amatőr módon feladott hirdetések ideje lejárt!
      </h1>
      <div className="mx-40 flex flex-col items-center bg-white px-20 py-10 rounded-lg">
        <p className="px-20 text-center text-xl mb-10">
          Jelenleg kínálati piac van, vagyis <b>több az eladó ingatlan, mint a vásárló</b>. Ha azt szeretné, hogy az Ön ingatlanát válasszák, akkor hirdetésének ki kell emelkednie a többi közül.
        </p>
        <div className="flex mt-10 ">
          <div className="mr-20">
            <h2 className="text-xl mb-5"><b>Ezért van ránk szüksége</b></h2>
            <ul className="list-disc list-inside px-4">
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-lg">&#10003;</span>
                Profi lakberendező által berendezett lakás
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-lg">&#10003;</span>
                Átlagból kiemelkedő hirdetési szöveg
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-lg">&#10003;</span>
                Profi fotó
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-lg">&#10003;</span>
                Drónfelvétel
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-lg">&#10003;</span>
                3D-s ingatlanséta
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl mb-5"><b>Ez már sajnos nem elég</b></h2>
            <ul className="list-none px-4">
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-lg">&#10005;</span>
                Üres, vagy átlagos berendezésű lakás
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-lg">&#10005;</span>
                Amatőr megfogalmazás
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-lg">&#10005;</span>
                Telefonos képek
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="flex items-center justify-center mt-20">
          <button className="border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            <a href="/#contact">Szeretnék kiemelkedni!</a>
          </button>
        </div>
    </div>
  </div>




      {/* Mobile Layout */}
      <div className="lg:hidden  mx-10 mt-20">
          
          
            <h1 className=" text-3xl mb-10 text-center">Az eddig amatőr módon feladott hirdetések ideje lejárt.</h1>
            <p className="  text-center mb-10">
              Jelenleg kínálati piac van, vagyis <b>több az eladó ingatlan, mint a vásárló</b>. Ha azt szeretné, hogy az Ön ingatlanát válasszák, akkor hirdetésének ki kell emelkednie a többi közül.
            </p>
            <div className="flex">
              <div className="mr-8 ">
                <h2 className=" mb-5 pt-2"><b>Ezért van ránk szüksége</b></h2>
                <ul className="list-none list-inside text-left">
                  <li className="mb-2">&#10003; Profi lakberendező által berendezett lakás</li>
                  <li className="mb-2">&#10003; Átlagból kiemelkedő hirdetési szöveg</li>
                  <li className="mb-2">&#10003; Profi fotó</li>
                  <li className="mb-2">&#10003; Drónfelvétel</li>
                  <li>&#10003; 3D-s ingatlanséta</li>
                </ul>
              </div>
              <div className="text-left">
                <h2 className=" mb-5 pt-2"><b>Ez már sajnos nem elég</b></h2>
                <ul className="list-none text-left">
                  <li className="mb-2">&#10005; Üres, vagy átlagos berendezésű lakás</li>
                  <li className="mb-2">&#10005; Amatőr megfogalmazás</li>
                  <li>&#10005; Telefonos képek</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center my-10 ">
              <button className="border border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
                <a href="/#contact">Szeretnék kiemelkedni!</a>
              </button>
            </div>
      </div>
    </div>
  );
}