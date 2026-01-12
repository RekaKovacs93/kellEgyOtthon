import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const FOLDER_ID = "1uORw3OMyousz-QMAW1GaG_Ss0VcfcuF2";
    const API_KEY = process.env.GOOGLE_API_KEY;

    const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&fields=files(id,name,mimeType,webViewLink,thumbnailLink)&key=${API_KEY}`;
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();

    // ✅ Return the array directly instead of { files: [...] }
    return NextResponse.json(Array.isArray(data.files) ? data.files : []);
  } catch (error) {
    console.error("Drive API error:", error);
    return NextResponse.json([]);
  }
}
