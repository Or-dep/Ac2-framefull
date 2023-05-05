import React from 'react';
import { Link } from "react-router-dom";

function CardVerde(){
  return (
      <div class="res-container" style={{ 
        backgroundColor: 'green',
      }}>
          <h1>CardVerde</h1>
          <h3>uabalabdudub</h3>
          <div class="back-to-start-page">
            <Link to="/">sumidão</Link>
          </div>
      </div>
  );
}

export default CardVerde;
