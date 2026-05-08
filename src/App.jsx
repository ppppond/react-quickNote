import { useState } from "react";
import  NoteForm  from "./component/NoteForm";
import  NoteItem  from "./component/NoteItem";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

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
        {notes.map(noteItemData => (
            <NoteItem
                key={noteItemData.id}
                note={noteItemData}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
