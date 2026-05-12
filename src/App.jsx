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
    const [ isClick, setIsClick ] = useState(false);

    useEffect(() => {
        localStorage.setItem("saveNotes", JSON.stringify(notes));
    }, [notes]);


    // create function
    const addNote = (text) => {
        const newNote = {
            id: Date.now(),
            text: text,
            isFinish: false,
        };

        setNotes([...notes, newNote]);
    };

    const deleteNote = (noteTarget) => {
        // [].filter จะ ruturn มาเป็น Array ใหม่เสมอ เพราะฉะนั้น?
        const filterNote = notes.filter((note) => note.id !== noteTarget);
        // เพราะฉะนั้นเราต้องเอา array ใหม่ไปเขียนทับที่ state เลย
        setNotes(filterNote);
    };

    const finishNote = (noteTarget) => {
        // VVV map วนสร้าง note ตัวใหม่และ update ข้อมูลใหม่ไปเลย
        const updateNoteFinish = notes.map((note) => {
            if (note.id === noteTarget) {
                // VVV อันนี้เป็นการกาง object ทั้งหมดออกมาแล้ว update ค่าเป้าหมายของเราเข้าไปแทน
                return {...note, isFinish: !note.isFinish}
            } else {
                // VVV return note (object) ตัวเดิมกลับไป
                return note;
            }
        });

        // ยัด updateNoteFinish ลงไปใน state เพื่อกำหนดเป็น array ใหม่ไปเลย
        setNotes(updateNoteFinish);
    }

   

    const editText = (targetId, targetText) => {
        const updateNoteEdit = notes.map((note) => {
            if (note.id === targetId) {
                return {...note, text: targetText};
            } else {
                return note;
            }
        })
        setNotes(updateNoteEdit);
    }

    console.log(notes);

    return (
        <div className="container">
            <h2 className="main-title">Quick Note</h2>
            <NoteForm
                addNote={addNote}
            />

            <div className="list-note">
                {notes.map((noteItemData) => (
                    <NoteItem
                        key={noteItemData.id}
                        note={noteItemData}
                        deleteNote={deleteNote}
                        finishNote={finishNote}
                        editText={editText}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
