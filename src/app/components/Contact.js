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

     
        <h1 className="text-center text-4xl justify-center text-white mt-40 mb-40">Lépjen kapcsolatba cegünk képviselőjével</h1>
        <div className=" bg-white rounded-lg flex justify-center z-5 mx-20 px-10">
        <div className="flex gap-x-80 justify-center items-center py-10">
        <div className=" justify-left w-2/5">
            <h3 className="text-2xl mb-5"><b>Ingyenes kozultáció</b></h3>
            <p className="text-lg">Szolgáltatásainkat egyaránt kínáljuk ingatlan eladóknak, illetve ingatlankeresőknek. Ha velünk szerződik, minden tőlünk telhetőt megteszünk azért, hogy ingatlanügyletei kezelése kellemes élmény legyen az Ön számára.</p>
          </div>
          
          <div className="justify-right">
          
          <div  className="flex">
          <div className="flex flex-col items-center text-center mr-20">
            <Image
            src="/Viktor.png"
            alt="image of Viktor"
            width={120}
            height={120}
            className="rounded-full"
            style={{ borderRadius: '50%' }}
          />

          <p className="mt-5 text-lg">Mezei Viktor</p>
            {/* <div className=" flex justify-end "> */}
            {/* <p className="text-3xl mr-2">&#x2709;</p> */}
            <a href="mailto:email@gmail.com" className="mt-2 hover:underline">mezvik.platina@gmail.com</a>
              {/* <span className="text-2xl">Email</span> */}
            {/* </div> */}
            <div className="mb-2">
              <p className="">+36 70 341 3478</p>
            </div>

            </div>
          <div className="flex flex-col items-center  text-center">
          <Image
            src="/Zsuzsa.png"
            alt="image of Zsuzsa"
            width={120}
            height={120}
            className="rounded-full"
            style={{ borderRadius: '50%' }}
          />
          <p className="mt-5 text-lg">Küri Zsuzsanna</p>
            {/* <div className=" flex justify-end"> */}
            {/* <p className="text-3xl mr-2">&#x2709;</p> */}
            <a href="mailto:email@gmail.com" className="mt-2 hover:underline">kuri.zsuzsa@gmail.com</a>
              {/* <span className="text-2xl">Email</span> */}
            {/* </div> */}
            <div className="mb-2">
              <p className="">+36 70 454 8288</p>
            </div>

            </div>

          </div>
          </div>
        </div>
      </div>
      </div>
      <div className="absolute bottom-0 bg-black bg-opacity-70 flex w-screen items-center mt-20 px-14 py-10 lg:px-8">
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
        {/* <div className="bg-white rounded-lg py-8 px-4 sm:px-8"> */}
          <h3 className="text-2xl mb-5 text-center"><b>Ingyenes kozultáció</b></h3>
          <p className="text-lg text-center mx-10">Szolgáltatásainkat egyaránt kínáljuk ingatlan eladóknak, illetve ingatlankeresőknek. Ha velünk szerződik, minden tőlünk telhetőt megteszünk azért, hogy ingatlanügyletei kezelése kellemes élmény legyen az Ön számára.</p>
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
            {/* <div className=" flex justify-end "> */}
            {/* <p className="text-3xl mr-2">&#x2709;</p> */}
            <a href="mailto:email@gmail.com" className="mt-2 hover:underline">mezvik.platina@gmail.com</a>
              {/* <span className="text-2xl">Email</span> */}
            {/* </div> */}
            <div className="mb-2">
              <p className="">+36 70 341 3478</p>
            </div>

            </div>
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
            {/* <div className=" flex justify-end"> */}
            {/* <p className="text-3xl mr-2">&#x2709;</p> */}
            <a href="mailto:email@gmail.com" className="mt-2 hover:underline">kuri.zsuzsa@gmail.com</a>
              {/* <span className="text-2xl">Email</span> */}
            {/* </div> */}
            <div className="mb-2">
              <p className="">+36 70 454 8288</p>
            </div>

            </div>
            
        {/* </div> */}
        <div className=" flex w-full bg-black bg-opacity-70 mt-20 px-10 py-5 sm:px-8" >
        <div className="text-left items-center justify-center flex-grow">
                <Image
              src="/Mindenkinek.png"
                alt='kep'
                width={250}
                height={70}
                priority={true}

          />
          {/* <h1 className="text-xl font-bold">KELL EGY OTTHON</h1> */}
            </div> 
            <div className="flex text-right justify-center items-center flex-grow text-xs">
                <div className="justify-center"><a href="">Adatkezelési Tájékoztató</a></div>
            </div>
        </div>
      </div>

    </div>
  );
}

