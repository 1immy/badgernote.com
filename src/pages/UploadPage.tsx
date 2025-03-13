import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL + "/api/notes/upload-note";

const UploadPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    setLoading(true);
    setMessage("");

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Please login first.");
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        API_URL,
        { title, description, fileUrl },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("Note uploaded successfully!");
      setTitle("");
      setDescription("");
      setFileUrl("");
    } catch (err) {
      setMessage("Error uploading note. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-page">
      <h2>Upload a Note</h2>
      {message && <p>{message}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="File URL"
        value={fileUrl}
        onChange={(e) => setFileUrl(e.target.value)}
      />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default UploadPage;