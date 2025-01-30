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

let amigoSecreto=''

//Para sortear el amigo secreto y mostrarlo
function sortearAmigo(){
  if(tamaño<=0){
    alert("No tiene amigos en la lista")
  } else{
    let numeroAleatoreo=parseInt(Math.floor(Math.random()*tamaño));
    console.log(numeroAleatoreo)
    amigoSecreto=listaAmigos[numeroAleatoreo]
    console.log(amigoSecreto)
    listadoHTML.innerHTML=`¡El amigo secreto sorteado es: ${amigoSecreto}!`
    return 
  }
}
