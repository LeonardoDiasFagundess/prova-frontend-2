document.getElementById("estilo").onclick = function( cliqueAqui, listaPessoas) {
    
};

function cliqueAqui() {
    document.getElementById("estilo").innerHTML = "<b>Clique para abrir</b>"; 
    document.getElementById("estilo").style.width="150px"
    document.getElementById("estilo").style.color="white";
    document.getElementById("estilo").style.padding="10px";
}

function listaPessoas() {
    document.getElementById("estilo").innerHTML = "<b>Listas de Pessoas";
    document.getElementById("estilo").style.width="300px"
    document.getElementById("estilo").style.height="500px"
}

