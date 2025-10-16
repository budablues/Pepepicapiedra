const tattos = [
  {
    titulo: "Tatto diseño #1",
    desc: "Este diseño representa la fuerza interior que emerge desde lo más profundo, una transformación que rompe los límites de la piel y revela el poder oculto bajo la superficie. Sus líneas orgánicas y contrastes intensos evocan energía, caos y renacimiento.",
    img: "tattos cuello/9c7d13e68b17ddd51d53acbb8698e7d1.jpg",
  },
  {
    titulo: "Tatto diseño #2",
    desc: "Diseño tribal moderno, con líneas firmes y tonos oscuros.",
    img: "tattos cuello/28dce2b0312481324f259787733eb09d.jpg",
  },
  {
    titulo: "Tatto diseño #3",
    desc: "Simbolismo espiritual y fuerza interior representados en arte corporal.",
    img: "tattos cuello/descarga.png",
  },
];

let current = 0;
const title = document.getElementById("tattoo-title");
const desc = document.getElementById("tattoo-desc");
const img = document.getElementById("tattoo-img");
const nextBtn = document.getElementById("next-btn");

function cambiarTattoo() {
  // Inicia animación de salida
  img.classList.add("fade-out");
  title.classList.add("fade-out");
  desc.classList.add("fade-out");

  // Después de medio segundo, cambia contenido
  setTimeout(() => {
    current = (current + 1) % tattos.length; // vuelve al primero cuando termina
    title.textContent = tattos[current].titulo;
    desc.textContent = tattos[current].desc;
    img.src = tattos[current].img;
    img.alt = tattos[current].titulo;

    // Quita la clase fade-out y fuerza una reaparición
    img.classList.remove("fade-out");
    title.classList.remove("fade-out");
    desc.classList.remove("fade-out");

    // Aplica fade-in brevemente
    img.classList.add("fade-in");
    title.classList.add("fade-in");
    desc.classList.add("fade-in");

    // Limpia las clases después del efecto para evitar acumulación
    setTimeout(() => {
      img.classList.remove("fade-in");
      title.classList.remove("fade-in");
      desc.classList.remove("fade-in");
    }, 500);
  }, 400);
}

// Evento de clic
nextBtn.addEventListener("click", cambiarTattoo);

// 🔄 OPCIONAL: cambio automático cada 5 segundos
// setInterval(cambiarTattoo, 5000);