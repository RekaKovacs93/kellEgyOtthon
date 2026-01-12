// src/app/api/drive/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const FOLDER_ID = "1uORw3OMyousz-QMAW1GaG_Ss0VcfcuF2";
    const API_KEY = process.env.GOOGLE_API_KEY;

    if (!API_KEY) {
      return NextResponse.json([], { status: 200 });
    }

    const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&fields=files(id,name,mimeType,webViewLink,thumbnailLink)&key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    // ALWAYS return an array
    return NextResponse.json(
      Array.isArray(data.files) ? data.files : []
    );
  } catch (error) {
    console.error("Drive API error:", error);
    return NextResponse.json([], { status: 200 });
  }
}
