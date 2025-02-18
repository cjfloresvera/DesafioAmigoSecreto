// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[];
let linea=""
let listadoHTML=document.querySelector('#listaAmigos');
listadoHTML.innerHTML='';
let amigoSecreto=''
//Agrega amigos a la lista
//REVISAR PORQUÉ ME SALE ERROR DE TIEMPO
function agregarAmigo(){
    let amigo=document.getElementById('amigo').value
    console.log(typeof(amigo));
    if(amigo!=""){
        listaAmigos.push(amigo);
        document.getElementById('amigo').value = "";
       //Para crear la linea en el html por cada item del arreglo:
          linea=document.createElement('li')
          linea.textContent=listaAmigos[listaAmigos.length-1];
          listadoHTML.appendChild(linea);          
      } else { 
          alert("Por favor ingrese un nombre válido"); 
        }
}

//Para sortear el amigo secreto y mostrarlo
function sortearAmigo(){
  if(listaAmigos.length<=0){
    alert("No tiene amigos en la lista");
  } else{
    let numeroAleatoreo=parseInt(Math.floor(Math.random()*listaAmigos.length));
    amigoSecreto=listaAmigos[numeroAleatoreo]
    listadoHTML.innerHTML=`¡El amigo secreto sorteado es: ${amigoSecreto}!`
    return 
  }
}
