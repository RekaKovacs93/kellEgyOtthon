export default function References (){
    return (
        <div>
            <div className='flex items-center justify-center mt-5'>
                <button className='border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300'>
                    <a href='./kapcsolat'>Szeretném igénybe venni a szolgáltatásokat!</a>
                </button>
            </div>
            <div>
                <h1 className='text-center text-3xl px-5 md:px-10 md:py-5 py-20 mt-20'>Ügyfeleink ezt mondták rólunk
                </h1>
                <div className='flex flex-wrap justify-center gap-5 md:mt-10'>
                    <div style={{ backgroundColor: 'rgb(121, 116, 112)' }} className=' md:w-auto h-50 text-white rounded-lg py-10 px-10 md:mx-40'>
                        <h1 className='text-xl'>&quot;Nagyon köszönöm a gyors és körültekintő munkát. Az ingatlaneladásnál, a vásárlásnál és a bérbeadásnál egyaránt nagy segítséget jelentett az együttműködésünk. A gyors és pontos ügyintézés, a folyamatos kapcsolattartás és a megbízhatóság segítette mindegyik folyamatot.&quot;</h1>
                        <p className='text-right mt-5'>
                        <i>-Kis Éva</i>
                        </p>
                    </div>
                    <div style={{ backgroundColor: 'rgb(121, 116, 112)' }} className=' md:w-auto h-50 text-white rounded-lg py-10 px-10 md:mx-40'>
                        <h1 className='text-xl'>&quot;Köszönöm szépen a körültekintő munkát. A sok segítséget és figyelmességet, amit ingatlanom eladása során kaptam. A folyamatos kapcsolattartást, kitartást, a rengeteg érdeklődőt. Több ingatlan irodával is szerződésben álltam, de Zsuzsa volt az egyetlen, aki potenciális érdeklődőt, illetve vevőt hozott nekem. Senki nem tett ennyit az ügyem érdekében. Volt olyan hónap, mikor 5-6 jelölt is érkezett. Sose tétlenkedett, hanem rendesen oda tette magát, hogy az eladónak a legjobb teljesítményt nyújtsa. Köszönöm! Legközelebb is hozzá fordulok!&quot;</h1>
                        <p className='text-right mt-5'>
                        <i>-Gulycsi Patrícia</i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}