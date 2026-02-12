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
        const files = Array.isArray(data?.setak) ? data.setak : [];

        // Add orientation based on thumbnail ratio (fallback if no width/height info)
        const withOrientation = files.map((file) => {
          let orientation = "landscape"; // default

          if (file.thumbnail) {
            // Extract width/height from Google Drive thumbnail URL if possible
            // Usually URLs contain =sXXX or =wXXX-hXXX
            const match = file.thumbnail.match(/=w(\d+)-h(\d+)/);
            if (match) {
              const width = parseInt(match[1], 10);
              const height = parseInt(match[2], 10);
              orientation = height > width ? "portrait" : "landscape";
            }
          }

          return { ...file, orientation };
        });

        // Sort: portrait first, then landscape
        withOrientation.sort((a, b) => {
          if (a.orientation === b.orientation) return 0;
          return a.orientation === "portrait" ? -1 : 1;
        });

        setVideos(withOrientation);
      })
      .catch((err) => {
        console.error("Error fetching Setak videos:", err);
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
          Séták
        </h1>
        <p className="text-center px-5">
          Mutatunk néhányat kedvenc munkáink közül, melyek jól tükrözik
          szolgáltatásaink minőségét
        </p>

        <div className="flex flex-wrap justify-center gap-10 my-10">
          {videos.length === 0 && (
            <p className="text-center w-full text-red-500">
              Nincs elérhető séta videó.
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
                <div
                  className="relative w-full"
                  style={{
                    paddingTop: video.orientation === "portrait" ? "177.78%" : "56.25%",
                  }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
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
