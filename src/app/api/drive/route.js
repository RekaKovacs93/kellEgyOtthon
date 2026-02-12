import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 300;

const FOLDER_MIME = "application/vnd.google-apps.folder";

/**
 * Recursively walks Google Drive folders
 * and categorizes videos into:
 *  - videos (root folder)
 *  - reelVideos
 *  - setak
 */
async function walkFolder(
  folderId,
  apiKey,
  result,
  currentFolder = "",
  isRoot = false
) {
  // Include videoMediaMetadata to get width/height
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id,name,thumbnailLink,mimeType,videoMediaMetadata)&key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();
  const items = data.files || [];

  for (const item of items) {
    // Folder → recurse
    if (item.mimeType === FOLDER_MIME) {
      await walkFolder(item.id, apiKey, result, item.name.toLowerCase(), false);
    } 
    // Video file
    else if (item.mimeType?.startsWith("video/")) {
      const width = item.videoMediaMetadata?.width || null;
      const height = item.videoMediaMetadata?.height || null;

      const video = {
        id: item.id,
        title: item.name,
        thumbnail: item.thumbnailLink || null,
        url: `https://drive.google.com/file/d/${item.id}/preview`,
        width,
        height,
      };

      // ROOT videos
      if (isRoot) result.videos.push(video);
      // Reel folder
      else if (currentFolder.includes("reel")) result.reelVideos.push(video);
      // Setak folder
      else if (currentFolder.includes("setak")) result.setak.push(video);
      // Fallback → treat as root video
      else result.videos.push(video);
    }
  }
}

export async function GET() {
  try {
    const FOLDER_ID = "1uORw3OMyousz-QMAW1GaG_Ss0VcfcuF2";
    const API_KEY = process.env.GOOGLE_API_KEY;

    if (!API_KEY) {
      return NextResponse.json({ error: "Missing Google API key" }, { status: 500 });
    }

    const result = {
      videos: [],
      reelVideos: [],
      setak: [],
    };

    // Start walking from root folder
    await walkFolder(FOLDER_ID, API_KEY, result, "", true);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Drive API error:", error);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
