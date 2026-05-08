import { useState } from "react";

function NoteItem({ note, deleteNote }) {

    return (
        <div className="note-container">
            <h2>{note.text}</h2>
            <button className="finish">finish</button>
            <button className="delete-btn" onClick={()=>deleteNote(note.id)}>X</button>
        </div>
    )
};

export default NoteItem;