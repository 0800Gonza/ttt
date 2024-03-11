document.addEventListener('DOMContentLoaded', function() {
    // Mostrar la ventana modal al cargar la página
    openModal();

    // Event listener para el botón de cambio de tema
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
});

function openModal() {
    // Muestra la ventana modal
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';

    // Muestra la imagen del <a> al abrir la ventana modal
    const whatsappImage = modal.querySelector('a img');
    whatsappImage.classList.remove('hidden');
}

function closeModal() {
    // Oculta la ventana modal
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';

    // Oculta la imagen del <a> después de cerrar la ventana modal
    const whatsappImage = modal.querySelector('a img');
    whatsappImage.classList.add('hidden');
}

$(document).ready(function() {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        arrows: true,
    });

    $('.product-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
    });
});
    // Define la función toggleTheme fuera del event listener
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

    // Event listener para el botón de cambio de tema
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);

  