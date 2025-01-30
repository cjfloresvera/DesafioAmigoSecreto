// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[];
let nombreAmigo=""
let tamaño=""
let linea=""
//Agrega amigos a la lista
//REVISAR PORQUÉ ME SALE ERROR DE TIEMPO
function agregarAmigo(){
    let amigo=document.getElementById('amigo').value
    if(amigo!=""){
        listaAmigos.push(amigo);
        console.log(listaAmigos);
        document.getElementById('amigo').value = "";
        tamaño=listaAmigos.length;
        console.log(tamaño);
       //Para crear la linea en el html por cada item del arreglo:
        for(var i=tamaño-1;i<=tamaño-1;i++){
          linea=document.createElement('li')
          linea.textContent=listaAmigos[i];
          console.log(linea);
          listadoHTML.appendChild(linea);          
        }
      } else {
            alert("Por favor ingrese un nombre válido");
        }
}

let listadoHTML=document.querySelector('#listaAmigos');
listadoHTML.innerHTML='';
