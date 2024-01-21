'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function MyCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const totalSlides = images.length;
    setCurrentIndex((currentIndex + 1) % totalSlides);
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
                className={`md:rounded-lg scale-110 rounded ${currentIndex === index ? 'scale-150 mx-5' : 'md:scale-100'}`}
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
          <a href='/#contact'>Szeretném igénybe venni a szolgáltatásokat!</a>
        </button>
      </div>
      <div>
        <h1 className='text-center text-3xl px-5 md:px-10 md:py-5 py-20 mt-20'>Ügyfeleink ezt mondták rólunk
        </h1>
        <div className='flex flex-wrap justify-center gap-5 md:mt-10'>
          <div style={{ backgroundColor: 'rgb(121, 116, 112)' }} className=' md:w-auto h-50 text-white rounded-lg py-10 px-10 md:mx-40'>
            <h1 className='text-xl'>&quot;Nagyon köszönöm a gyors és körültekintő munkát. Az ingatlaneladásnál, a vásárlásnál és a bérbeadásnál egyaránt nagy segítséget jelentett az együttműködésünk. A gyors és pontos ügyintézés, a folyamatos kapcsolattartás és a megbízhatóság segítette mindegyik folyamatot.&quot;</h1>
            <p className='text-right mt-5'>
              <i>-Kis Éva</i>
            </p>
          </div>
          <div style={{ backgroundColor: 'rgb(121, 116, 112)' }} className=' md:w-auto h-50 text-white rounded-lg py-10 px-10 md:mx-40'>
            <h1 className='text-xl'>&quot;Köszönöm szépen a körültekintő munkát. A sok segítséget és figyelmességet, amit ingatlanom eladása során kaptam. A folyamatos kapcsolattartást, kitartást, a rengeteg érdeklődőt. Több ingatlan irodával is szerződésben álltam, de Zsuzsa volt az egyetlen, aki potenciális érdeklődőt, illetve vevőt hozott nekem. Senki nem tett ennyit az ügyem érdekében. Volt olyan hónap, mikor 5-6 jelölt is érkezett. Sose tétlenkedett, hanem rendesen oda tette magát, hogy az eladónak a legjobb teljesítményt nyújtsa. Köszönöm! Legközelebb is hozzá fordulok!&quot;</h1>
            <p className='text-right mt-5'>
              <i>-Gulycsi Patrícia</i>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
