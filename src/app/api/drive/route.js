import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 300; // cache 5 minutes

export async function GET() {
  try {
    const FOLDER_ID = "1uORw3OMyousz-QMAW1GaG_Ss0VcfcuF2"; // your folder ID
    const API_KEY = process.env.GOOGLE_API_KEY;

    // 1️⃣ Fetch all video files in the folder
    const driveUrl = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'video/'&fields=files(id,name,thumbnailLink)&key=${API_KEY}`;

    const driveRes = await fetch(driveUrl);
    const driveData = await driveRes.json();

    const files = driveData.files || [];

    if (!files.length) {
      return NextResponse.json([]);
    }

    // 2️⃣ Call GDPlayer for each file on the server
    const videos = await Promise.all(
      files.map(async (file) => {
        try {
          const gdRes = await fetch("https://gdplayer.vip/api/video", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ file_id: file.id }),
          });

          const gdData = await gdRes.json();

          return {
            id: file.id,
            title: file.name,
            thumbnail: file.thumbnailLink,
            stream: gdData.stream || gdData.embed || null, // playable stream
          };
        } catch (err) {
          console.error(`GDPlayer error for file ${file.id}:`, err);
          return null;
        }
      })
    );

    // 3️⃣ Filter out any failed streams
    // const validVideos = videos.filter((v) => v && v.stream);

    // return NextResponse.json(validVideos);
  } catch (error) {
    console.error("Drive API error:", error);
    return NextResponse.json([]);
  }
}
