import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative w-full mt-10">
            {/* Computer Layout */}
            <div className="w-full relative hidden md:block">
                {/* <Image
                    src="https://cdn.pixabay.com/photo/2016/06/24/11/49/architecture-1477103_1280.jpg"
                    alt="Interior Photo"
                    layout="responsive"
                    width={1024}
                    height={500}
                /> */}
                <video playbackRate="0.1" autoPlay muted loop playsInline preload="none">
                    <source src="/herovid.mp4" type="video/mp4" />
                    </video>
                <div className="absolute top-0 left-0 w-2/5 h-full bg-black bg-opacity-60 flex flex-col items-center justify-center p-12">
                    <h1 className="text-white text-center text-3xl mb-10"><b>Üdvözöljük a Mindenkinek Kell Egy Otthon honlapján!</b></h1>
                    <p className="text-white px-8 text-lg">Fedezze fel a Mindenkinek Kell Egy Otthon kivételes szolgáltatásait, és találja meg álmai otthonát velünk! Eladná ingatlanát vagy vásárolna? Forduljon hozzánk bizalommal!</p>
                    <button className="mt-5 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300"><a href="./kapcsolat">Hívjon minket most!</a></button>
                </div>
            </div>
            {/* Mobile and Tablet Layout */}
            <div className="h-screen relative md:hidden flex items-center">
                <Image
                    src="https://cdn.pixabay.com/photo/2016/06/24/11/49/architecture-1477103_1280.jpg"
                    alt="Interior Photo"
                    layout="fill"
                    objectFit="cover"
                />
                {/* <video playbackRate="0.1" autoPlay muted loop playsInline preload="none" className="h-full">
                    <source src="/herovid.mp4" type="video/mp4" />
                    </video> */}
                <div className="absolute top-0 left-0 w-full h-full bg-customBlack bg-opacity-70 flex flex-col items-center justify-center text-center px-14">
                    <h1 className="text-white text-3xl mb-6"><b>Üdvözöljük a Mindenkinek Kell Egy Otthon honlapján!</b></h1>
                    <p className="text-white text- px-4">Fedezze fel a Mindenkinek Kell Egy Otthon kivételes szolgáltatásait, és találja meg álmai otthonát velünk! Eladná ingatlanát vagy vásárolna? Forduljon hozzánk bizalommal!</p>
                    <button className="mt-6 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        <a href="./kapcsolat">Hívjon minket most!</a>
                    </button>
                </div>
            </div>

        </div>
    );
}