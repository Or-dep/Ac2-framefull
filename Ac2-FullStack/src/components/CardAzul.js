import React from 'react';
import { Link } from "react-router-dom";

function CardAzul(){
  return (
      <div class="res-container" style={{ 
        backgroundColor: 'blue'
      }}>
          <h1>CardAzul</h1>
          <h3>uabalabdudub</h3>
          <div class="back-to-start-page">
          <Link to="/">sumidão</Link>
          </div>
      </div>
  );
}

export default CardAzul;
