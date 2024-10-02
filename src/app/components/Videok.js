"use client"

const videok = [
    {
        title: "3. kerület 2 szobás 1. emeleti új építésű lakás",
        forras: "https://drive.google.com/file/d/1Vf-gmx4qRiP8kA12a2YWp2F3FBG2_EPL/preview"

    },
    {
        title: "3. kerület 3 szobás 1. emeleti, új építésű lakás",
        forras: "https://drive.google.com/file/d/1hrtEX7Ri2XtKDBmTrTW1DAk-jrytOed3/preview"

    },
    {
        title: "3. kerület penthouse lakás új építésű",
        forras: "https://drive.google.com/file/d/1JnNGN4mSrI3bOvzYLoW1B_Zq4Wage-oW/preview"

    },
    {
        title: "16. kerületi 110nm-es új építésű lakás",
        forras: "https://drive.google.com/file/d/1BBomoZNGAsNbyHLoHfdr58bGOWeB_2HQ/preview"
},
    {
        title: "17. kerület új építésű emeleti lakás",
        forras: "https://drive.google.com/file/d/1wTpbNvFLo6HrFetc7-G6fYBJA0dV2YNF/preview"
},
    {
        title: "17.kerület családi ház emeleti lakása",
        forras: "https://drive.google.com/file/d/1LpRG1_suM8SDPrgLr73mh9eMMFKl02p9/preview"
},
    {
        title: "17.kerület felújított lakás Újlak utca",
        forras: "https://drive.google.com/file/d/1e71RUQZp4F51SevepjkP79HSdbaQmVCR/preview"
},
    {
        title: "17. kerület ipari, játszóház",
        forras: "https://drive.google.com/file/d/1ozhgDuZ-wMz1CFOHdm_f44ROJAcR5BBH/preview"
    },
    {
        title: "17.kerület új építésű",
        forras: "https://drive.google.com/file/d/1exGqCrZSpIS7jU47AP-EcTK0zCRWGv_o/preview"
},
    {
        title: "17.kerület új építésű családi ház Postakocsi utca",
        forras: "https://drive.google.com/file/d/1S33JG57WnpA8ZybYa8QNSLni9IbLyasU/preview"
},
    {
        title: "Gödöllő Csanak luxus családi ház",
        forras: "https://drive.google.com/file/d/1wTpbNvFLo6HrFetc7-G6fYBJA0dV2YNF/preview"
    ,        forras: "https://drive.google.com/file/d/1r6dvPmfGx7T1H0yX8y05nzYVg5Jylou8/preview"
},
    {
        title: "Gödöllő új építésű ikerház",
        forras: "https://drive.google.com/file/d/1U6NvUBxeu-EPIkr2jMl2BtyD-uXnn918/preview"
},
    {
        title: "Gödöllő új építésű ikerház",
        forras: "https://drive.google.com/file/d/1mi0JpwYvxAWs1pMtaTXxRrDnjY9hlLhx/preview"
    },
    {
        title: "Gödöllő családi ház",
        forras: "https://drive.google.com/file/d/1aMxpsNkXYHsenjzTDTdKMoI6rJ6j4vtL/preview",
},
    {
        title: "Kartal ikerház új építésű",
        forras: "https://drive.google.com/file/d/1DDzTnucwCziw7wQsutQi3l-aG8UosLoq/preview"
}
];



export default function Videok() {
    return (
        <div className="flex min-h-screen flex-col items-center mt-20 mx-5 md:mt-40 md:mx-20">
            <h1 className='text-center text-3xl px-5 md:px-10 md:py-5 py-10'>
                Így dolgozunk mi
            </h1>
            <p className='text-center px-5'>
                Mutatunk néhányat kedvenc munkáink közül, melyek jól tükrözik
                szolgáltatásaink minőségét
            </p>
            <div className='flex flex-wrap justify-center gap-10 my-10'>
                {videok.map((video, index) => (
                    <div key={index} className='bg-white rounded-lg border p-5 w-full md:w-2/5 flex flex-col items-center'>
                        <h1 className="px-2 pb-4 text-center"><b>{video.title}</b></h1>
                        <div className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
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