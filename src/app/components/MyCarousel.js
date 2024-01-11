'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function MyCarousel () {

const images = [
    "/static/Matyas01-min.jpg",
    "/static/Matyas02-min.jpg",
    "/static/Matyas03-min.jpg",
    "/static/Matyas04-min.jpg",
    "/static/Matyas05-min.jpg",
    "/static/Matyas06-min.jpg",
    "/static/Matyas07-min.jpg",
    "/static/Matyas08-min.jpg",
    "/static/Matyas09-min.jpg",
    "/static/Matyas10-min.jpg",
    "/static/Matyas11-min.jpg"                
]    
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
    <div className="relative overflow-hidden py-40">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {/* {images.map((image, index) => ( */}
          <div className='h-screen'>
          <Image
                src={images[currentIndex]}
                alt="kep"
                layout='fill'
                className="rounded-lg object-cover"
              />
          </div>
        {/* ))} */}
      </div>

      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded" onClick={prevSlide}>❮</button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded" onClick={nextSlide}>❯</button>
    </div>
 
 
  )
  
};