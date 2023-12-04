const vevoData = [
    {
        title: "Személyre szabott szolgáltatás",
        description: "Tapasztalt ingatlan tanácsadóink az Ön igényeihez igazított személyre szabott szolgáltatást nyújtják. Figyelembe veszik elvárásait, költségvetését és az egyedi kívánságait, hogy segítsenek megtalálni álmai otthonát"
    },
    {
        title: "Szakmai tanácsadás",
        description: "A vásárlási folyamat minden lépésében, szakmai tanácsokkal támogatjuk Önt, hogy nyugodtan tudja meghozni a legjobb döntésket."
    },
    {
        title: "Időmegtakarítás",
        description: "Elkísérjük Önt a folyamat minden pontján, az ingatlan megtekeintéstől a birtokba vételig. Az ingatlanvásárlás folyamata sok időt és energiát igényel. Elvégezzük Ön helyett a bőséges kínálati piacról az Önnek megfelelő ingatlanok kiválasztását. Felderítjük a kiválasztott ingatlan jogi hátterét, hogy biztonságosan vásárolhasson. Kiemelten fontos, hogy olyan ingatlanba fektesse a pénzét, amiben biztonságban tudhatja. Tanácsadóink segítenek a folyamat lezajlásának zökkenőmentességében, és az adminisztratív feladatokat ellátásában. Így örömteli és minden stressztől mentes vásárlást tudunk biztosítani."
    },
    {
        title: "Jogbiztonság",
        description: "Kizárólag megfelelő jogi háttérrel rendelkező ingatlant fogunk ajánlani és az adás-vételi szerződéshez megbízható ügyvédeink rendelkezésre állnak."
    },
    {
        title: "Hitelközvetítés",
        description: "Banki háttér, amelyik bank a legjobbat kínálja lehetőségeihez képest, CSOK +1"
    },
    {
        title: "Áralku és tranzakció menedzselése",
        description: "Ügynökeink több évtizedes tapasztalattal rendelkeznek, így megfelelően tudnak segíteni Önnek a tranzakció zökkenőmentes lebonyolításában az ügylet lezárásáig."
    }
]

export default function Nyer(){
    return(
        <div className="flex flex-col items-center w-full justify-center min-h-screen">
            <h1 className="text-3xl text-center mb-10">Mit nyer vele?</h1>
            <div className="flex flex-wrap gap-4 justify-center mx-48">
                {vevoData.map((vevo, index) => (
                    <div key={index} className="relative">
                        <div className="h-48 w-48 md:h-64 md:w-64 relative">
                            <div id="card" className="absolute inset-0 rounded-lg flex flex-col items-center justify-center bg-black bg-opacity-50">
                                <h1 id="title" className="absolute text-2xl text-white opacity-100 text-center">{vevo.title}</h1>
                                <div id="desc" className="opacity-0">
                                {/* <h1 className="text-center text-2xl text-white">{vevo.title}</h1> */}
                                <p className="text-white text-base text-center px-5">{vevo.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mt-10">
                    <button className="border border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
                        <a href="/#contact">Szeretném megtalálni álmaim otthonát!</a>
                    </button>
                </div>
        </div>
    )
}