import Image from "next/image";

export default function About() {
    return (
        <div className="flex mt-20 mb-10 relative">
            <div className="w-2/3 mr-20 px-8 items-center">
                <h1 className="text-center text-2xl mb-12">ROLUNK</h1>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="flex justify-center">
                    <button className="mt-12 border border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Lepjen kapcsolatba!</a></button>
                </div>
            </div>
            <div className="w-2/3 relative">
                <div className="aspect-w-6 aspect-h-4">
                    <Image
                        src="https://cdn.pixabay.com/photo/2023/09/10/11/58/bedroom-8244727_1280.jpg"
                        layout="fill"
                        alt="image of bedroom"
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </div>
    );
}
