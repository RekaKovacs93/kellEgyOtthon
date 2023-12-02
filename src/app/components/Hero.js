import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative w-full mt-10 mb-10">
            <div className="w-full relative">
                <Image
                    src="https://cdn.pixabay.com/photo/2023/08/26/13/54/room-8215035_1280.jpg"
                    alt="Interior Photo"
                    layout="responsive"
                    width={1024}
                    height={500}
                />
            </div>
            <div className="absolute top-0 left-0 w-1/3 h-full bg-black bg-opacity-60 flex flex-col items-center justify-center">
                <h1 className="text-white text-center text-xl mb-6"><b>Hello</b></h1>
                <p className="text-white px-8 text-lg">Itt lesz a szoveg, call to action meg ilyesmi. Itt lesz a szoveg, call to action meg ilyesmi. Itt lesz a szoveg, call to action meg ilyesmi. Itt lesz a szoveg, call to action meg ilyesmi</p>
                <button className="mt-12 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300">Lépjen kapcsolatba!</button>
            </div>
        </div>
    );
}
