import { useState } from "react";

function NoteItem({ note, deleteNote, finishNote, editText, }) {
    const [ inputEditText, setInputEditText ] = useState("");
    const [ isEdit, setIsEdit ] = useState(false);

    const toggleEditMode = () => {
        setIsEdit(!isEdit);
    }
    
    return (
        <div className="note-container" key={note.id}>
            <div className="display-forward">
                <h2 style={
                    {
                        display: isEdit ? "none" : "block",
                        textDecoration: note.isFinish ? "line-through": "none",
                        color: note.isFinish ? "gray" : "inherit",
                    }
                }>{note.text}</h2>
                
                { isEdit 
                    ? 
                    <div className="edit-container">
                        <input type="text" onChange={(e) => setInputEditText(e.target.value)} value={inputEditText} />
                        <button onClick={()=> {
                                editText(note.id, inputEditText);
                                setIsEdit(false);
                            }
                        }>submit</button>
                    </div>
                    : 
                    <button className="edit-btn" onClick={toggleEditMode}>edit</button>
                }
                
            </div>

            <div className="util">
                <button className="finish" onClick={() => finishNote(note.id)}>finish</button>
                <button className="del" onClick={()=>deleteNote(note.id)}>X</button>
            </div>
            
        </div>
    )
};

export default NoteItem;