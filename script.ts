// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon') as HTMLElement;
let navbar = document.querySelector('.navbar') as HTMLElement;

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx bx-x');
    navbar.classList.toggle('active');
};



// Select all sections and nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  // Get the current scroll position
  let scrollPos = window.scrollY;

  sections.forEach(section => {
    let sectionTop = section.offsetTop - 150; // Offset for smoother transition
    let sectionHeight = section.offsetHeight;
    let sectionId = section.getAttribute('id');

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      // Remove 'active' class from all nav links
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      // Add 'active' class to the current section link
      const activeLink = document.querySelector(`header nav a[href*=${sectionId}]`);
      activeLink?.classList.add('active');
    }
  });
};

// Scroll smoothly to the top or the "home" se
const scrollTopBtn = document.querySelector('.footer-iconTop a');

scrollTopBtn?.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Scroll smoothly to the top or the "home" section
    const homeSection = document.querySelector('#home');
    
    homeSection?.scrollIntoView({
        behavior: 'smooth'
    });
});

