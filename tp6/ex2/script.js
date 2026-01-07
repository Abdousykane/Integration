/* ----------------------------
   4) Texte lettre par lettre
-----------------------------*/
const text = "ANIMATION COMPLETE";
const target = document.getElementById("animatedText");

let index = 0;

function showNextLetter() {
    if (index < text.length) {
        target.textContent += text[index];
        index++;
        setTimeout(showNextLetter, 100);
    } else {
        // Fond devient rouge
        target.classList.add("bg-red");

        // Tremblement pendant 1 seconde
        target.classList.add("shake");
        setTimeout(() => {
            target.classList.remove("shake");
            target.classList.add("fade-out");
        }, 1000);
    }
}

showNextLetter();

/* ----------------------------
   5) Bouton animé au clic
-----------------------------*/
const btn = document.getElementById("actionBtn");

btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 300);
});

/* ----------------------------
   7) Texte vague
-----------------------------*/
const waveContainer = document.getElementById("waveText");
const word = waveContainer.textContent;
waveContainer.textContent = ""; 

[...word].forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = (i * 0.1) + "s";
    waveContainer.appendChild(span);
});
