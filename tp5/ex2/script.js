window.addEventListener("scroll", () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPos = window.scrollY;
  const ratio = scrollPos / maxScroll;

  const red = Math.round(ratio * 255);

  document.body.style.backgroundColor = `rgb(${red}, 0, 0)`;
});
