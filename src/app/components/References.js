'use client'

import Image from "next/image"
import React from "react";
import { Carousel } from "react-responsive-carousel";
import MyCarousel from "./MyCarousel";

export default function References (){
    const references = [
        {
            title: "Mátyás utca",
            video: "/source",
            images: [
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
        }
    ]
    return (
        <div className="flex flex-col items-center w-full justify-center min-h-screen">
      <h1 className="text-center text-3xl px-10 md:py-5 py-3 mb-10">Így dolgozunk mi</h1>
      
      {/* Desktop layout */}
      <div className="flex  items-center mx-40">
        {references.map((reference, index) => (
          <div key={index}>
          <h1 className="text-xl my-5">{reference.title}</h1>
            {/* */}
            {/* <Image
                      src={reference.images[0]} // Assuming the first image is the main one
                      alt={reference.title}
                      height={500} // Adjust the height of the main image as needed
                      width={800} // Adjust the width of the main image as needed
                      className="rounded-lg object-cover"
                    />  */}
            {/* <Carousel
              showArrows={true}
                    showStatus={false}
                    showThumbs={true}
                    infiniteLoop={true}
                    autoPlay={true}
                    axis='horizontal'
                    selectedItem={0} // Index of the initially selected item
                    thumbWidth={80} // Adjust the width of thumbnails as needed
                    className="thumbnails-carousel items-center"
                  
              >

            {reference.images.map((image, index) => (
              <div key={index}> 
              <Image
                src={image}
                alt={reference.title}
                height= {2000}
                width= {2000}
                className="rounded-lg object-cover"
              />
              </div>
              
            ))}

            </Carousel> */}
            <MyCarousel></MyCarousel>

              {/* <div id="card" className="absolute inset-0 rounded-lg flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h1 id="title" className="absolute text-2xl text-white opacity-100 text-center">{reference.title}</h1>
                <div id="desc" className="opacity-0">
                  <h1 className="text-center text-2xl text-white">{reference.title}</h1>
                  <p className="text-white text-base text-center px-5">{reference.description}</p>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col sm:hidden gap-10 px-10 py-5 ">
        {references.map((reference, index) => (
          <div key={index} className="border rounded-lg">
            <div className="h-48 relative rounded-t-lg">
              <Image
                src={reference.imageURL}
                alt={reference.title}
                layout="fill"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl">
                {reference.title}
              </div>
            </div>
            <div className="text-center my-2 px-4">
              <p className="text-base">{reference.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
          <a href="/#contact">Érdekelnek az ingyenes szolgáltatások!</a>
        </button>
      </div>
    </div>
    )
}