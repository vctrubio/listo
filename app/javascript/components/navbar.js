const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('#navbar-banner-lewagon');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-lewagon');
      } else {
        navbar.classList.remove('navbar-lewagon');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
