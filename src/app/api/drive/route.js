import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 300;

export async function GET() {
  try {
    const FOLDER_ID = "1uORw3OMyousz-QMAW1GaG_Ss0VcfcuF2"; // your Drive folder
    const API_KEY = process.env.GOOGLE_API_KEY;

    if (!API_KEY) {
      console.error("Google API key is missing");
      return NextResponse.json({ error: "Missing Google API key" }, { status: 500 });
    }

    // Fetch all video files from Google Drive
    const driveUrl = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&fields=files(id,name,thumbnailLink,mimeType)&key=${API_KEY}`;
    const driveRes = await fetch(driveUrl);
    const driveData = await driveRes.json();
    const files = driveData.files || [];

    if (!files.length) {
      return NextResponse.json([]);
    }

    console.log("Files fetched from Drive:", files);

    // Call GDPlayer for each file
    const videos = await Promise.all(
      files.map(async (file) => {
        let streamUrl = null;
        let embedUrl = null;

        // Only try GDPlayer for video files
        if (file.mimeType && file.mimeType.startsWith("video/")) {
          try {
            const gdRes = await fetch("https://gdplayer.vip/api/video", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ file_id: file.id }),
            });

            const gdData = await gdRes.json();

            // GDPlayer returns either stream or embed
            streamUrl = gdData.stream || null;
            embedUrl = gdData.embed || null;
          } catch (err) {
            console.error(`GDPlayer fetch failed for file ${file.id}:`, err);
          }
        }

        // Always return a safe URL for frontend
        return {
          id: file.id,
          title: file.name,
          thumbnail: file.thumbnailLink || null,
          // Use GDPlayer stream if available, otherwise embed (iframe)
          url: streamUrl || embedUrl || `https://drive.google.com/file/d/${file.id}/preview`,
          isEmbed: !streamUrl, // tells frontend if this is an iframe fallback
        };
      })
    );

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Unexpected error in /api/drive:", error);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
