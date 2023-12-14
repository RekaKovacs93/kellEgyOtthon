import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative w-full h-1/3 overflow-clip mt-20">
        <Image
          src="https://cdn.pixabay.com/photo/2023/08/26/13/54/room-8215035_1280.jpg"
          alt="Interior Photo"
          layout="responsive"
          width={1024}
          height={100}
        />
        <div className="absolute flex-col top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center mb-20 ">
        <h1 className="text-center text-3xl justify-center text-white mt-40 mb-10">Lépjen kapcsolatba cegünk képviselőjével</h1>
        <div className=" bg-white rounded-lg flex justify-center z-5 mx-20">
        <div className="flex gap-x-80 justify-center items-center py-10">
        <div className=" justify-left w-1/4">
            <h3 className="text-2xl mb-5"><b>Ingyenes kozultáció</b></h3>
            <p className="text-lg">Szolgáltatásainkat egyaránt kínáljuk ingatlan eladóknak, illetve ingatlankeresőknek.Ha velünk szerződik, a kínálati piac bőségéből kiválsztjuk az ön igényeinek legmegfelelőbb ingatlant, ingatlanokat.</p>
          </div>
          
          <div className="text-right justify-right">
            <h3 className="text-xl mb-5">Mezei Viktor</h3>
            <div className="mb-2 flex">
            <p className="text-3xl mr-2">&#x2709;</p>
            <a href="mailto:email@gmail.com" className="text-lg mt-1">email@gmail.com</a>
              {/* <span className="text-2xl">Email</span> */}
            </div>
            <div className="mb-2">
              <span className="mr-2 text-lg">&#128222; +36 70 3413478</span>
              {/* <span className="text-2xl">Phone</span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-screen mt-20 bg-black px-14 py-10 md:px-8">
            <div className="text-left items-center justify-center flex-grow">
                <h1 className="text-xl font-bold">KELL EGY OTTHON</h1>
            </div>
            <div className="text-right items-end flex-grow">
                <a href="">Adatkezelési Tájékoztató</a>
            </div>
        </div>
    </div>
    </div>
  );
}
