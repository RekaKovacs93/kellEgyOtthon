"use client"

const videok = [
    {
        title: "3. kerület 2 szobás 1. emeleti új építésű lakás",
        forras: "3. kerület 2 szobás 1. emeleti új építésű lakás.mp4"
    },
    {
        title: "3. kerület 3 szobás 1. emeleti, új építésű lakás",
        forras: "3. kerület 3 szobás 1. emeleti, új építésű lakás.mp4"
    },
    {
        title: "3. kerület penthouse lakás új építésű",
        forras: "3. kerület penthouse lakás új építésű.mp4"
    },
    {
        title: "17. kerület 60 nm-es kertkapcsolatos lakás",
        forras: "17. kerület 60 nm-es kertkapcsolatos lakás.mp4"
    },
    {
        title: "17. kerület ipari, jatszóház",
        forras: "17. kerület ipari, jatszóház.mp4"
    },
    {
        title: "17. kerület új építésű családi ház",
        forras: "17. kerület új építésű családi ház Postakocsi utca.mp4"
    },
    {
        title: "Gödöllő Csanak luxus családi ház",
        forras: "Gödöllő Csanak luxus családi ház.mp4"
    },
    {
        title: "Gödöllő, családi ház",
        forras: "herovid.mp4"
    },
    {
        title: "17. kerület 4 szobás földszinti, új építésű lakás",
        forras: "17. kerület 4 szobás földszinti, új építésű lakás.mp4"
    },
    {
        title: "17. kerület ipari gokart pálya",
        forras: "17. kerület ipari gokart pálya.mp4"
    },
    {
        title: "17. kerület ipari",
        forras: "17. kerület ipari.mp4"
    },
    {
        title: "Kartal ikerház új építésű",
        forras: "Kartal ikerház új építésű.mp4"
    }

]

export default function Videok () {
    return(
        <div className="flex min-h-screen flex-col items-center mt-40 mx-20">
            <h1 className='text-center text-3xl px-5 md:px-10 md:py-5 py-20 '>
            Így dolgozunk mi
            </h1>
            <p className='text-center px-5'>
            Mutatunk néhányat kedvenc munkáink közül, melyek jól tükrözik
            szolgáltatásaink minőségét
            </p>
            <div className='flex flex-wrap justify-center gap-10 md:w-800 my-10'>
                {videok.map((video, index) => (
                    <div key={index} className='bg-white rounded-lg border p-5 w-2/5'>
                        <h1 className="px-2 pb-4 text-lg"><b>{video.title}</b></h1>
                        <video
                                onMouseOver={event => event.target.play()}
                                onMouseOut={event => event.target.pause()}
                                playsInline
                                controls
                                src={video.forras}
                                muted
                        />
                        
                    </div>
                ))}

        </div>
        <h1>Tekintse meg kínálatunkat az <a href="https://m-indenkinekkellegyotthon.ingatlan.com/" target="_blank"><b className="text-lg">Ingatlan.com-on &gt;&gt;</b></a></h1>
        </div>
    )
} 