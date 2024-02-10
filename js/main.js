
const buttons = document.querySelector('.buttons');
const newButton = document.createElement('button');
const body = document.querySelector('body');

const imageElement = document.createElement('img');
imageElement.src = '../src/love_gif.gif';
imageElement.alt = 'Love gif';
imageElement.style.width = '220px';
imageElement.style.height = '220px';

document.getElementById('yesButton').addEventListener('click', function() {
    body.appendChild(imageElement);
    alert('¡Gracias!');
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    this.style.position = 'absolute';
    this.style.zIndex = "1";

    // agregar una etiqueta botón dentro de buttons
    
    buttons.appendChild(newButton);
    
    let leftPosition = Math.random() * window.innerWidth;
    let topPosition = Math.random() * window.innerHeight;

    // Asegúrate de que el botón no salga de la ventana
    leftPosition = leftPosition < window.innerWidth - this.offsetWidth ? leftPosition : window.innerWidth - this.offsetWidth;
    topPosition = topPosition < window.innerHeight - this.offsetHeight ? topPosition : window.innerHeight - this.offsetHeight;

    // Mueve el botón a la nueva posición
    this.style.left = leftPosition + 'px';
    this.style.top = topPosition + 'px';
});