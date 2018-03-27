let val;

val = document;
val = document.all; //HTMLCollection // Pega todos os elementos presentes no html
val = document.all[2]; // Seleciona um dos elementos presentes no html igual array
val = document.all.length; // Quantos elementos tem no html
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain; // Parte da url
val = document.URL; // Toda URL
val = document.characterSet; // UTF-8
val = document.contentType; // Tipo do conteudo "text/html"

// Seleção diretamente pelo objeto document
val = document.forms; //HTMLCollection
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links; //HTMLCollection
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList; //DOMTokenList
val = document.links[0].classList[0]; //DOMTokenList

val = document.images; //HTMLCollection

val = document.scripts; //HTMLCollection
val = document.scripts[2].getAttribute('src'); // Para pegar atributos especificos

let scripts = document.scripts;
// scripts.forEach( function (script) { // Erro pq é HTMLCollection
//   console.log(script)
// });

let scriptArr = Array.from(scripts)
scriptArr.forEach( function (script) { //funciona
  console.log(script.getAttribute('src'))
});

console.log(val);