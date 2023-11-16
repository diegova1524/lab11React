// src/TareaForm.js
import React, { useState } from 'react';

function TareaForm({ agregarTarea }) {
    const [texto, setTexto] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      agregarTarea(texto);
      setTexto('');
    };
  
    return (
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Nueva tarea..." value={texto} onChange={(e) => setTexto(e.target.value)} />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">Agregar Tarea</button>
          </div>
        </div>
      </form>
    );
  }
export default TareaForm;
