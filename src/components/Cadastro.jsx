// Cadastro.jsx
import React, { useState } from 'react';
import './styles.css';

export function Cadastro({ setItems, items }) {


  const handleChange = (e) => {
    
  };

  const cadastrar = () => {

  };

  const limpar = () => {

  };

  const buscar = () => {

  };

  const alterar = () => {

  };

  const apagar = () => {

  };

  return (
    <div className="cadastro-form">
      {Object.entries({}).map(([key, value]) => (
        <input
          key={key}
          name={key}
          value={value}
          onChange={handleChange}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
        />
      ))}
      <div className="button-group">
        <button onClick={buscar} className="btn-buscar">Buscar</button>
        <button onClick={cadastrar} className="btn-cadastrar">Cadastrar</button>
        <button onClick={alterar} className="btn-alterar">Alterar</button>
        <button onClick={apagar} className="btn-apagar">Apagar</button>
      </div>
    </div>
  );
}