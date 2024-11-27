/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

console.log("Generador de Nombres de Dominios");

let pronombres = ["the", "our"];
let adjetivos = ["great", "big"];
let substantivos = ["jogger", "racoon"];
let extesiones = [".com", ".net", ".us", ".io"];

for (let i = 0; i < pronombres.length; i++) {
  for (let j = 0; j < adjetivos.length; j++) {
    for (let k = 0; k < substantivos.length; k++) {
      // Dominio con hack no puede estar dentro del bucle de extensiones para no se repitir varias veces
      let palabra = substantivos[k];
      let hackExtension = "." + palabra.slice(-2); // seleciona las 2 ultimas letras para la extension
      let hackDominio =
        pronombres[i] + adjetivos[j] + palabra.slice(0, -2) + hackExtension; //quita las 2 ultimas letras de la palabra
      console.log(hackDominio);
      for (let l = 0; l < extesiones.length; l++) {
        console.log(
          pronombres[i] + adjetivos[j] + substantivos[k] + extesiones[l]
        );
      }
    }
  }
}
