import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL + "/api/notes";

const BrowsePage: React.FC = () => {
  const [notes, setNotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(API_URL);
        setNotes(response.data);
      } catch (err) {
        setError("Failed to fetch notes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="browse-page">
      <h2>Browse Notes</h2>
      {loading && <p>Loading notes...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && notes.length === 0 && <p>No notes available</p>}

      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <a href={note.fileUrl} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </div>
      ))}
    </div>
  );
};

export default BrowsePage;