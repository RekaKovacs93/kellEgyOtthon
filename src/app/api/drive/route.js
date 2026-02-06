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

    const driveUrl = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'video/'&fields=files(id,name,thumbnailLink)&key=${API_KEY}`;
    const driveRes = await fetch(driveUrl);
    const driveData = await driveRes.json();
    const files = driveData.files || [];

    if (!files.length) {
      return NextResponse.json([]);
    }

    // DEBUG: log files
    console.log("Files fetched from Drive:", files);

    const videos = await Promise.all(
      files.map(async (file) => {
        try {
          const gdRes = await fetch("https://gdplayer.vip/api/video", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ file_id: file.id }),
          });

          const gdText = await gdRes.text(); // <-- capture raw response
          console.log(`GDPlayer response for ${file.id}:`, gdText);

          // Try parsing JSON
          let gdData;
          try {
            gdData = JSON.parse(gdText);
          } catch (err) {
            console.error(`Failed to parse GDPlayer response for ${file.id}:`, err);
            gdData = {};
          }

          return {
            id: file.id,
            title: file.name,
            thumbnail: file.thumbnailLink,
            stream: gdData.stream || gdData.embed || null,
            rawGDPlayer: gdData, // <-- for debugging
          };
        } catch (err) {
          console.error(`GDPlayer fetch error for ${file.id}:`, err);
          return { id: file.id, title: file.name, thumbnail: file.thumbnailLink, stream: null, rawGDPlayer: null };
        }
      })
    );

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Unexpected error in /api/drive:", error);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
