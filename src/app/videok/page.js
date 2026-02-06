"use client";

import { useEffect, useState } from "react";

export default function Videok() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api") // your updated API route that returns GDPlayer streams
      .then((res) => res.json())
      .then((data) => {
        // Ensure we have an array
        setVideos(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Error fetching Drive videos:", err);
        setVideos([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Videók betöltése...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-20 mx-5 md:mt-40 md:mx-20">
      <h1 className="text-center text-3xl px-5 md:px-10 md:py-5 py-10">
        Így dolgozunk mi
      </h1>

      <p className="text-center px-5">
        Mutatunk néhányat kedvenc munkáink közül, melyek jól tükrözik
        szolgáltatásaink minőségét
      </p>

      <h1 className="text-center">
        Tekintse meg kínálatunkat az{" "}
        <a
          href="https://iroda.ingatlan.com/m-indenkinekkellegyotthon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b className="text-lg">Ingatlan.com-on &gt;&gt;</b>
        </a>
      </h1>

      <div className="flex flex-wrap justify-center gap-10 my-10">
        {videos.length === 0 && (
          <p className="text-center w-full">Nincs elérhető videó.</p>
        )}

        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg border p-5 w-full md:w-2/5 flex flex-col items-center"
          >
            <h2 className="px-2 pb-4 text-center">
              <b>{video.title}</b>
            </h2>

            <video
              controls
              preload="metadata"
              poster={video.thumbnail}
              className="w-full rounded"
            >
              <source src={video.stream} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}
