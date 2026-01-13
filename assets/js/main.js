(function () {
  // Mobile nav toggle
  const burger = document.querySelector('.burger-menu');
  const menu = document.querySelector('.nav-menu');

  if (burger && menu) {
    burger.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('active');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Auto-close menu when clicking a section link
    menu.addEventListener('click', function (e) {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        menu.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll for internal anchors
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
})();
