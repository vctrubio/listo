const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('#navbar-banner-lewagon');
  console.log("wow");
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-lewagon');
        console.log("add");
      } else {
        navbar.classList.remove('navbar-lewagon');
        console.log("remove");
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
