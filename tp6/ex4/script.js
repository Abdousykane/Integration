const img = document.getElementById("img");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");

let intervalID = null;

/* Génère une matrice aléatoire */
function randomMatrix() {
    // Valeurs raisonnables pour éviter une image totalement détruite
    const a  = 0.8 + Math.random() * 0.4;  // scale X
    const d  = 0.8 + Math.random() * 0.4;  // scale Y
    const b  = (Math.random() - 0.5) * 0.5; // skew vertical
    const c  = (Math.random() - 0.5) * 0.5; // skew horizontal
    const tx = (Math.random() - 0.5) * 60; // translation X
    const ty = (Math.random() - 0.5) * 60; // translation Y

    return `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`;
}

/* Démarrer l'animation */
btnStart.addEventListener("click", () => {
    if (intervalID !== null) return; // éviter doubles démarrages

    intervalID = setInterval(() => {
        const m = randomMatrix();
        img.style.transform = m;
    }, 700);  // toutes les 0.7 sec
});

/* Arrêter l'animation */
btnStop.addEventListener("click", () => {
    clearInterval(intervalID);
    intervalID = null;

    // Remettre l'image normale
    img.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
});