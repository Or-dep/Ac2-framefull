import React from 'react';
import { Link } from "react-router-dom";

function CardAmarelo(){
  return (
      <div class="res-container" style={{ 
        backgroundColor: 'rgb(170, 199, 42)',
        color: 'black'
      }}>
          <h1>CardAmarelo</h1>
          <h3>uabalabdudub</h3>
          <div class="back-to-start-page">
          <Link to="/">sumidão</Link>
          </div>
      </div>
  );
}

export default CardAmarelo;
