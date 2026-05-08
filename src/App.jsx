import { useState, useEffect } from "react";
import NoteForm from "./component/NoteForm";
import NoteItem from "./component/NoteItem";
import "./App.css";

function App() {
    const [notes, setNotes] = useState(() => {
        const getSaveNotes = localStorage.getItem("saveNotes");
        const transfromData = JSON.parse(getSaveNotes);
        return transfromData || [];
    });
    const [inputText, setInputText] = useState("");

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

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputText === "") {
            return;
        }

        addNote(inputText);
        setInputText("");
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
                handleSubmit={handleSubmit}
                inputText={inputText}
                setInputText={setInputText}
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
