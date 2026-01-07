const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

// IMAGES
const sprite = new Image();
const backgroundImg = new Image();

sprite.src = "mario.png";
backgroundImg.src = "fond.png";

// dimensions d’une frame
let fw, fh;

// frame actuelle
let currentCol = 0;
let currentRow = 0;

// compteur pour ralentir l’animation
let tick = 0;

// position du fond
let bgOffset = 0;

// INITIALISATION
sprite.onload = () => {
    fw = sprite.width / 5;
    fh = sprite.height / 5;
};

function render() {

    /* ===============================
       🎨 Défilement du décor
    ================================ */
    bgOffset -= 1.8; // vitesse réduite → différent
    if (bgOffset <= -canvas.width) {
        bgOffset = 0;
    }

    ctx.drawImage(backgroundImg, bgOffset, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImg, bgOffset + canvas.width, 0, canvas.width, canvas.height);

    /* ===============================
       🏃 Mario (sprite animé)
    ================================ */

    tick++;
    if (tick % 5 === 0) {  // vitesse d’animation changée
        currentCol = (currentCol + 1) % 5;
    }

    ctx.drawImage(
        sprite,
        currentCol * fw, currentRow * fh, fw, fh,  // découpe
        60, 260,                                   // position modifiée
        fw * 1.15, fh * 1.15                        // taille légèrement différente
    );

    requestAnimationFrame(render);
}

backgroundImg.onload = render;
