// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[];

//Agrega amigos a la lista
//REVISAR PORQUÉ ME SALE ERROR DE TIEMPO
function agregarAmigo(){
    let amigo=document.getElementById('amigo').value
    if(amigo!=""){
        listaAmigos.push(amigo);
        console.log(listaAmigos);
        document.getElementById('amigo').value = "";
        } else {
            alert("Por favor ingrese un nombre válido");
        }
}