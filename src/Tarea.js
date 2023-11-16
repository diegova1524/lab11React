import React, { useState } from 'react';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };
  

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" checked={completada} onChange={onToggleCompletada} />
        <label className="form-check-label">{isEditing ? (
          <input
            type="text"
            className="form-control"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          tarea
        )}</label>
      </div>
      <div>
        {isEditing ? (
          <button className="btn btn-primary btn-sm mr-2" onClick={handleSaveClick}>Guardar</button>
        ) : (
          <>
            <button className="btn btn-danger btn-sm mr-2" onClick={onDelete}>Eliminar</button>
            <button className="btn btn-secondary btn-sm" onClick={handleEditClick}>Editar</button>
          </>
        )}
      </div>
    </li>
  );
}

export default Tarea;
