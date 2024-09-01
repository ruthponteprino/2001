
// -- REPARTO DE CARTAS --- //

let manoUsuario = [];

let manoPC = [];

const cartasArray = [];


const repartirCartas = () => {
    // Llena el array con 6 cartas aleatorias del mazo
    for (let i = 0; i < 6; i++) {
        let mazoMezclado = Math.floor(Math.random() * mazo.length);

        cartasArray.push(mazo[mazoMezclado]);
    }

    // Divide el array en dos partes
    let manoUser = cartasArray.slice(0, 3); // Primeras 3 cartas
    let manoCompu = cartasArray.slice(3, 6); // Últimas 3 cartas

    // Agrego cartas a las manos
    manoUsuario = manoUsuario.concat(manoUser);
    manoPC = manoPC.concat(manoCompu);
};


/*

// -- JUAGADA USUARIO -- //

const cartaUsuario = document.querySelector('.carta-usuario')

// Le coloco 2 parametros a la funcion para hacerla dinamica
let jugadaUsuario = (img, arr) => {
  // mueve la carta seleccionada al tablero
  cartaUsuario.replaceChildren(img);
  //recorro el array y li aplico estilos
  // Recorre el array y aplica estilos
  arr.forEach(carta => {
    carta.style.pointerEvents = 'none'; // Desactiva el clic
    carta.style.opacity = '0.5'; // Aplica opacidad
  });
};



const cartaMano1 = document.getElementById("carta-mano1");
const cartaMano2 = document.getElementById("carta-mano2");
const cartaMano3 = document.getElementById("carta-mano3");

// Creo elementos de imagen
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');


// Asigno los valores a los atributos
img1.src = manoUsuario[0].imagen;
img1.width = 90;

img2.src = manoUsuario[1].imagen;
img2.width = 90;

img3.src = manoUsuario[2].imagen;
img3.width = 90;


// Agrega las imágenes a los divs
cartaMano1.prepend(img1);
cartaMano2.prepend(img2);
cartaMano3.prepend(img3);

// Asigno el evento click a cada imagen y agrego un array para deshabilitar las restantes
img1.addEventListener('click', () => jugadaUsuario(img1, [img2, img3]));
img2.addEventListener('click', () => jugadaUsuario(img2, [img1, img3]));
img3.addEventListener('click', () => jugadaUsuario(img3, [img1, img2]));

*/


/*
// Armo las 28 cartas entre 1 y 7 con sus valores e imagenes
for (let i = 1; i <= 28; i++) {
    let carta = {
      valor : cartasNumericas[conteo],
      imagen: `${rutaImagenes}${conteo + 1}_${j}.png`
    }
    conteo++
    j++
    // Inicializo el conteo para que se repita los valores de 1 al 7
    if(conteo == cartasNumericas.length){
      conteo = 0;
    }

    //Las ingreso al mazo
    mazo.push(carta)
    }
*/