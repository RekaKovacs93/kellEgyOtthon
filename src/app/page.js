"use client";

import { useEffect} from "react";

import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Hero from './components/Hero'
import About from './components/About'
import Viktor from './components/Viktor'

export default function Home() {

    // 🔥 Warm video streams on homepage load
    useEffect(() => {
      fetch("/api/drive")
        .then(res => res.json())
        .then(videos => {
          (Array.isArray(videos) ? videos : [])
            .slice(0, 3) // only first 3 videos
            .forEach(video => {
              const link = document.createElement("link");
              link.rel = "prefetch";
              link.href = video.stream;
              document.head.appendChild(link);
            });
        })
        .catch(() => {});
    }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">

      <NavBar class="flex flex-col items-end md:flex-row md:items-center"></NavBar>
      <div id="home" className="w-full h-screen relative"><Hero></Hero></div>
      <div id="about" className="md:min-h-screen  md:mt-0"><About></About></div>
      <div className="md:min-h-screen md:w-full justify-center"><Viktor></Viktor></div>
      <div className="w-full justify-center" id="contact"><Contact></Contact></div>
      
    </main>
  )
}
