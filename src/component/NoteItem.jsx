import { useState } from "react";

function NoteItem({note}) {

    return (
        <div>
            <h2>{note.text}</h2>
            <button id="finish">finish</button>
            <button id="remove-card">X</button>
        </div>
    )
};

export default NoteItem;