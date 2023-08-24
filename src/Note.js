import React, { useState } from "react";

const Note = (props) => {
  const [state, setState] = useState(props.value || "");

  // handling note value change
  const __handleChange = (event) => {
    setState(event.target.value);
  };

  //   enable note edit mode
  const __enableEdit = () => {
    props.handleEdit(props.id);
  };

  //   cancel note edit mode
  const __cancelEdit = () => {
    setState(props.value);
    props.handleEdit(props.id);
  };

  //   deleting note
  const __handleDelete = () => {
    props.handleDelete(props.id);
  };

  // saving note
  const __saveNote = () => {
    props.saveNote(props.id, state);
  };
  return (
    <div className="notes__container__item">
      <span className="notes__container__item--count">
        <u>#{props.count}</u>
      </span>
      <input
        disabled={props.isSaved && !props.isEdit}
        value={state}
        onChange={__handleChange}
        placeholder="I want to..."
        className="notes__container__item--input"
      />

      {props.isEdit && (
        <button
          className="notes__container__item--button"
          onClick={__cancelEdit}
        >
          Cancel
        </button>
      )}
      {(!props.isSaved || props.isEdit) && (
        <button className="notes__container__item--button" onClick={__saveNote}>
          Save
        </button>
      )}
      {props.isSaved && !props.isEdit && (
        <button
          className="notes__container__item--button"
          onClick={__enableEdit}
        >
          Edit
        </button>
      )}

      {!props.isEdit && (
        <button
          className="notes__container__item--button"
          onClick={__handleDelete}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default Note;
