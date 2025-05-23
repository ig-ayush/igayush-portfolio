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
