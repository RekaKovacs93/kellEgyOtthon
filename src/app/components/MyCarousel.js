'use client'

import React, { useState} from 'react';
import Image from 'next/image';


// const images = [
//     "/Matyas01.jpg",
//     "/Matyas02.jpg",
//     "/Matyas03.jpg",
//     "/Matyas04.jpg",
//     "/Matyas05.jpg",
//     "/Matyas06.jpg",
//     "/Matyas07.jpg",
//     "/Matyas08.jpg",
//     "/Matyas09.jpg",
//     "/Matyas10.jpg",
//     "/Matyas11.jpg"                
// ]

export default function MyCarousel ({images}) {



  const [currentIndex, setCurrentIndex] = useState(0);

//   const showSlide = (index) => {
//     setCurrentIndex(index);
//   };

  const nextSlide = () => {
    const totalSlides = images.length;
    setCurrentIndex((currentIndex + 1) % totalSlides);
    console.log(currentIndex)
  };

  const prevSlide = () => {
    const totalSlides = images.length;
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };



  return (
    <div className=''>
        <h1 className="text-center text-3xl px-10 md:py-5 py-40 mt-40">Így dolgozunk mi</h1>
        <p className='text-center'>Mutatunk néhányat kedvenc munkáink közül, melyek jól tükrözik szolgáltatásaink minőségét</p>
        <p className='text-center text-lg mt-20 pb-5'><b>Mátyás tér, VIII. kerület</b></p>
        <div className="relative">
        
            <div className="flex justify-center"> 
                <div className='h-full'>
                <Image
                        src={images[currentIndex]}
                        alt="kep"
                        width={885}
                        height={600}
                        priority={true}
                        className="rounded-lg "
                        quality={80}
                    />
                </div>
            </div>

        <button className="absolute top-1/2 left-72 transform -translate-y-1/2  bg-white bg-opacity-50 text-white p-2 rounded text-4xl" onClick={prevSlide}>❮</button>
        <button className="absolute top-1/2 right-72 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 rounded text-3xl" onClick={nextSlide}>❯</button>
        </div>
        <div className='flex justify-center mt-5 gap-x-3'>
            {images.map((image, index) => (
                <div key={index} className='hover:scale-150 hover:border-2 border-0 border-white'>
                <button onClick={() => setCurrentIndex(index)} value={index}>
                    <Image
                        src={image}
                        alt="kep"
                        width={70}
                        height={70}
                        priority={true}
                        className="rounded-lg "
                        quality={80}
                    />
                </button>
                </div>
        
            ))}
        </div>
        <div className='flex flex-col items-center mt-20'>
        {/* <p className='text-lg mb-5'>Ingatlanséta</p> */}
            <iframe
                width={885}
                height={600}
                src="https://ths.li/PSWyMGc"
                className='rounded-lg'
                >
            </iframe>
        </div>
    </div>
 
 
  )
  
};