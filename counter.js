// Inicializar contador
let clics = 0;

// Función para incrementar el contador
function incrementarContador() {
    clics++;
    counter.textContent = clics;
}

// Obtener los elementos de los pingüinos por sus IDs usando querySelector
const penguin1 = document.querySelector('#penguin1');
const penguin2 = document.querySelector('#penguin2');
const penguin3 = document.querySelector('#penguin3');
const penguin4 = document.querySelector('#penguin4');

// Agregar event listener para cada pingüino
penguin1.addEventListener('click', incrementarContador);
penguin2.addEventListener('click', incrementarContador);
penguin3.addEventListener('click', incrementarContador);
penguin4.addEventListener('click', incrementarContador);