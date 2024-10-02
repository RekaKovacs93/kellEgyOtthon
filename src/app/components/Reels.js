'use client'

const videok = [
    {
        title: "16.kerület új építésű 5 szobás lakás",
        forras: "https://drive.google.com/file/d/1vZ9C0jJ8_g20XhqBQVDXPps8R2XCmloY/preview",
        portrait: true // Landscape
    },
    {
        title: "3.kerület Penthouse lakás",
        forras: "https://drive.google.com/file/d/1aa5m0idUHphyx7FmK2nOSsbP2Er6SPMx/preview",
        portrait: true // Landscape
    },
    {
        title: "17.kerület ipari ingatlan",
        forras: "https://drive.google.com/file/d/1vihbQYj2-jLxFJAcbcKYIu994ghLMipe/preview",
        portrait: true // Landscape
    },

    {
        title: "17.kerület családi ház emeleti lakás",
        forras: "https://drive.google.com/file/d/1kZ5vfAzIbLzpsaoxqx2_HPROKa32cXK4/preview",
        portrait: true // Landscape
    },
    {
        title: "17.kerület felújított lakás Újlak utca",
        forras: "https://drive.google.com/file/d/1wVXNkPDFYYXLbNgHBAtSPo6SZCTpyO4f/preview",
        portrait: true // Landscape
    },
    {
        title: "17.kerület ipari ingatlan",
        forras: "https://drive.google.com/file/d/1uxQrnAnQQgWsfbQ_W-sez_LzvKntUksL/preview",
        portrait: true // Landscape
    },
    {
        title: "17.kerület új építésű 4 szobás földszinti lakás",
        forras: "https://drive.google.com/file/d/1uumHIIyQBqHEpT8dZX6cWJU26aBDl-h0/preview",
        portrait: true // Landscape
    },
    {
        title: "17.kerület új építésű földszinti home stagingelt lakás",
        forras: "https://drive.google.com/file/d/1dGdrx0sn9Bv-PZ1d_ssf93QO4XMxjCDL/preview",
        portrait: true // Landscape
    },
    {
        title: "17.kerület új építésű tetőteraszos lakások",
        forras: "https://drive.google.com/file/d/1SVy7gfd50oeSZwPc2QeCE-wZIoH57GsW/preview",
        portrait: true // Landscape
    },
    
    {
        title: "Gödöllő-Csanak exkluzív családi ház kertje",
        forras: "https://drive.google.com/file/d/1urqHeEnLQtb52zU5rI2At5p01mJSHMPH/preview",
        portrait: true // Landscape
    },
    {
        title: "Maglód sorházi lakás",
        forras: "https://drive.google.com/file/d/1QTPnPRO-Q8cwl36SeGDjwK4oXOo8yTNP/preview",
        portrait: true // Landscape
    },
    {
        title: "Gödöllő, családi ház kertje",
        forras: "https://drive.google.com/file/d/1Db_OCHV5knoy4xliE5SyQ-ZGEGFOMBSV/preview",
        portrait: false // Landscape
    },

    {
        title: "Marinaüpart panorámás lakás",
        forras: "https://drive.google.com/file/d/1vXoPE2jNdcReKeN5s3sfozNGDSqJEUrM/preview",
        portrait: false // Landscape
    },
    {
        title: "Zugló exkluzív lakás",
        forras: "https://drive.google.com/file/d/1Hvu6hFGqUEXgdqdVcagxLIKvRJGtNfFJ/preview",
        portrait: false // Landscape
    },
    {
        title: "Gödöllő-Csanak exkluzív családi ház",
        forras: "https://drive.google.com/file/d/1vfzaQNbPMaMdCL33mfgH_L4b0_ZOiWHu/preview",
        portrait: false // Landscape
    },
    {
        title: "17.kerület új építésű családi ház",
        forras: "https://drive.google.com/file/d/1v4xJ5Xr98RK5YMusTRzOnX-Vgg4mgjI5/preview",
        portrait: false // Landscape
    }
];

export default function Reels() {
    return (
        <div className="flex min-h-screen flex-col items-center mt-20 mx-5 md:mt-40 md:mx-20">
            <h1 className='text-center text-3xl px-5 md:px-10 md:py-5 py-10'>
                Így dolgozunk mi
            </h1>
            <p className='text-center px-5'>
                Mutatunk néhányat kedvenc munkáink közül, melyek jól tükrözik
                szolgáltatásaink minőségét
            </p>

            {/* Loop for portrait videos */}
            <div className='flex flex-wrap justify-center gap-5 my-10'>
                {videok.filter(video => video.portrait === true).map((video, index) => (
                    <div key={index} className='bg-white rounded-lg border px-5 pb-5 w-full md:w-1/4 flex flex-col items-center'>
                        <div className="h-20 px-5 flex flex-col justify-center">
                            <h1 className="px-2 text-center "><b>{video.title}</b></h1>
                        </div>
                        <div className="relative w-full" style={{ paddingTop: '177.78%' /* 9:16 for Portrait Videos */ }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                allowFullScreen
                                mozallowfullscreen="true"
                                webkitallowfullscreen="true"
                                src={video.forras}
                                preload="metadata"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Loop for landscape videos */}
            <div className='flex flex-wrap justify-center gap-5 my-10'>
                {videok.filter(video => video.portrait === false).map((video, index) => (
                    <div key={index} className='bg-white rounded-lg border p-5 w-full md:w-2/5 flex flex-col items-center'>
                        <div className="h-20 px-5">
                            <h1 className="px-2 text-center "><b>{video.title}</b></h1>
                        </div>
                        <div className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 for Landscape Videos */ }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                allowFullScreen
                                mozallowfullscreen="true"
                                webkitallowfullscreen="true"
                                src={video.forras}
                                preload="metadata"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <h1 className="text-center">
                Tekintse meg kínálatunkat az <a href="https://m-indenkinekkellegyotthon.ingatlan.com/" target="_blank"><b className="text-lg">Ingatlan.com-on &gt;&gt;</b></a>
            </h1>
        </div>
    );
}

