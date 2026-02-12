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

        // Add orientation and aspect ratio based on width/height
        const withOrientation = files.map((file) => {
          const width = file.width || 16;
          const height = file.height || 9;
          const orientation = height > width ? "portrait" : "landscape";
          const aspectRatio = (height / width) * 100; // padding-top %

          return { ...file, orientation, aspectRatio };
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

  // Separate portrait and landscape videos
  const portraitVideos = videos.filter((v) => v.orientation === "portrait");
  const landscapeVideos = videos.filter((v) => v.orientation === "landscape");

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

        {/* Portrait videos */}
        {portraitVideos.length > 0 && (
          <div className="flex flex-wrap justify-center gap-10 my-10 w-full">
            {portraitVideos.map((video) => (
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
                    style={{ paddingTop: `${video.aspectRatio}%` }}
                  >
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
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
        )}

        {/* Landscape videos on a new line */}
        {landscapeVideos.length > 0 && (
          <div className="flex flex-wrap justify-center gap-10 my-10 w-full">
            <h2 className="w-full text-center mb-5 text-xl font-bold">
              Landscape Videos
            </h2>
            {landscapeVideos.map((video) => (
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
                    style={{ paddingTop: `${video.aspectRatio}%` }}
                  >
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
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
        )}

        {/* No videos fallback */}
        {videos.length === 0 && (
          <p className="text-center w-full text-red-500">
            Nincs elérhető séta videó.
          </p>
        )}
      </div>
    </main>
  );
}
