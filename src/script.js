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

// About section
const aboutSectionBtn = document.getElementById("aboutmeBtn");
const aboutSection = document.getElementById("about-me-section");
const inforDiv = document.getElementById("information");
const cancleBtn = document.getElementById("cancle");

aboutSectionBtn.addEventListener("click", () => {
  aboutSection.classList.remove("hidden");
  aboutSection.classList.add("flex");

  document.title = "About | Ayush Acharya";
});

cancleBtn.addEventListener("click", () => {
  CloseTab();
});

function CloseTab() {
  aboutSection.classList.remove("flex");
  aboutSection.classList.add("hidden");

  document.title = "ig-ayush | Portfolio";
}

// Education Link
const Edubtn = document.getElementById("Education");
const AboutEduBtn = document.getElementById("education-btn");

Edubtn.addEventListener(
  "click",
  () => (window.location.href = "./src/Education/index.html")
);
AboutEduBtn.addEventListener(
  "click",
  () => (window.location.href = "./src/Education/index.html")
);
