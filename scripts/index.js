document.addEventListener('DOMContentLoaded', function() {
    // Mostrar la ventana modal al cargar la página
    openModal();

    // Event listener para el botón de cambio de tema
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
});

function openModal() {
    // Muestra la ventana modal
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    // Cierra la ventana modal
    document.getElementById('myModal').style.display = 'none';
}

function toggleTheme() {
    // Cambia el tema al hacer clic en el botón
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Cambia el ícono de acuerdo al tema actual
    const isDarkMode = body.classList.contains('dark-theme');
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.innerHTML = isDarkMode ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}


$(document).ready(function() {
    console.log("Documento cargado");

    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        arrows: false
    });

    $('.product-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
  
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
  
        // Cambia el ícono de acuerdo al tema actual
        const isDarkMode = body.classList.contains('dark-theme');
        themeToggle.innerHTML = isDarkMode ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
  });
  
  