'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function MyCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const totalSlides = images.length;
    setCurrentIndex((currentIndex + 1) % totalSlides);
    console.log(currentIndex);
  };

  const prevSlide = () => {
    const totalSlides = images.length;
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className='mx-10'>
      <h1 className='text-center text-3xl px-5 md:px-10 md:py-5 py-20 md:mt-40 mt-10'>
        Így dolgozunk mi
      </h1>
      <p className='text-center px-5'>
        Mutatunk néhányat kedvenc munkáink közül, melyek jól tükrözik
        szolgáltatásaink minőségét
      </p>
      <p className='text-center text-lg mt-10 pb-5'>
        <b>Mátyás tér, VIII. kerület</b>
      </p>
      <div className='relative'>
        <div className='flex justify-center md:mx-10'>
          <div className='h-full w-full md:w-auto '>
            <Image
              src={images[currentIndex]}
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
          className='absolute top-1/2 left-2 md:left-72 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 rounded text-2xl md:text-4xl'
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className='absolute top-1/2 right-2 md:right-72 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 rounded text-2xl md:text-3xl'
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
      <div className='flex justify-center mt-5 gap-x-1 w-full md:w-800'>
        {images.map((image, index) => (
          <div key={index} className='hover:scale-150 hover:border-2 border-0 border-white'>
            <button onClick={() => setCurrentIndex(index)} value={index}>
              <Image
                src={image}
                alt='kep'
                width={70}
                height={70}
                priority={true}
                className='md:rounded-lg rounded scale-110 md:scale-100'
                quality={80}
              />
            </button>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center mt-10 md:hidden'>
        <iframe width={300} height={600} src='https://ths.li/PSWyMGc' className='rounded-lg'></iframe>
      </div>

      <div className='hidden md:flex flex-col items-center mt-10'>
        <iframe width={885} height={600} src='https://ths.li/PSWyMGc' className='rounded-lg'></iframe>
      </div>

      <div className='flex items-center justify-center mt-5'>
        <button className='border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300'>
          <a href='/#contact'>EEEEN ISSSSS!</a>
        </button>
      </div>
      <div>
        <h1 className='text-center text-3xl px-5 md:px-10 md:py-5 py-20 mt-20'>
          Ügyfeleink ezt mondták rólunk
        </h1>
        <div className='flex flex-wrap justify-center gap-5 mt-10'>
          <div style={{ backgroundColor: 'rgb(121, 116, 112)' }} className='w-full md:w-80 h-50 text-white rounded-lg py-10 px-5'>
            <h1 className='text-xl'>"Legjobb szolgaltatas nagyon meg voltam elegedve, profik, kedvesek"</h1>
            <p className='text-right mt-5'>
              <i>-Vadasz Robert</i>
            </p>
          </div>
          <div style={{ backgroundColor: 'rgb(121, 116, 112)' }} className='w-full md:w-80 h-50 text-white rounded-lg py-10 px-5'>
            <h1 className='text-xl'>"Legjobb szolgaltatas nagyon meg voltam elegedve, profik, kedvesek"</h1>
            <p className='text-right mt-5'>
              <i>-Vadasz Robert</i>
            </p>
          </div>
          <div style={{ backgroundColor: 'rgb(121, 116, 112)' }} className='w-full md:w-80 h-50 text-white rounded-lg py-10 px-5'>
            <h1 className='text-xl'>"Legjobb szolgaltatas nagyon meg voltam elegedve, profik, kedvesek"</h1>
            <p className='text-right mt-5'>
              <i>-Vadasz Robert</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
