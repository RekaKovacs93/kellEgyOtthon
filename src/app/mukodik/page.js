
"use client";

import { useEffect, useState } from "react";

export default function Videok() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/api/drive")
      .then((res) => res.json())
      .then((data) => {
        // Normalize API response

        // Only include video files (skip folders)
        const videoFiles = files
          .filter(
            (file) =>
              file.mimeType &&
              file.mimeType !== "application/vnd.google-apps.folder"
          )
          .map((file) => ({
            title: file.name,
            forras: `https://drive.google.com/file/d/${file.id}/preview`,
          }));

        setVideos(videoFiles);
      })
      .catch((err) => {
        console.error("Error fetching Drive videos:", err);
        setVideos([]);
      });
  }, []);

  return (
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
        >
          <b className="text-lg">Ingatlan.com-on &gt;&gt;</b>
        </a>
      </h1>

      <div className="flex flex-wrap justify-center gap-10 my-10">
        {videos.length === 0 && (
          <p className="text-center w-full">Nincs elérhető videó.</p>
        )}
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border p-5 w-full md:w-2/5 flex flex-col items-center"
          >
            <h1 className="px-2 pb-4 text-center">
              <b>{video.title}</b>
            </h1>
            <div
              className="relative w-full"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={video.forras}
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                preload="metadata"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
