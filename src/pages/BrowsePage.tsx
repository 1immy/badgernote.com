import React, { useEffect, useState } from "react";
import axios from "axios";

const BrowsePage: React.FC = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/notes/notes");
        setNotes(res.data);
      } catch (err) {
        alert("Error fetching notes.");
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="browse-page">
      <h2>Browse Notes</h2>
      {notes.length === 0 ? <p>No notes available</p> : notes.map((note: any) => (
        <div key={note.id} className="note-card">
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <a href={note.fileUrl} target="_blank" rel="noopener noreferrer">Download</a>
        </div>
      ))}
    </div>
  );
};

export default BrowsePage;