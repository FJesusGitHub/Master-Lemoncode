import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
import logoImg from './content/lc-logo.png';

 const img = document.createElement('img');
 img.src = logoImg;
 document.getElementById('imgContainer').appendChild(img);
 
 const root = createRoot(document.getElementById("root"));
 root.render(
  <div>
  <h1>Hola mundo</h1>
  </div>
 );

//  console.log(`Api base: ${process.env.API_BASE}`);
