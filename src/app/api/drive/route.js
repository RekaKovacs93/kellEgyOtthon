import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 300;

export async function GET() {
  try {
    const FOLDER_ID = "1uORw3OMyousz-QMAW1GaG_Ss0VcfcuF2";
    const API_KEY = process.env.GOOGLE_API_KEY;

    if (!API_KEY) {
      console.error("Google API key is missing");
      return NextResponse.json({ error: "Missing Google API key" }, { status: 500 });
    }

    // Fetch video files from Google Drive
    const driveUrl = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'video/'&fields=files(id,name,thumbnailLink)&key=${API_KEY}`;
    const driveRes = await fetch(driveUrl);

    if (!driveRes.ok) {
      const errText = await driveRes.text();
      console.error("Drive API error:", errText);
      return NextResponse.json({ error: "Failed to fetch Drive files" }, { status: driveRes.status });
    }

    const driveData = await driveRes.json();
    const files = driveData.files || [];

    if (!files.length) {
      return NextResponse.json([]); // No files, return empty array
    }

    // Get GDPlayer streams for each file
    const videos = await Promise.all(
      files.map(async (file) => {
        try {
          const gdRes = await fetch("https://gdplayer.vip/api/video", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ file_id: file.id }),
          });

          if (!gdRes.ok) {
            console.error(`GDPlayer error for ${file.id}:`, await gdRes.text());
            return null;
          }

          const gdData = await gdRes.json();

          return {
            id: file.id,
            title: file.name,
            thumbnail: file.thumbnailLink,
            stream: gdData.stream || gdData.embed || null,
          };
        } catch (err) {
          console.error(`GDPlayer fetch error for ${file.id}:`, err);
          return null;
        }
      })
    );

    // Filter out failed streams
    const validVideos = videos.filter((v) => v && v.stream);

    return NextResponse.json(validVideos);
  } catch (error) {
    console.error("Unexpected error in /api/drive:", error);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
