'use client'
import Image from "next/image"
import { useState } from "react";




export default function Listaelem({lakas}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showIframe, setShowIframe] = useState(false);

    const nextSlide = () => {
    const totalSlides = lakas.kepek.length;
    setCurrentIndex((currentIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
    const totalSlides = lakas.kepek.length;
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
    };

    const handleToggleIframe = () => {
        setShowIframe(!showIframe);
      };


    return (
        <div className="flex flex-col justify-center items-center mt-40 mx-16">
            <div className="flex gap-10">
                <div className="bg-white rounded-lg border p-10">
                    <h1 className="text-3xl ml-1">{lakas.cim}</h1>
                    <div className="flex my-5 gap-2 relative">
                        <Image
                            alt={lakas.cim}
                            src={lakas.kepek[0]}
                            width={800}
                            height={600}
                            className="rounded-lg"
                        />
                        <div className="flex flex-col gap-2">
                        <Image
                            alt={lakas.cim}
                            src={lakas.kepek[1]}
                            width={400}
                            height={300}
                            className="rounded-lg"
                        />
                        <Image
                            alt={lakas.cim}
                            src={lakas.kepek[2]}
                            width={400}
                            height={300}
                            className="rounded-lg"
                        />
                        <div className="absolute right-0 bottom-0 bg-customBlack text-white p-2 rounded-lg opacity-90 cursor-pointer" onClick={handleToggleIframe}>
                            +{lakas.kepek.length - 3} fotó
                        </div>
                  </div>
                  
                </div>
                <div className='flex flex-col items-center'>
                    <iframe width={1210} height={600} src={lakas.seta} className='rounded-lg'></iframe>
                </div>
                {showIframe && (
                    <div className="fixed top-0 left-0 w-full h-full bg-customBlack bg-opacity-80 z-50 flex justify-center items-center ">
                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                            <button className="absolute top-5 right-5 z-50 text-white p-2 rounded-full text-xl" onClick={handleToggleIframe}>
                                X
                            </button>
                            <div className="w-full relative">
                                <div className='flex justify-center  md:mx-10'>
                                    <div className='h-full w-full md:w-auto relative'>
                                        <Image
                                            src={lakas.kepek[currentIndex]}
                                            alt='kep'
                                            width={885}
                                            height={600}
                                            priority={true}
                                            className='rounded-lg'
                                            quality={80}
                                        />
                                    </div>
                                </div>

                                <button className='absolute top-1/2 left-0 md:left-40 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 rounded text-2xl md:text-4xl' onClick={prevSlide}>
                                    ❮
                                </button>
                                <button className='absolute top-1/2 right-0 md:right-40 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 rounded text-2xl md:text-3xl' onClick={nextSlide}>
                                    ❯
                                </button>
                            </div>
                            <div className='flex justify-center mt-5 gap-x-1 w-full md:w-800'>
                                {lakas.kepek.map((image, index) => (
                                    <div key={index} className='hover:scale-150 hover:border-2 border-0 border-white'>
                                        <button onClick={() => setCurrentIndex(index)} value={index}>
                                            <Image
                                                src={image}
                                                alt='kep'
                                                width={70}
                                                height={70}
                                                priority={true}
                                                className={`md:rounded-lg scale-110 rounded ${currentIndex === index ? 'scale-150 mx-5' : 'md:scale-100'}`}
                                                quality={80}
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                    )}
                    
                </div>
                
                
            </div>
            <div className="flex items-center justify-center py-5 border rounded-lg w-full bg-white mt-5">
                    <div className="flex flex-col items-center px-20 border-r">
                    <p>Ár</p>
                    <p className="text-2xl mt-2">{lakas.ar}</p>
                </div>
                <div className="flex flex-col items-center px-20 border-r">
                    <p>Alapterület</p>
                    <p className="text-2xl mt-2">{lakas.alapterulet} m<sup>2</sup></p>
                </div>
                <div className="flex flex-col items-center px-20 border-r">
                    <p>Telekterület</p>
                    <p className="text-2xl mt-2">{lakas.telekterulet} m<sup>2</sup></p>
                </div>
                <div className="flex flex-col items-center  px-20">
                    <p>Szobák</p>
                    <p className="text-2xl mt-2">{lakas.szobak}</p>
                </div>
                </div>
            <div className=" py-8 border rounded-lg bg-white mt-5 px-16 ">
                <div>
                    <h1 className="text-xl mb-5"><b>Leírás</b></h1>
                    <p className="w-">{lakas.leiras}</p>
                </div>                         
            </div>    
        </div>
    )
}