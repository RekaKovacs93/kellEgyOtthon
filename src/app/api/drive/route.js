import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const key = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    key.private_key = key.private_key.replace(/\\n/g, '\n');

    console.log("Service account email:", key.client_email);

    const auth = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      ["https://www.googleapis.com/auth/drive.readonly"]
    );

    const drive = google.drive({ version: "v3", auth });

    const FOLDER_ID = "YOUR_FOLDER_ID_HERE";

    const response = await drive.files.list({
      q: `'${FOLDER_ID}' in parents and trashed=false`,
      fields: "files(id,name,mimeType,thumbnailLink,webViewLink,modifiedTime)",
      pageSize: 100
    });

    console.log("Drive API response:", response.data);

    return NextResponse.json(response.data.files);
  } catch (error) {
    console.error("Drive API error:", error);
    return NextResponse.json(
      { error: error.message, details: error.errors || error.response?.data },
      { status: 500 }
    );
  }
}
