import Image from "next/image";

export default function Tudta() {
  return (
    <div className="relative w-full mt-20">
      <div className="w-full">
        <Image
          src="https://cdn.pixabay.com/photo/2023/08/26/13/54/room-8215035_1280.jpg"
          alt="Interior Photo"
          layout="responsive"
          width={1024}
          height={500}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
          <div className="absolute w-3/4 h-3/4 bg-white z-5 flex flex-col items-center justify-center">
            <h1 className="px-20 text-center">Az eddig amatőr módon feladott hirdetések ideje lejárt.</h1>
            <p className="px-20 text-center text-lg">
              Jelenleg kínálati piac van, vagyis több az eladó ingatlan, mint a vásárló. Ha azt szeretné, hogy az Ön ingatlanát válasszák, akkor hirdetésének ki kell emelkednie a többi közül.
            </p>
            <div className="flex mt-10">
              <div className="mr-20">
                <h2 className="text-xl mb-5"><b>Ezért van ránk szüksége</b></h2>
                <ul className="list-disc list-inside px-4">
                  <li className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">&#10003;</span>
                    Profi lakberendező által berendezett lakás
                  </li>
                  <li className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">&#10003;</span>
                    Átlagból kiemelkedő hirdetési szövegs
                  </li>
                  <li className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">&#10003;</span>
                    Profi fotó
                  </li>
                  <li className="mb-2 flex items-center">
                    <span className="mr-2 text-lg">&#10003;</span>
                    Drónfelvétel
                  </li>
                  <li className="flex items-center">
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
            <div className="flex justify-center mt-12">
              <button className="border border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
                <a href="/#contact">Lepjen kapcsolatba!</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
