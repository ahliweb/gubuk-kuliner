// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupHeaderScroll();
  setupScrollSpy();
});

/**
 * Mobile Navigation Menu Toggle
 */
function setupMobileMenu() {
  const burgerBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = burgerBtn?.querySelector('.menu-icon');
  const closeIcon = burgerBtn?.querySelector('.close-icon');
  const mobileLinks = mobileMenu?.querySelectorAll('a');

  if (!burgerBtn || !mobileMenu) return;

  function toggleMenu() {
    const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
    burgerBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    
    // Toggle icons
    if (menuIcon && closeIcon) {
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    }
    
    // Toggle body scroll to prevent background scrolling
    document.body.classList.toggle('overflow-hidden');
  }

  burgerBtn.addEventListener('click', toggleMenu);

  // Close menu when clicking a link
  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      burgerBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.add('hidden');
      if (menuIcon && closeIcon) {
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
      document.body.classList.remove('overflow-hidden');
    });
  });
}

/**
 * Shrink Header on Scroll
 */
function setupHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('shadow-md', 'py-3');
      header.classList.remove('py-5');
    } else {
      header.classList.remove('shadow-md', 'py-3');
      header.classList.add('py-5');
    }
  });
}

/**
 * Scrollspy for Active Navigation Links
 */
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length === 0 || navLinks.length === 0) return;

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120; // offset for sticky header

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-brand-secondary', 'font-semibold');
      const href = link.getAttribute('href');
      if (href && href.substring(1) === currentId) {
        link.classList.add('text-brand-secondary', 'font-semibold');
      }
    });
  });
}
