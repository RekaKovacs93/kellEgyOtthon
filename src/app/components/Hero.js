import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative w-full mt-10">
            {/* Computer Layout */}
            <div className="w-full relative hidden md:block">
                <Image
                    src="https://cdn.pixabay.com/photo/2023/08/26/13/54/room-8215035_1280.jpg"
                    alt="Interior Photo"
                    layout="responsive"
                    width={1024}
                    height={500}
                />
                <div className="absolute top-0 left-0 w-2/5 h-full bg-black bg-opacity-60 flex flex-col items-center justify-center p-12">
                    <h1 className="text-white text-center text-3xl mb-10"><b>Üdvözöljük a Kell Egy Otthon honlapján!</b></h1>
                    <p className="text-white px-8 text-lg">Fedezze fel a Kell Egy Otthon kivételes szolgáltatásait és találja meg álmai otthonát velünk! Kérdése van vagy személyre szabott segítségre van szüksége? Forduljon hozzánk bizalommal!
</p>
                    <button className="mt-5 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Lepjen kapcsolatba!</a></button>
                </div>
            </div>
            {/* Mobile and Tablet Layout */}
            {/* Mobile and Tablet Layout */}
            <div className="h-screen relative md:hidden flex items-center">
                <Image
                    src="https://cdn.pixabay.com/photo/2023/08/26/13/54/room-8215035_1280.jpg"
                    alt="Interior Photo"
                    layout="fill" // Use layout="fill" to fill the container
                    objectFit="cover" // Maintain aspect ratio and cover the container
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col items-center justify-center text-center p-14">
                    <h1 className="text-white text-xl mb-6"><b>Üdvözöljük a Kell Egy Otthon honlapján!</b></h1>
                    <p className="text-white text-sm px-4">Fedezze fel a Kell Egy Otthon kivételes szolgáltatásait és találja meg álmai otthonát velünk! Kérdése van vagy személyre szabott segítségre van szüksége? Forduljon hozzánk bizalommal!</p>
                    <button className="mt-6 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        <a href="/#contact">Lepjen kapcsolatba!</a>
                    </button>
                </div>
            </div>

        </div>
    );
}