// JavaScript for automatic slideshow
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");
  const slideshow = document.getElementById("slideshow"); // Reference the slideshow container
  const slides = document.querySelectorAll(".mySlides"); // Reference all the slides
  let currentSlide = 0;

  function showSlide(slideIndex) {
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[slideIndex].style.display = "block";
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  // Function to start the automatic slideshow
  function startSlideshow() {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
  }

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Media query to handle mobile devices
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  mediaQuery.addEventListener("change", () => {
    if (mediaQuery.matches) {
      menuButton.style.display = "block";
      menu.style.display = "none";
    } else {
      menuButton.style.display = "none";
      menu.style.display = "flex";
    }
  });

  // Add this event listener to close the menu when a link is clicked
  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });

  // Start the automatic slideshow when the page loads
  startSlideshow();
});
