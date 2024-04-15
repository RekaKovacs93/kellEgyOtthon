import Image from "next/image"
import Link from "next/link"


export default function Lista ({lakasok}){
    return (
    <div className="flex flex-col justify-center items-center mt-40">
    
    <h1>Tekintse meg kínálatunkat az <a href="https://m-indenkinekkellegyotthon.ingatlan.com/" target="_blank"><b className="text-lg">Ingatlan.com-on &gt;&gt;</b></a></h1>
    {/* <h1 className="text-center text-3xl mt-10">Álmai otthonnát keresi?</h1>
<p className="mb-10 ">Velünk garantáltan megtalálja</p>

<div className="flex h-40 mx-10 gap-8 flex-wrap mb-20 justify-center items-center bg-customBlack px-10 py-5 rounded-lg">
    <div className="flex flex-col justify-center">
        <label className="text-sm text-white m-1">Típus</label>
        <select className="h-10 w-48 border p-2 rounded-lg">
            <option> </option>
            <option>Ház</option>
            <option>Lakás</option>
            <option>Telek</option>
        </select>
    </div>
    <div className="flex flex-col justify-center">
        <label className="text-sm m-1 text-white">Település</label>
        <select name="település" className="h-10 w-48 border p-2 rounded-lg">
            <option> </option>
            <option>XIV</option>
            <option>XV</option>
            <option>XVI</option>
        </select>
    </div>
    <div className="flex flex-col justify-center">
        <label className="text-sm m-1 text-white">Irányár</label>
        <div className="flex justify-center items-center">
            <input type="text" placeholder="min" className="h-10 w-20 border p-2 rounded-lg mr-2">   
            </input>
            <p>-</p>
            <input type="text" placeholder="max" className="h-10 w-20 border p-2 rounded-lg mx-2">   
            </input>
            <p>millió Ft</p>
        </div>
    </div>
    <div className="flex flex-col justify-center">
        <label className="text-sm m-1 text-white">Méret</label>
        <div className="flex justify-center items-center">
            <input type="text" placeholder="min" className="h-10 w-20 border p-2 rounded-lg mr-2">   
            </input>
            <p>-</p>
            <input type="text" placeholder="max" className="h-10 w-20 border p-2 rounded-lg mx-2">   
            </input>
            <p className="text-white">m</p><sup>2</sup>
        </div>
    </div>
    <div className="flex flex-col justify-center">
        <label className="text-sm m-1 text-white">Szobák száma</label>
        <select name="település" className="h-10 w-20 border p-2 rounded-lg">
            <option> </option>
            <option>1 szobás</option>
            <option>2 szobás</option>
            <option>3 szobás</option>
            <option>4 szobás</option>
            <option>5 szobás</option>
            <option>6 szobás</option>
        </select>
    </div>
    <div className="flex items-center justify-center mt-6">
    <button className="border-2 border-darkgrey hover:bg-white hover:bg-opacity-25 text-white font-bold py-2 px-4 rounded-full transition duration-300">
        <a href="./">Keresés</a>
    </button>
    </div>
</div>


<div className="flex flex-wrap gap-10 justify-center mx-10 pb-20 relative">

        {lakasok.map((lakas, index) => 
        {
            return (
            <div key={index} className="border rounded-lg hover:scale-110">
            <Link href={`/ingatlanok/${encodeURIComponent(lakas.ker)}`}>
                <Image
                    alt={lakas.cim}
                    src="/heroimage.jpg"
                    width={300}
                    height={200}
                    className="rounded-t-lg"
                />
                <div className="p-5">
                    <div className="flex justify-between mb-5">
                        <h1 className=" text-lg">{lakas.cim}</h1>

                        <p className="text-lg"><b>{lakas.ar}</b></p>
                    </div>
                    <div className="flex justify-between">
                        <div className="items-center flex flex-col">
                            <p className="text-center text-sm">Alapterület</p>
                            <p><b className="text-center">{lakas.alapterulet} m<sup>2</sup></b></p>
                        </div>
                        <div className="items-center flex flex-col">
                            <p className="text-center text-sm">Telekterület</p>
                            <div><p><b className="text-center">{lakas.telekterulet} m<sup>2</sup></b></p></div>
                        </div>
                        <div className="items-center flex flex-col">
                            <p className="text-center text-sm">Szobák</p>
                            <p><b className="text-center">{lakas.szobak}</b></p>
                        </div>
                      </div>  
                    
                </div>
                </Link>
            </div>

        )})}
    
                <a className="absolute right-20 bottom-0" href="/">Következő &gt;&gt;</a>
</div> */}
    

        </div>
    
    )
}