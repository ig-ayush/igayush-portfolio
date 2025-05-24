const ProfilePics = [
  "./Assets/Images/pic-1.jpg",
  "./Assets/Images/pic-2.jpg",
  "./Assets/Images/pic-3.jpg",
  "./Assets/Images/pic-4.jpg",
];

const PresentPics = document.getElementById("profile-img");
let i = 0;
setInterval(() => {
  i = (i + 1) % ProfilePics.length;
  PresentPics.src = ProfilePics[i];
}, 3000);

const buildTexts = document.getElementById("tech");

const tech = ["Apps", "Websites", "Frontends", "Designs"];

let currentText = 0;

function changeTech() {
  let oldText = tech[currentText];
  currentText = (currentText + 1) % tech.length;
  let newText = tech[currentText];

  animationText(oldText, newText);
}

function animationText(oldText, newText) {
  let maxLen = Math.max(oldText.length, newText.length);
  buildTexts.textContent = "";

  for (let i = 0; i < maxLen; i++) {
    let oldChar = oldText[i] || "";
    let newChar = newText[i] || "";
    if (oldChar !== newChar) {
      setTimeout(() => {
        buildTexts.classList.add("out");
        setTimeout(() => {
          buildTexts.textContent += newChar;
          buildTexts.classList.remove("out");
          buildTexts.classList.add("in");
        }, 150);
      }, i * 100);
    }
  }
}

setInterval(changeTech, 3000);

const aboutSectionBtn = document.getElementById("aboutmeBtn");
const aboutSection = document.getElementById("about-me-section");

function activeAboutSec() {
  aboutSection.classList.remove("hidden");
  aboutSection.classList.add("flex");
}
function CloseTab() {
  aboutSection.classList.remove("flex");
  aboutSection.classList.add("hidden");
}
