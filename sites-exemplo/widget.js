(function() {
    console.log('widget instalado');
})();

// Criando a div abaixo do hero-slider, criando um id estilo para a div e colocando o texto.
var element = document.querySelector(".hero-slider");
var div = document.createElement("DIV");
div.id= "estilo"
div.innerHTML = "<b>Clique para abrir</b>";
element.appendChild(div);

// Estilizando a class estilo
var cor;
cor = document.getElementById("estilo");
cor.style.backgroundColor="blue";
cor.style.width="150px";
cor.style.color="white";
cor.style.padding="10px";
cor.style.position=" relative";
cor.style.bottom="42px";
cor.style.left="1330px"

document.getElementById("estilo").onclick = function() {
    document.getElementById("estilo").innerHTML = "<b>Listas de Pessoas";
    document.getElementById("estilo").style.width="300px"
    document.getElementById("estilo").style.height="500px"
    document.getElementById("estilo").style.left="1180px"
     document.getElementById("estilo").style.bottom="500px"
};

var btnConsultar = document.querySelector("#estilo");
btnConsultar.addEventListener("click", function(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/users")
    xmlHttp.send();
    xmlHttp.addEventListener("load", function(){
       // Transformando o texto em objetos. 
       var listaPessoas = JSON.parse(xmlHttp.responseText)
       // Percorrendo cada item na lista
       listaPessoas.forEach(pessoas => {
        console.log(pessoas)
       });
    })
})


