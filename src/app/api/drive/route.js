import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const key = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

    const auth = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      ["https://www.googleapis.com/auth/drive.readonly"]
    );

    const drive = google.drive({ version: "v3", auth });

    const FOLDER_ID = "1uORw3OMyousz-QMAW1GaG_Ss0VcfcuF2?fbclid=IwY2xjawOWyQVleHRuA2FlbQIxMABicmlkETBzdERQRzU2WkFRVWhRcmZTc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHj4RorbbWDKxVIp-Y1n7EFxi-RJoPr45vgF6iM4KrxqAQJ8bpnMzXN1WAbAP_aem_dIP_Ttkb3sY7hAB-rpPqMA";

    const response = await drive.files.list({
      q: `'${FOLDER_ID}' in parents and trashed=false`,
      fields: "files(id,name,mimeType,thumbnailLink,webViewLink,modifiedTime)",
      orderBy: "modifiedTime desc",
      pageSize: 100
    });

    return NextResponse.json(response.data.files, {
      headers: {
        "Cache-Control": "s-maxage=300, stale-while-revalidate"
      }
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch Drive files" },
      { status: 500 }
    );
  }
}
