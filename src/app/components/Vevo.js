import Image from "next/image"

export default function Vevo() {
    return(
        <div className="flex  items-center w-full justify-center min-h-screen">
            <div className="w-2/5 mx-20 px-8 items-center">
                <h1 className="text-2xl text-center mb-10">Szeretne idejével spórolni? Szeretne nagyobb biztonsággal vásárolni?</h1>
                <p className="text-center">Szolgáltatásainkat egyaránt kínáljuk ingatlan eladóknak, illetve ingatlankeresőknek.Ha velünk szerződik, a kínálati piac bőségéből kiválsztjuk az ön igényeinek legmegfelelőbb ingatlant, ingatlanokat. </p>
                {/* <h1 className="text-3xl text-center"></h1> */}
                <div className="flex items-center justify-center mt-10">
                    <button className="border border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
                        <a href="/#contact">Bízzon meg bennünket!</a>
                    </button>
                </div>
            </div>  
            <div className="w-2/3 relative flex justify-end">
                <div className="aspect-w-6 aspect-h-4 items-right">
                    <Image
                    src="https://cdn.pixabay.com/photo/2023/09/10/11/58/bedroom-8244727_1280.jpg"
                    alt="image of bedroom"
                    width={600} // Add width here
                    height={400} // Add height here
                    />
                </div>
            </div>
        </div>
    )
}