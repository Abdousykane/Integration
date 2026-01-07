const links = document.querySelectorAll(".nav-link");

function activateLink(link) {
  links.forEach(l => l.classList.remove("active"));
  link.classList.add("active");
}

links.forEach(link => {
  link.addEventListener("click", () => activateLink(link));
});

// Active le premier par défaut
activateLink(links[0]);
