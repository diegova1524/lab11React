// filtro.js
import React from 'react';

function Filtros({ filtrarTareas, ordenarTareas }) {
  const handleFiltrar = (filtro) => {
    filtrarTareas(filtro);
  };

  const handleOrdenar = (tipoOrden) => {
    ordenarTareas(tipoOrden);
  };

  return (
    <div className="btn-group" role="group" aria-label="Filtros">
      <button type="button" className="btn btn-secondary" onClick={() => handleFiltrar('Todas')}>
        Todas
      </button>
      <button type="button" className="btn btn-secondary" onClick={() => handleFiltrar('Pendientes')}>
        Pendientes
      </button>
      <button type="button" className="btn btn-secondary" onClick={() => handleFiltrar('Completadas')}>
        Completadas
      </button>
      <button type="button" className="btn btn-secondary" onClick={() => handleOrdenar('ascendente')}>
        Ordenar por Fecha Ascendente
      </button>
      <button type="button" className="btn btn-secondary" onClick={() => handleOrdenar('descendente')}>
        Ordenar por Fecha Descendente
      </button>
    </div>
  );
}

export default Filtros;
