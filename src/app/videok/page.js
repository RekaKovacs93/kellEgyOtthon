"use client";

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

export default function Videok() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/drive")
      .then((res) => res.json())
      .then((data) => {
        // root folder videos are in data.videos
        const files = Array.isArray(data?.videos) ? data.videos : [];

        const videoFiles = files.map((file) => ({
          id: file.id,
          title: file.title || file.name,
          url: file.url || null,
        }));

        setVideos(videoFiles);
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
    <main className="flex min-h-screen flex-col items-center">
      <NavBar class="flex flex-col items-end md:flex-row md:items-center" />

      <div className="flex min-h-screen flex-col items-center mt-20 mx-5 md:mt-40 md:mx-20">
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
            <p className="text-center w-full text-red-500">
              Nincs elérhető videó.
            </p>
          )}

          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg border p-5 w-full md:w-2/5 flex flex-col items-center"
            >
              <h2 className="px-2 pb-4 text-center">
                <b>{video.title}</b>
              </h2>

              {video.url ? (
                <div className="w-full aspect-video"> {/* 16:9 landscape */}
                  <iframe
                    className="w-full h-full"
                    src={video.url}
                    allowFullScreen
                  />
                </div>
              ) : (
                <p className="text-center text-red-500">Videó nem elérhető</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
