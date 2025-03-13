import React, { useState } from "react";
import axios from "axios";

const UploadPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const handleUpload = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/notes/upload-note",
        { title, description, fileUrl },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Note uploaded!");
    } catch (err) {
      alert("Error: " + err.response.data.message);
    }
  };

  return (
    <div className="upload-page">
      <h2>Upload a Note</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="File URL" value={fileUrl} onChange={(e) => setFileUrl(e.target.value)} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadPage;