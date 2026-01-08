// src/app/api/drive/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const FOLDER_ID = "1uORw3OMyousz-QMAW1GaG_Ss0VcfcuF2?fbclid=IwY2xjawOWyQVleHRuA2FlbQIxMABicmlkETBzdERQRzU2WkFRVWhRcmZTc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHj4RorbbWDKxVIp-Y1n7EFxi-RJoPr45vgF6iM4KrxqAQJ8bpnMzXN1WAbAP_aem_dIP_Ttkb3sY7hAB-rpPqMA"; // paste your folder ID
    const API_KEY = process.env.GOOGLE_API_KEY; // store your API key in Vercel env vars

    // Fetch files from the folder
    const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&fields=files(id,name,mimeType,webViewLink,thumbnailLink)&key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data.files);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
