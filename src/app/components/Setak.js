"use client"
const videok = [
    {
        title: "Penthouse",
        forras: "https://www.theasys.io/viewer/rwnitMNjYQiUcfnk0xCmxiLy3GMhl1/?editing=1"
    },
    {
        title: "Kartal",
        forras: "https://www.theasys.io/viewer/RpsO4KW9uJcmqEcTxquLSCNYWwTsBX/?editing=1"
    },
    {
        title: "XVII. ker",
        forras: "https://www.theasys.io/viewer/8FApodljSz67meSh0k26qlDcAA6Sal/?editing=1"
    },
    {
        title: "Gödöllő",
        forras: "https://www.theasys.io/viewer/yT1QELKIlRz84VJCsPCxEiywFAnAmd/?editing=1"
    },
    {
        title: "XVII. ker",
        forras: "https://www.theasys.io/viewer/DzLT9YppG3NtLiliq5dmO2OtbWqnDb/?editing=1"
    },
    {
        title: "Árpádföld",
        forras: "https://www.theasys.io/viewer/nKvOrOk9glmZcw83ZhRsqab9GOnUgq/?editing=1"
    }
];



export default function Setak() {
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
                    <div key={index} className='bg-white rounded-lg border p-5 w-full md:w-4/5 flex flex-col items-center'>
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