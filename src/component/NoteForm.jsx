import { useState } from "react";

function NoteForm({ addNote }) {

    const [inputText, setInputText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputText === "") {
            return;
        }

        addNote(inputText);
        setInputText("");
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="input-note"
                    className="input-note"
                    placeholder="What do you think..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default NoteForm;
