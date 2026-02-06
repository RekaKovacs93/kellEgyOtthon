import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 300; // cache 5 minutes

export async function GET() {
  try {
    const FOLDER_ID = "1uORw3OMyousz-QMAW1GaG_Ss0VcfcuF2";
    const API_KEY = process.env.GOOGLE_API_KEY;

    const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'video/'&fields=files(id,name,thumbnailLink)&key=${API_KEY}`;

    const res = await fetch(url, {
      next: { revalidate: 300 }
    });

    const data = await res.json();
    const files = data.files || [];

    // Call GDPlayer for each file to get a playable stream
    const videos = await Promise.all(
      files.map(async (file) => {
        const gdRes = await fetch("https://gdplayer.vip/api/video", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ file_id: file.id }),
        });
        const gdData = await gdRes.json();

        return {
          id: file.id,
          title: file.name,
          stream: gdData.stream || gdData.embed, // playable URL
          thumbnail: file.thumbnailLink
        };
      })
    );
    console.log("Videos from GDPlayer:", videos);


    return NextResponse.json(videos);

  } catch (error) {
    console.error("Drive API error:", error);
    
    return NextResponse.json([]);
  }
}
