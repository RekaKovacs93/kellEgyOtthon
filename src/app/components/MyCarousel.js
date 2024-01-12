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
        <div className="relative py-20">
            <div className="flex justify-center"> 
                <div className='h-full '>
                <Image
                        src={images[currentIndex]}
                        alt="kep"
                        width={885}
                        height={591}
                        priority={true}
                        className="rounded-lg "
                        quality={80}
                    />
                </div>
            </div>

        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded" onClick={prevSlide}>❮</button>
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded" onClick={nextSlide}>❯</button>
        </div>
        <div className='flex justify-center'>
            <iframe
                width="600"
                height="450"
                src="https://ths.li/PSWyMGc"
                allowFullScreen>
            </iframe>
        </div>
    </div>
 
 
  )
  
};