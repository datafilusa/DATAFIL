function toggleMenu() {
  var mobileMenu = document.querySelector('.mobile-menu');

  // Toggle the visibility of the mobile menu
  mobileMenu.style.display = (mobileMenu.style.display === 'flex' || mobileMenu.style.display === '') ? 'none' : 'flex';
}

// Close mobile menu when the screen is resized wider than 900px
window.addEventListener('resize', function () {
  var mobileMenu = document.querySelector('.mobile-menu');
  var screenWidth = window.innerWidth;

  if (screenWidth > 900) {
    mobileMenu.style.display = 'none';
  }
});