import { useState, useEffect } from "react";
import NoteForm from "./component/NoteForm";
import NoteItem from "./component/NoteItem";
import "./App.css";

function App() {
    // VVV เป็นการสร้าง localStorage ผ่านการใช้ arrow function
    const [notes, setNotes] = useState(() => {
        const getSaveNotes = localStorage.getItem("saveNotes");
        const transfromData = JSON.parse(getSaveNotes);
        return transfromData || [];
    });

    useEffect(() => {
        localStorage.setItem("saveNotes", JSON.stringify(notes));
    }, [notes]);
    // create function
    const addNote = (text) => {
        const newNote = {
            id: Date.now(),
            text: text,
        };

        setNotes([...notes, newNote]);
    };

    const deleteNote = (noteTarget) => {
        // [].filter จะ ruturn มาเป็น Array ใหม่เสมอ เพราะฉะนั้น?
        const filterNote = notes.filter((note) => note.id !== noteTarget);
        // เพราะฉะนั้นเราต้องเอา array ใหม่ไปเขียนทับที่ state เลย
        setNotes(filterNote);
    };

    console.log(notes);

    return (
        <div className="container">
            <h2>Quick Note</h2>
            <NoteForm
                addNote={addNote}
            />

            <div className="list-note">
                {notes.map((noteItemData) => (
                    <NoteItem
                        key={noteItemData.id}
                        note={noteItemData}
                        deleteNote={deleteNote}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
