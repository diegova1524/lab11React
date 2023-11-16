import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada }) {
    return (
      <ul className="list-group">
        {tareas.map((tarea, index) => (
          <li key={index} className={`list-group-item ${tarea.completada ? 'list-group-item-success' : ''}`}>
            {tarea.texto}
            <div className="float-right">
              <button className="btn btn-outline-danger btn-sm mr-2" onClick={() => eliminarTarea(index)}>Eliminar</button>
              <button className="btn btn-outline-primary btn-sm mr-2" onClick={() => editarTarea(index)}>Editar</button>
              <button className={`btn btn-sm ${tarea.completada ? 'btn-outline-warning' : 'btn-success'}`} onClick={() => toggleCompletada(index)}>
                {tarea.completada ? 'Desmarcar' : 'Completar'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }

export default ListaTareas;
