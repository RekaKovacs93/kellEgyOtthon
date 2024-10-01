'use client'

import { useState } from "react";import Image from "next/image";

export default function Contact() {

  const openDocInNewWindow = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className="lg:relative w-full lg:h-1/3 lg:overflow-clip mt-20">
    <div className="hidden lg:block">
        <Image
          src="https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593324_1280.jpg"
          alt="Interior Photo"
          layout="responsive"
          width={1024}
          height={100}
          className="hidden lg:block"
        />
        <div className="absolute flex-col top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center mb-20 ">
        <div className="justify-center">

     
        <h1 className="text-center text-4xl justify-center text-white mt-40 mb-20">Lépjen kapcsolatba cegünk képviselőjével</h1>
        <div className=" bg-white rounded-lg flex-col divide-y justify-center z-5 mx-20 px-10">
        <div className="flex">
        <div className="flex gap-x-60 justify-center items-center py-10">
        <div className=" justify-left w-3/5">
            <h3 className="text-2xl mb-5"><b>Ingyenes konzultáció</b></h3>
            <p className="text-lg">Szolgáltatásainkat egyaránt kínáljuk ingatlan eladóknak, illetve ingatlankeresőknek. Ha velünk szerződik, minden tőlünk telhetőt megteszünk azért, hogy ingatlanügyletei kezelése kellemes élmény legyen az Ön számára.</p>
            
            </div>
          
          <div className="justify-center ">
          
          <div  className="flex">
          <div className="flex flex-col items-center mr-30 text-center px-10">
            <Image
              src="/Zsuzsa.png"
              alt="image of Zsuzsa"
              width={120}
              height={120}
              className="rounded-full"
              style={{ borderRadius: '50%' }}
            />
            <p className="mt-5 text-lg">Küri Zsuzsanna</p>
            <a href="mailto:email@gmail.com" className="mt-2 hover:underline">kuri.zsuzsa@gmail.com</a>
            <div className="mb-2">
              <p className="">+36 70 454 8288</p>
            </div>
            
          </div>
          <div className="flex flex-col items-center text-center px-10">
            <Image
            src="/Viktor.png"
            alt="image of Viktor"
            width={120}
            height={120}
            className="rounded-full"
            style={{ borderRadius: '50%' }}
          />

            <p className="mt-5 text-lg">Mezei Viktor</p>
            <a href="mailto:email@gmail.com" className="mt-2 hover:underline">mezvik.platina@gmail.com</a>
            <div className="mb-2">
            <p className="">+36 70 341 3478</p>
            </div>
            
            </div>
            
          </div>
        
          </div>
        </div>

      </div>
      <div className="flex justify-center items-center py-5">
         
            <a href="https://www.instagram.com/mindenkinek.kell.egy.otthon?igsh=bXVhcGlxY2tjbXM4" target="_blank" className="">
            <div className="flex items-center  mr-10">
              <div><svg xmlns="http://www.w3.org/2000/svg"  height="28" viewBox="0 0 448 512"><path fill="#797470" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </div>
              <div><p className=" ml-2"><b>mindenkinek.kell.egy.otthon</b></p></div>
            </div>
            </a>
            <a href="https://www.facebook.com/mindenkinek.kell.egy.otthon" target="_blank">
            <div className="flex items-center">
              <div><svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 512 512"><path fill="#797470" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
            </div>
              <div><p className=" ml-2"><b>mindenkinek.kell.egy.otthon</b></p></div>
            </div>
            </a>
            </div>
      </div>
      
      </div>
      <div className=" absolute bottom-0 bg-black bg-opacity-70 flex w-screen items-center mt-20 px-14 py-10 lg:px-8">
            <div className="text-left items-center justify-center flex-grow">
            <Image
            src="/Mindenkinek.png"
                alt='kep'
                width={250}
                height={70}
                priority={true}
          />
          {/* <h1 className="text-xl font-bold">MINDENKINEK KELL EGY OTTHON</h1> */}
            </div>
            <div className="text-right items-end flex-grow">
            <button onClick={() => openDocInNewWindow("/AdatkezelésiTájékoztató_Ingatlanközvetítésről.pdf")} className="text-center underline mt-2 cursor-pointer">
              <p>Adatkezelési Tájékoztató</p>
            </button>
            </div>
        </div>
    </div>
    </div>
    
    {/* Mobile View */}
    <div className="lg:hidden mt-20 ">
          <h3 className="text-2xl mb-5 text-center"><b>Ingyenes konzultáció</b></h3>
          <p className="text-lg text-center mx-10">Szolgáltatásainkat egyaránt kínáljuk ingatlan eladóknak, illetve ingatlankeresőknek. Ha velünk szerződik, minden tőlünk telhetőt megteszünk azért, hogy ingatlanügyletei kezelése kellemes élmény legyen az Ön számára.</p>
          <div className="flex flex-col items-center text-center mt-20">
            <Image
              src="/Zsuzsa.png"
              alt="image of Zsuzsa"
              width={120}
              height={120}
              className="rounded-full"
              style={{ borderRadius: '50%' }}
            />
            <p className="mt-5 text-lg">Küri Zsuzsanna</p>
            <a href="mailto:email@gmail.com" className="mt-2 hover:underline">kuri.zsuzsa@gmail.com</a>
            <div className="mb-2">
              <p className="">+36 70 454 8288</p>
            </div>

            </div>
          <div className="flex flex-col items-center text-center mt-10">
            <Image
              src="/Viktor.png"
              alt="image of Viktor"
              width={120}
              height={120}
              className="rounded-full"
              style={{ borderRadius: '50%' }}
            />
            <p className="mt-5 text-lg">Mezei Viktor</p>
            <a href="mailto:email@gmail.com" className="mt-2 hover:underline">mezvik.platina@gmail.com</a>
            <div className="mb-2">
              <p className="">+36 70 341 3478</p>
            </div>
          </div>
          <div className="flex-col flex items-center py-5 border-y mx-5 mt-10">
         
            <a href="https://www.instagram.com/mindenkinek.kell.egy.otthon?igsh=bXVhcGlxY2tjbXM4" className="">
            <div className="flex items-center">
              <div><svg xmlns="http://www.w3.org/2000/svg"  height="28" viewBox="0 0 448 512"><path fill="#797470" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </div>
              <div><p className=" ml-2"><b>mindenkinek.kell.egy.otthon</b></p></div>
            </div>
            </a>
            <a href="https://www.facebook.com/mindenkinek.kell.egy.otthon">
            <div className="flex items-center mt-2">
              <div><svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 512 512"><path fill="#797470" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
            </div>
              <div><p className=" ml-2"><b>mindenkinek.kell.egy.otthon</b></p></div>
            </div>
            </a>
            </div>

            
        {/* </div> */}
        <div className=" flex w-full bg-black bg-opacity-70 mt-10 px-5 py-5 sm:px-8" >
        <div className="text-left items-center justify-center flex-grow">
                <Image
              src="/Mindenkinek.png"
                alt='kep'
                width={150}
                height={70}
                priority={true}

          />
          {/* <h1 className="text-xl font-bold">KELL EGY OTTHON</h1> */}
            </div> 
            <div className="flex text-right justify-center items-center flex-grow text-xs">
            <button onClick={() => openDocInNewWindow("/AdatkezelésiTájékoztató_Ingatlanközvetítésről.pdf")} className="text-center justify-center underline mt-2 cursor-pointer">
              <p>Adatkezelési Tájékoztató</p>
            </button>
            </div>
        </div>
      </div>

    </div>
  );
}

