import React, { useState } from "react";
import Note from "./Note";

import "./App.css";

function App() {
  const initialNotesObject = {
    id: 1,
    value: "",
    isSaved: false,
    isEdit: false,
  };
  const [notes, setNotes] = useState({ 1: initialNotesObject });

  // toggle notes edit mode
  const handleEdit = (noteId) => {
    const notesClone = { ...notes };
    // toggle edit mode of requested note
    notesClone[noteId].isEdit = !notesClone[noteId].isEdit;
    setNotes(notesClone);
  };

  // handling notes deletion
  const handleDelete = (noteId) => {
    const notesClone = { ...notes };
    // deleting requested note
    delete notesClone[noteId];
    setNotes(notesClone);
  };

  // adding or updating active note value in notes
  const saveNote = (noteId, value) => {
    const notesClone = { ...notes };
    // updateing requested note
    notesClone[noteId] = {
      ...notesClone[noteId],
      value,
      isEdit: false,
      isSaved: true,
    };
    setNotes(notesClone);
  };

  // adding new note in notes array
  const addNewNote = () => {
    const notesClone = { ...notes };
    // creating new element id
    const newElementId =
      Object.keys(notesClone).length > 0
        ? Number(Object.keys(notesClone).pop()) + 1
        : 1;
    // creating new element object
    notesClone[newElementId] = { ...initialNotesObject, id: newElementId };
    // adding newly generated element in notes array
    setNotes(notesClone);
  };
  return (
    <div className="notes">
      <div className="notes__container">
        <div className="notes__container__header">
          <h3>Multiple Notes App</h3>
          <button title="Add new note" onClick={addNewNote}>
            +
          </button>
        </div>
        {!Object.keys(notes).length && (
          <small className="no-data-text">Let's make notes...!</small>
        )}
        {Object.values(notes).map((item, index) => {
          return (
            <Note
              id={item.id}
              key={item.id}
              count={index + 1}
              value={item.value}
              isEdit={item.isEdit}
              isSaved={item.isSaved}
              saveNote={saveNote}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
