const ctx1 = document.getElementById('canvas1').getContext('2d');
const ctx2 = document.getElementById('canvas2').getContext('2d');
const ctx3 = document.getElementById('canvas3').getContext('2d');

/* --- COULEURS DU MODÈLE --- */
const FILL_COLOR = "#EE66CC"; 
const STROKE_COLOR = "#00FFFF"; 

function dessinerPetale(ctx, longueur, largeur) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(
        longueur * 0.3, -largeur * 0.1,
        longueur * 0.9, -largeur,
        longueur, 0
    );
    ctx.bezierCurveTo(
        longueur * 0.9, largeur,
        longueur * 0.3, largeur * 0.1,
        0, 0 
    );

    ctx.closePath();
    ctx.fillStyle = FILL_COLOR;
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = STROKE_COLOR;
    ctx.stroke();
}

/**
 * DESSINE LA FLEUR (Rotation)
 */
function dessinerFleur(ctx, x, y, nbPetales, rayon) {
    ctx.save();
    ctx.translate(x, y);
    for (let i = 0; i < nbPetales; i++) {
        let angle = (Math.PI * 2) / nbPetales;
        ctx.rotate(angle);
        dessinerPetale(ctx, rayon, 45); 
    }

    ctx.restore();
}

ctx1.save();
ctx1.translate(150, 150);
dessinerPetale(ctx1, 110, 45);
ctx1.restore();
dessinerFleur(ctx2, 150, 150, 8, 110);


/* --- ANIMATION --- */
let angleGlobal = 0;

function animer() {
    ctx3.clearRect(0, 0, 300, 300);
    ctx3.save();
    ctx3.translate(150, 150);
    ctx3.rotate(angleGlobal);
    ctx3.translate(-150, -150);

    // Dessin
    dessinerFleur(ctx3, 150, 150, 8, 110);

    ctx3.restore();

    // Vitesse de rotation
    angleGlobal += 0.015;

    requestAnimationFrame(animer);
}

animer();