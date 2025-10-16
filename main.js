// === RECUADRO 1 - TATUAJES DE CUELLO ===
const tattosCuello = [
  {
    titulo: "Tatto diseño #1",
    desc: "Este diseño representa la fuerza interior que emerge desde lo más profundo, una transformación que rompe los límites de la piel y revela el poder oculto bajo la superficie.",
    img: "tattos cuello/9c7d13e68b17ddd51d53acbb8698e7d1.jpg",
  },
  {
    titulo: "Tatto diseño #2",
    desc: "Este diseño evoca poder ancestral y conexión con lo primitivo. La calavera central simboliza la muerte como fuerza de renovación, mientras las líneas que se expanden a su alrededor representan energía, furia y renacimiento a través del caos.",
    img: "tattos cuello/28dce2b0312481324f259787733eb09d.jpg",
  },
  {
    titulo: "Tatto diseño #3",
    desc: "Este diseño combina fuerza, oscuridad y belleza. Las máscaras oni representan la dualidad entre el poder y el tormento interior, mientras las rosas negras aportan un contraste simbólico de muerte y elegancia.",
    img: "tattos cuello/descarga.png",
  },
];

let indexCuello = 0;
const imgCuello = document.getElementById("tattoo-img");
const titleCuello = document.getElementById("tattoo-title");
const descCuello = document.getElementById("tattoo-desc");
const btnCuello = document.getElementById("next-btn");

btnCuello.addEventListener("click", () => {
  indexCuello = (indexCuello + 1) % tattosCuello.length;

  imgCuello.style.opacity = 0;
  titleCuello.style.opacity = 0;
  descCuello.style.opacity = 0;

  setTimeout(() => {
    imgCuello.src = tattosCuello[indexCuello].img;
    titleCuello.textContent = tattosCuello[indexCuello].titulo;
    descCuello.textContent = tattosCuello[indexCuello].desc;

    imgCuello.style.opacity = 1;
    titleCuello.style.opacity = 1;
    descCuello.style.opacity = 1;
  }, 400);
});


// === RECUADRO 2 - TATUAJES DE BRAZO ===
const tattosBrazo = [
  {
    titulo: "Tatuaje en el brazo",
    desc: "Diseños geométricos con trazos limpios y modernos.",
    img: "tattos/brazo1.jpg",
  },
  {
    titulo: "Diseño tribal",
    desc: "Inspirado en culturas ancestrales, lleno de simbolismo y fuerza.",
    img: "tattos/brazo2.jpg",
  },
  {
    titulo: "Realismo negro",
    desc: "Sombras intensas y detalles que resaltan la forma natural del brazo.",
    img: "tattos/brazo3.jpg",
  },
];

let indexBrazo = 0;
const imgBrazo = document.getElementById("imagen2");
const titleBrazo = document.getElementById("titulo2");
const descBrazo = document.getElementById("descripcion2");
const btnBrazo = document.getElementById("btn2");

btnBrazo.addEventListener("click", () => {
  indexBrazo = (indexBrazo + 1) % tattosBrazo.length;

  imgBrazo.style.opacity = 0;
  titleBrazo.style.opacity = 0;
  descBrazo.style.opacity = 0;

  setTimeout(() => {
    imgBrazo.src = tattosBrazo[indexBrazo].img;
    titleBrazo.textContent = tattosBrazo[indexBrazo].titulo;
    descBrazo.textContent = tattosBrazo[indexBrazo].desc;

    imgBrazo.style.opacity = 1;
    titleBrazo.style.opacity = 1;
    descBrazo.style.opacity = 1;
  }, 400);
});