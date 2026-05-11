import { useState } from "react";

function NoteItem({ note, deleteNote, finishNote, isEdit, checkEditBtn, editText, displayEditTag }) {
    const [ inputEditText, setInputEditText ] = useState("");
    // const grabTarget = note.id;
    
    return (
        <div className="note-container">
            <div className="display-forward">
                <h2 style={
                    {
                        display: isEdit ? "none" : "block",
                        textDecoration: note.isFinish ? "line-through": "none",
                        color: note.isFinish ? "gray" : "inherit",
                    }
                }>{note.text}</h2>
                { isEdit ? "": <button className="edit-btn" onClick={checkEditBtn}>edit</button>}
                {/* { note.id == grabTarget ? <button className="edit-btn" onClick={checkEditBtn}>edit</button>: ""} */}
                { isEdit ? 
                    <div className="edit-container">
                        <input type="text" onChange={(e) => setInputEditText(e.target.value)} value={inputEditText} />
                        <button onClick={()=>editText(note.id, inputEditText)}>submit</button>
                    </div>: ""}
                
            </div>

            <div className="util">
                <button className="finish" onClick={() => finishNote(note.id)}>finish</button>
                <button className="del" onClick={()=>deleteNote(note.id)}>X</button>
            </div>
            
        </div>
    )
};

export default NoteItem;