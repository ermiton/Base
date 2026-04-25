document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth < 900) {
        document.activeElement.blur();
      }
    });
  });
});
