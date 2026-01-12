"use client";

import { useEffect, useState } from "react";

export default function Gallery() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("/api/drive")
      .then(res => res.json())
      .then(data => {
        // If the API returns an array, use it; otherwise fallback to []
        if (Array.isArray(data)) {
          setFiles(data);
        } else if (Array.isArray(data.files)) {
          setFiles(data.files);
        } else {
          console.warn("Unexpected API response:", data);
          setFiles([]);
        }
      })
      
      .catch(err => {
        console.error("Fetch error:", err);
        setFiles([]);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {files.length === 0 && <p>No files found.</p>}
      {files.map(file => (
        <a key={file.id} href={file.webViewLink} target="_blank" rel="noreferrer">
          {file.mimeType.startsWith("image/") ? (
            <img src={file.thumbnailLink} alt={file.name} className="w-full" />
          ) : (
            <div className="p-4 border">{file.name}</div>
          )}
        </a>
      ))}
    </div>
  );
}
