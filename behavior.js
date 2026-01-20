document.addEventListener("DOMContentLoaded", () => {
  // Burger menu toggle
  const burgerMenu = document.querySelector(".burger-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (burgerMenu && navMenu) {
    burgerMenu.addEventListener("click", () => {
      const isActive = navMenu.classList.toggle("active");
      burgerMenu.setAttribute("aria-expanded", isActive ? "true" : "false");
    });
  }

  // Smooth scroll for anchor links
  document.addEventListener("click", (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;

    const targetSection = document.querySelector(anchor.getAttribute("href"));
    if (targetSection) {
      event.preventDefault();
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });

  // Carousel logic
  const slides = document.querySelectorAll(".slide");
  const arrowLeft = document.querySelector(".carousel-arrow.left");
  const arrowRight = document.querySelector(".carousel-arrow.right");

  let currentIndex = 0;
  let autoSlide = setInterval(nextSlide, 5000);

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);
  }

  if (arrowLeft && arrowRight) {
    arrowLeft.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });

    arrowRight.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });
  }
});
