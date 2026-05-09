import { useState } from "react";

function NoteItem({ note, deleteNote }) {
    const [ finish, setFinish ] = useState(false);

    // สามารถกำหนดค่าใน useState แบบตรงข้ามได้เลย "!"
    const toggleFinish = () => setFinish(!finsih)

    return (
        <div className="note-container">
            <h2 style={ {textDecoration: finish ? "line-through": "", color: finish ? "gray": ""}}>{note.text}</h2>
            <button className="finish" onClick={toggleFinish}>finish</button>
            <button className="delete-btn" onClick={()=>deleteNote(note.id)}>X</button>
        </div>
    )
};

export default NoteItem;