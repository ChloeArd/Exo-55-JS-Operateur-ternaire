let para1 = document.getElementById("p1");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("resultat");

let nombre1 = parseInt(span1.innerHTML);
let nombre2 = parseInt(span2.innerHTML);
let addition = nombre1 + nombre2;

span3.innerHTML = (addition) > 0 ? addition.toString() : (nombre2 - nombre1).toString();

if ((addition - 10) > 0){
    para1.innerHTML = "le résultat moins 10 est strictement inférieur à 0";
}

let div = document.getElementById("container");
div.style.backgroundColor = "yellow";
div.style.color= "red";


