"use client"

const videok = [
    {
        title: "10. ker. Óhegy",
        forras: "https://drive.google.com/file/d/1ulzzLUFPPxfUJAH-pGNAIdp5Fo_3Cqes/preview"

    },
    {
        title: "17. ker. Helikopter lakópark",
        forras: "https://drive.google.com/file/d/1-jDCDkVbXs7d-ETIVP3Xga3x5XGwrzJf/preview"

    },
    {
        title: "17. ker. Jászivány utca",
        forras: "https://drive.google.com/file/d/1b7LC6xOpsmJ5CwBuWb4d0Jdnwa9aYq3c/preview"

    },
    {
        title: "17. ker. Szabadság utca",
        forras: "https://drive.google.com/file/d/1mdUQdvT9939Jx5F5Fe0qJZl71kKz657A/preview"
},
    {
        title: "18. ker. Királyhágó lakópark",
        forras: "https://drive.google.com/file/d/14DExg2ZQp63b6UhML4hdJcDrI0Pj5HkV/preview"
},
    {
        title: "Gödöllő-panorámás ház",
        forras: "https://drive.google.com/file/d/1ECfhlqAsxkhiCMZIfJiC3y_cwx-Z06cg/preview"
},
    {
        title: "Pécel, Kond vezér utca",
        forras: "https://drive.google.com/file/d/1I0C993x8OEfj_Kj6-LlWNQk677_P_j6H/preview"
},
    {
        title: "Rendelő utca 16.ker",
        forras: "https://drive.google.com/file/d/16FJejvYu1h39sPh3XzX2kJDgWku8xWJx/preview"
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
            <h1 className="text-center">
                Tekintse meg kínálatunkat az <a href="https://iroda.ingatlan.com/m-indenkinekkellegyotthon" target="_blank"><b className="text-lg">Ingatlan.com-on &gt;&gt;</b></a>
            </h1>
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
            
        </div>
    );
}