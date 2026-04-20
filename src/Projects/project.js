document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "../../index.html";
});

const menuBar = document.getElementById("menu-bar");
const menu = document.getElementById("menu-nav");

menuBar.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.classList.add("flex");
});

menu.addEventListener("click", () => {
  menu.classList.remove("flex");
  menu.classList.add("hidden");
});

function positionOrangeLine() {
  const container = document.getElementById("projects-container");
  const line = document.getElementById("line");
  const headings = container.querySelectorAll('[id="heading"]');
  if (!line || headings.length < 2) return;

  const topHeading = headings[0];
  const bottomHeading = headings[headings.length - 1];
  const containerRect = container.getBoundingClientRect();

  const topRect = topHeading.getBoundingClientRect();
  const bottomRect = bottomHeading.getBoundingClientRect();

  // Line starts at the bottom-center of the first heading
  const lineTop = topRect.bottom - containerRect.top + window.scrollY;
  // Line ends at the top-center of the last heading
  const lineBottom = bottomRect.top - containerRect.top + window.scrollY;

  line.style.top = lineTop + "px";
  line.style.height = lineBottom - lineTop + "px";
}

// Run on load and on resize
window.addEventListener("load", positionOrangeLine);
window.addEventListener("resize", positionOrangeLine);
// Also run after AOS animations might shift layout
setTimeout(positionOrangeLine, 200);
setTimeout(positionOrangeLine, 800);
