"use client";

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

export default function Reels() {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/drive")
      .then((res) => res.json())
      .then((data) => {
        const files = Array.isArray(data?.reelVideos)
          ? data.reelVideos
          : [];

        const formatted = files.map((file) => ({
          id: file.id,
          title: file.title,
          thumbnail: file.thumbnail,
          url: file.url,
        }));

        setReels(formatted);
      })
      .catch((err) => {
        console.error("Error fetching reel videos:", err);
        setReels([]);
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
          Reels
        </h1>

        <div className="flex flex-wrap justify-center gap-10 my-10">

          {reels.length === 0 && (
            <p className="text-center w-full text-red-500">
              Nincs elérhető Reel videó.
            </p>
          )}

          {reels.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg border p-5 w-full md:w-2/5 flex flex-col items-center"
            >
              <h2 className="px-2 pb-4 text-center">
                <b>{video.title}</b>
              </h2>

              {video.url ? (
                <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  allowFullScreen
                />
              </div>
              ) : (
                <p className="text-center text-red-500">
                  Videó nem elérhető
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
