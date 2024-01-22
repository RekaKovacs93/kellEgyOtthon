'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function MyCarousel({ lakas }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const totalSlides = lakas.images.length;
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    const totalSlides = lakas.images.length;
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className='mx-10'>

      <p className='text-center text-lg mt-10 pb-5'>
        <b>{lakas.title}</b>
      </p>
      <div className='relative'>
        <div className='flex justify-center md:mx-10'>
          <div className='h-full w-full md:w-auto relative'>
            <Image
              src={lakas.images[currentIndex]}
              alt='kep'
              width={885}
              height={600}
              priority={true}
              className='rounded-lg'
              quality={80}
            />
          </div>
        </div>

        <button
          className='absolute top-1/2 left-2 md:left-40 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 rounded text-2xl md:text-4xl'
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className='absolute top-1/2 right-2 md:right-40 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 rounded text-2xl md:text-3xl'
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
      <div className='flex justify-center mt-5 gap-x-1 w-full md:w-800'>
        {lakas.images.map((image, index) => (
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
      <div className='flex flex-col items-center mt-10 md:hidden '>
        <iframe width={300} height={600} src={lakas.link} className='rounded-lg'></iframe>
      </div>

      <div className='hidden md:flex flex-col items-center mt-10 mb-20'>
        <iframe width={885} height={600} src={lakas.link} className='rounded-lg'></iframe>
      </div>
    </div>
  );
}
