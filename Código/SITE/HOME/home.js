var images = [,,]; // Substitua por suas imagens
var index = 0;

setInterval(function() {
    document.body.style.backgroundImage = 'url(' + images[index] + ')';
    index = (index + 1) % images.length;
}, 180000); // Troca a imagem a cada 3 minutos
