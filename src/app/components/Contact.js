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
        <div className="absolute flex-col top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center mb-20">
        <h1 className="text-center text-3xl text-white my-20 mt-40">Lépjen kapcsolatba cegünk képviselőjével</h1>
        <div className=" bg-white rounded-lg  flex flex-col justify-center z-5">
        <div className="flex flex-col justify-center py-10 px-40">
          
          <div className="text-center justify-center">
            <h3 className="text-2xl mb-5"><b>Mezei Viktor</b></h3>
            <div className="mb-2">
              <span className="mr-2 text-3xl">&#x2709;</span>
              <span className="text-2xl">Email</span>
            </div>
            <a href="mailto:email@gmail.com" className="text-lg">
              email@gmail.com
            </a>
            <div className="mb-2 mt-10">
              <span className="mr-2 text-lg">&#128222;</span>
              <span className="text-2xl">Phone</span>
            </div>
            <p className="text-lg">+36 70 3413478</p>
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
