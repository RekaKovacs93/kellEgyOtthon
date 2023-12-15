import Image from "next/image";

export default function Contact() {
  return (
    <div className="md:relative w-full md:h-1/3 md:overflow-clip mt-20">
    <div className="hidden md:block">
        <Image
          src="https://cdn.pixabay.com/photo/2023/08/26/13/54/room-8215035_1280.jpg"
          alt="Interior Photo"
          layout="responsive"
          width={1024}
          height={100}
          className="hidden md:block"
        />
        <div className="absolute flex-col top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center mb-20 ">
        <h1 className="text-center text-3xl justify-center text-white mt-40 mb-10">Lépjen kapcsolatba cegünk képviselőjével</h1>
        <div className=" bg-white rounded-lg flex justify-center z-5 mx-20">
        <div className="flex gap-x-80 justify-center items-center py-10">
        <div className=" justify-left w-2/5">
            <h3 className="text-2xl mb-5"><b>Ingyenes kozultáció</b></h3>
            <p className="text-lg">Szolgáltatásainkat egyaránt kínáljuk ingatlan eladóknak, illetve ingatlankeresőknek.Ha velünk szerződik, a kínálati piac bőségéből kiválsztjuk az ön igényeinek legmegfelelőbb ingatlant, ingatlanokat.</p>
          </div>
          
          <div className="text-right justify-right">
          <h1 className="text-2xl text-center font-bold">KELL EGY OTTHON</h1>
          <p>Ingatlanértékesítés másképp</p>
          <p className="mt-10 text-lg text-right">Mezei Viktor</p>
            <div className=" flex justify-end items-right">
            <p className="text-3xl mr-2">&#x2709;</p>
            <a href="mailto:email@gmail.com" className=" text-right mt-2 hover:underline">email@gmail.com</a>
              {/* <span className="text-2xl">Email</span> */}
            </div>
            <div className="mb-2">
              <span className=" text-right">&#128222; +36 70 3413478</span>
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
    {/* Mobile View */}
    <div className="sm:hidden mt-20 ">
        {/* <div className="bg-white rounded-lg py-8 px-4 sm:px-8"> */}
          <h3 className="text-2xl mb-5 text-center"><b>Ingyenes kozultáció</b></h3>
          <p className="text-lg text-center mx-10">Szolgáltatásainkat egyaránt kínáljuk ingatlan eladóknak, illetve ingatlankeresőknek.Ha velünk szerződik, a kínálati piac bőségéből kiválsztjuk az ön igényeinek legmegfelelőbb ingatlant, ingatlanokat.</p>
          <div className="text-right justify-center">
          <h1 className="text-2xl text-center mt-10 font-bold">KELL EGY OTTHON</h1>
          <p className="text-center">Ingatlanértékesítés másképp</p>
          <p className="mt-10 text-lg text-center">Mezei Viktor</p>
            <div className=" flex justify-center items-center">
            <p className="text-3xl mr-2">&#x2709;</p>
            <a href="mailto:email@gmail.com" className=" text-center mt-2 hover:underline">email@gmail.com</a>
              {/* <span className="text-2xl">Email</span> */}
            </div>
              <a href="tel:+447761321590" className=" text-center">&#128222; +36 70 3413478</a>
              {/* <span className="text-2xl">Phone</span> */}
            </div>
        {/* </div> */}
        <div className=" flex w-full mt-20 bg-black px-10 py-5 sm:px-8">
        {/* <div className="text-left items-center justify-center flex-grow">
                <h1 className="text-xl font-bold">KELL EGY OTTHON</h1>
            </div> */}
            <div className="text-right items-end flex-grow text-sm">
                <a href="">Adatkezelési Tájékoztató</a>
            </div>
        </div>
      </div>

    </div>
  );
}

