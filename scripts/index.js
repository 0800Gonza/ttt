$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 1500, // Cambia esto para ajustar la velocidad (en milisegundos)
        dots: true, // Muestra los puntos de navegación
        arrows: false // Oculta las flechas de navegación (puedes cambiarlo según tu preferencia)
    });
});

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    // Muestra u oculta el header y la lista al hacer scroll
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("wrapperheader").style.top = "0";
        document.getElementById("listas").style.top = "60px";
    } else {
        document.getElementById("wrapperheader").style.top = "-60px";
        document.getElementById("listas").style.top = "0";
    }

    prevScrollpos = currentScrollPos;
}

$(document).ready(function(){
    $('.product-carousel').slick({
        slidesToShow: 3, // Número de tarjetas a mostrar
        slidesToScroll: 1, // Número de tarjetas a desplazar
        autoplay: true,
        autoplaySpeed: 3000, // Cambia esto para ajustar la velocidad (en milisegundos)
        dots: true,
        arrows: false
    });
});