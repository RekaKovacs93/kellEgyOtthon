'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function MyCarousel () {

const images = [
    "/static/Matyas01.jpg",
    "/static/Matyas02.jpg",
    "/static/Matyas03.jpg",
    "/static/Matyas04.jpg",
    "/static/Matyas05.jpg",
    "/static/Matyas06.jpg",
    "/static/Matyas07.jpg",
    "/static/Matyas08.jpg",
    "/static/Matyas09.jpg",
    "/static/Matyas10.jpg",
    "/static/Matyas11.jpg"                
]    
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const totalSlides = images.length;
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    const totalSlides = images.length;
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative overflow-hidden py-40">
      <div className="flex container gap-x-10  transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index}  >
          <Image
                src={image}
                alt="kep"
                height= {2000}
                width= {2000}
                className="rounded-lg"
              />
          </div>
        ))}
      </div>

      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded" onClick={prevSlide}>❮</button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded" onClick={nextSlide}>❯</button>
    </div>
 
 
  )
  
};