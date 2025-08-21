

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}





const schoolTexts = [
  "Students of Banphai School",
  "Student Council of Banphai School ",
  "Intensive Science Computer of Banphai School "
];

const imagePaths = [
  "img/IMG_9378.JPG",
  "img/IMG_9379.JPG",
  "img/IMG_9380.JPG"
];

let currentIndex = 0;

function cycleProfile() {
  const schoolText = document.getElementById("schoolText");
  const profileImage = document.getElementById("profileImage");


  schoolText.classList.add("fade-out");
  profileImage.style.opacity = 0;


  setTimeout(() => {
    currentIndex = (currentIndex + 1) % schoolTexts.length;

    schoolText.innerText = schoolTexts[currentIndex];
    profileImage.src = imagePaths[currentIndex];


    schoolText.classList.remove("fade-out");
    profileImage.style.opacity = 1;
  }, 500); 
}

setInterval(cycleProfile, 3000);

/* Slill เลื่อน */


  const carousel = document.getElementById('skillCarousel');
  let scrollAmount = 0;

  function autoScroll() {
    
    carousel.scrollBy({
      left: 1,
      behavior: 'smooth'
    });

    scrollAmount += 1;

    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }


  setInterval(autoScroll, 20);





function openPopup(title, description, imageUrl) {
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-text").innerText = description;
  document.getElementById("popup-image").src = imageUrl;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}



