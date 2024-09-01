//CAPTURAS DEL DOM
//let btnIniciar = document.querySelector('.btn-iniciar'); //CAMBIAR POR APOSTAR
const cartaUsuarioTablero = document.querySelector('.carta-usuario');
const cartaPcTablero = document.querySelector('.carta-pc');
const cartaMano1 = document.getElementById("carta-mano1");
const cartaMano2 = document.getElementById("carta-mano2");
const cartaMano3 = document.getElementById("carta-mano3");


// VARIABLES PARA MAZO
const mazo = [];
const cartasNumericas = [1, 2, 3, 4, 5, 6, 7];
let conteo = 0;
let j = 0;


let rondas = 3;


// VARIABLES ELECCION PC - USUARIO
let puntajeSeleccionadoPC = 0;
let puntajeSeleccionadoUsuario = 0;

// VARIABLES PARA MANOS
let manoUsuario = [];
let manoPC = [];
const cartasArray = [];


//////// -- INICIO DEL JUEGO -- ////////////
let iniciarJuego = () => {

  // -- CREACION DE MAZO -- //
  // Armo las 28 cartas entre 1 y 7 con sus valores e imagenes:
  // Capturo los valores del array
  for (let i = 0; i < cartasNumericas.length; i++) {
    let valor = cartasNumericas[i];
    // Repito el mismo valor 4 veces, es para poder vincular mas facilmente las imagenes
    for (let j = 0; j < 4; j++) {
      let carta = {
        puntaje: valor,
        imagen: `./img/cartas/${valor}_${j}.png`
      }
      mazo.push(carta)
    }
  }

  // Armo las 12 cartas restantes con valor 10 e imagenes y las ingreso al mazo  
  for (let i = 1; i <= 12; i++) {
    let cartasFiguras = {
      puntaje: 10,
      imagen: `./img/cartas/10_${i}.png`
    };
    mazo.push(cartasFiguras)
  }

  repartirCartas();
  mostraMano();
  jugadaPC();
};

let repartirCartas = () => {
  // Repartir Cartas (MANOS)
  // Llena el array con 6 cartas aleatorias del mazo
  for (let i = 0; i < 6; i++) {
    let cartaAzar = Math.floor(Math.random() * mazo.length);

    cartasArray.push(mazo[cartaAzar]);
    //elimino la carta que fue repartida del mazo
    mazo.splice(cartaAzar, 1);
  }

  // Divide el array en dos partes
  let manoUser = cartasArray.slice(0, 3); // Primeras 3 cartas
  let manoCompu = cartasArray.slice(3, 6); // Últimas 3 cartas

  // Agrego cartas a las manos
  manoUsuario = manoUsuario.concat(manoUser);
  manoPC = manoPC.concat(manoCompu);
}

//MOSTRAR MANO DEL USUARIO
let mostraMano = () => {
  // Creo etiquetas img
  const carta1 = document.createElement('img');
  const carta2 = document.createElement('img');
  const carta3 = document.createElement('img');

  // Asigno los valores a los atributos
  carta1.src = manoUsuario[0].imagen;
  carta1.width = 90;
  carta2.src = manoUsuario[1].imagen;
  carta2.width = 90;
  carta3.src = manoUsuario[2].imagen;
  carta3.width = 90;


  // Agrega las imágenes a los divs
  cartaMano1.prepend(carta1);
  cartaMano2.prepend(carta2);
  cartaMano3.prepend(carta3);

  // Asigno el evento click a cada imagen
  carta1.addEventListener('click', () => jugadaUsuario(carta1, manoUsuario[0].puntaje));
  carta2.addEventListener('click', () => jugadaUsuario(carta2, manoUsuario[1].puntaje));
  carta3.addEventListener('click', () => jugadaUsuario(carta3, manoUsuario[2].puntaje));
}

let jugadaPC = () => {
  // reseteo el mayor puntaje
  //  puntajeSeleccionadoPC = 0;
  let indiceCartaSeleccionada = 0;
  let imagenCartaPC = "";
  // Busco la carta de mayor valor y su imagen
  for (let i = 0; i < manoPC.length; i++) {
    let valorCarta = manoPC[i].puntaje;
    if (valorCarta > puntajeSeleccionadoPC) {
      puntajeSeleccionadoPC = valorCarta;
      imagenCartaPC = manoPC[i].imagen;
      indiceCartaSeleccionada = i;
    }
  }
  //Tirar la primer carta en el tablero
  // Creo etiqueta img
  const cartaPC = document.createElement('img');
  // Asigno los valores a los atributos
  cartaPC.src = imagenCartaPC;
  cartaPC.width = 90;
  //Mostrar carta
  cartaPcTablero.prepend(cartaPC);

  manoPC.splice(indiceCartaSeleccionada, 1)

}


let jugada = () => {

  //Armo la logica del juevo, la carta con mas valor gana
  if (puntajeSeleccionadoPC === puntajeSeleccionadoUsuario) {
    alert('Empate');
  } else if (puntajeSeleccionadoPC > puntajeSeleccionadoUsuario) {
    alert('Gana HAL9000');
  } else {
    alert('Gana el usuario');
  }

  // reseteo los puntos
  puntajeSeleccionadoPC = 0;
  puntajeSeleccionadoUsuario = 0;

  //reduzco las rondas
  --rondas;
  if (rondas == 0) {
    alert('Turno terminado')
  }

}

let jugadaUsuario = (cartaImg, puntaje) => {
  // Capturo el puntaje de la carta seleccionada
  puntajeSeleccionadoUsuario = puntaje;
  // mueve la carta seleccionada al tablero
  cartaUsuarioTablero.replaceChildren(cartaImg);
  jugada()
  jugadaPC()
};


iniciarJuego();


/*

 // Busco la carta de mayor valor y su imagen
  for (let i = 0; i < manoPC.length; i++) {
    let valorCarta = manoPC[i].puntaje;
    if (valorCarta > puntajeSeleccionadoPC) {
      puntajeSeleccionadoPC = valorCarta;
      imagenCartaPC = manoPC[i].imagen;
    }
  }

// Recorre el array y aplica estilos
  arr.forEach(carta => {
    carta.style.pointerEvents = 'none'; // Desactiva el clic
    carta.style.opacity = '0.5'; // Aplica opacidad
  });

*/