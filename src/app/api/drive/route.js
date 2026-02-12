import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 300;

const DRIVE_FOLDER_MIME = "application/vnd.google-apps.folder";

// Recursively fetch all video files
async function fetchVideos(folderId, apiKey, collected = []) {
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id,name,thumbnailLink,mimeType)&key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();
  const items = data.files || [];

  for (const item of items) {
    // If folder → recurse
    if (item.mimeType === DRIVE_FOLDER_MIME) {
      await fetchVideos(item.id, apiKey, collected);
    }
    // If video → store
    else if (item.mimeType?.startsWith("video/")) {
      collected.push(item);
    }
  }

  return collected;
}

export async function GET() {
  try {
    const FOLDER_ID = "1uORw3OMyousz-QMAW1GaG_Ss0VcfcuF2";
    const API_KEY = process.env.GOOGLE_API_KEY;

    if (!API_KEY) {
      return NextResponse.json(
        { error: "Missing Google API key" },
        { status: 500 }
      );
    }

    // Fetch videos from Drive (recursive)
    const files = await fetchVideos(FOLDER_ID, API_KEY);

    if (!files.length) {
      return NextResponse.json([]);
    }

    // Format for frontend
    const videos = files.map((file) => ({
      id: file.id,
      title: file.name,
      thumbnail: file.thumbnailLink || null,
      url: `https://drive.google.com/file/d/${file.id}/preview`,
    }));

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Drive API error:", error);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
