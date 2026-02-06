import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const FOLDER_ID = "1uORw3OMyousz-QMAW1GaG_Ss0VcfcuF2";
    const API_KEY = process.env.GOOGLE_API_KEY;

    // 1️⃣ Get all video files from Google Drive folder
    const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'video/'&fields=files(id,name,thumbnailLink)&key=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    const files = data.files || [];

    // 2️⃣ Call GDPlayer server-side for each file
    const videos = await Promise.all(
      files.map(async (file) => {
        try {
          const gdRes = await fetch("https://gdplayer.vip/api/video", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ file_id: file.id }),
          });

          const gdData = await gdRes.json();

          // Skip files without a playable stream
          if (!gdData.stream && !gdData.embed) {
            console.warn("No playable stream for file", file.id);
            return null;
          }

          return {
            id: file.id,
            title: file.name,
            thumbnail: file.thumbnailLink,
            stream: gdData.stream || gdData.embed,
          };
        } catch (err) {
          console.error("GDPlayer error for file", file.id, err);
          return null;
        }
      })
    );

    // 3️⃣ Return only valid videos
    return NextResponse.json(videos.filter(Boolean));

  } catch (error) {
    console.error("Drive API error:", error);
    return NextResponse.json([]);
  }
}
