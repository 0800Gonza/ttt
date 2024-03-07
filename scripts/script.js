document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
  
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
  
        // Cambia el ícono de acuerdo al tema actual
        const isDarkMode = body.classList.contains('dark-theme');
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
  });
  function redirigir() {
    window.location.href = "contacto.html";
  }
  