import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative w-full mt-10 mb-10">
            {/* Computer Layout */}
            <div className="w-full relative hidden md:block">
                <Image
                    src="https://cdn.pixabay.com/photo/2023/08/26/13/54/room-8215035_1280.jpg"
                    alt="Interior Photo"
                    layout="responsive"
                    width={1024}
                    height={500}
                />
                <div className="absolute top-0 left-0 w-1/3 h-full bg-black bg-opacity-60 flex flex-col items-center justify-center">
                    <h1 className="text-white text-center text-xl mb-6"><b>Hello</b></h1>
                    <p className="text-white px-8 text-lg">Itt lesz a szoveg, call to action meg ilyesmi. Itt lesz a szoveg, call to action meg ilyesmi. Itt lesz a szoveg, call to action meg ilyesmi. Itt lesz a szoveg, call to action meg ilyesmi</p>
                    <button className="mt-12 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Lepjen kapcsolatba!</a></button>
                </div>
            </div>
            {/* Mobile and Tablet Layout */}
            <div className="w-full relative md:hidden items-center" >
                <Image
                    src="https://cdn.pixabay.com/photo/2023/08/26/13/54/room-8215035_1280.jpg"
                    alt="Interior Photo"
                    layout="responsive"
                    width={1024}
                    height={700}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col items-center justify-center text-center p-4">
                    <h1 className="text-white text-xl mb-6"><b>Hello</b></h1>
                    <p className="text-white text-sm px-4">
                        Itt lesz a szoveg, call to action meg ilyesmi. Itt lesz a szoveg, call to action meg ilyesmi. Itt lesz a szoveg, call to action meg ilyesmi. Itt lesz a szoveg, call to action meg ilyesmi
                    </p>
                    <button className="mt-6 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        <a href="/#contact">Lepjen kapcsolatba!</a>
                    </button>
                </div>
            </div>
        </div>
    );
}