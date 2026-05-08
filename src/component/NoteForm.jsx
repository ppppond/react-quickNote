import { useState } from "react";

function NoteForm({addNote, handleSubmit, inputText, setInputText}){
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="input-note" className="input-note" placeholder="What do you think..." value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default NoteForm;