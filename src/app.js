/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

console.log("Generador de Nombres de Dominios");

let pronombres = ["el", "nuestro"];
let adjetivos = ["genial", "grande"];
let substantivos = ["corredor", "mapache"];
let extesiones = [".com", ".net", ".us", ".io"];

for (let i = 0; i < pronombres.length; i++) {
  // console.log(pronombres[i]);
  for (let j = 0; j < adjetivos.length; j++) {
    // console.log(pronombre[i] + adjetivos[j]);
    for (let l = 0; l < substantivos.length; l++) {
      // console.log(pronombre[i] + adjetivos[j] + substantivos[l]);
      for (let m = 0; m < extesiones.length; m++) {
        // eslint-disable-next-line no-console
        console.log(
          pronombres[i] + adjetivos[j] + substantivos[l] + extesiones[m]
        );
      }
    }
  }
}
