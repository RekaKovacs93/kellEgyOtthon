"use client";

import { useEffect, useState } from "react";

export default function Gallery() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("/api/drive")
      .then(res => res.json())
      .then(setFiles)
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
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
