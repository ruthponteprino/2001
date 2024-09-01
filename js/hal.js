let iniciarJuego = document.querySelector('.btn-iniciar')

// -- CREACION DE MAZO -- //

const mazo = [];
const cartasNumericas = [1, 2, 3, 4, 5, 6, 7];
let conteo = 0;
let j = 0;

let crearMazo = () => {
  // Armo las 28 cartas entre 1 y 7 con sus valores e imagenes:
  // Capturo los valores del array
  for (let i = 0; i < cartasNumericas.length; i++) {
    let valor = cartasNumericas[i];
    // Repito el mismo valor 4 veces, es para poder vincular mas facilmente las imagenes
    for (let j = 0; j < 4; j++) {
      let carta = {
        punto: valor,
        imagen: `./img/cartas/${valor}_${j}.png`
      }
      mazo.push(carta)
    }
  }

  // Armo las 12 cartas restantes con valor 10 e imagenes y las ingreso al mazo  
  for (let i = 1; i <= 12; i++) {
    let cartasFiguras = {
      punto: 10,
      imagen: `./img/cartas/10_${i}.png`
    };

    mazo.push(cartasFiguras)
  }
}

// -- INICIO DEL JUEGO -- //


