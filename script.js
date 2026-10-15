/*
INICIO Y PARADA BASICOS

En el archivo JS:

Agrega un escuchador de eventos de clic al botón de inicio/parada (start/stop)
Una vez que se haga clic, cambia el texto del botón a Stop
Al hacer clic de nuevo, cambia el texto del botón de vuelta a Start y así sucesivamente…
Necesitarás mantener una variable externa que se alternará cada vez.
*/

// Obtenemos el botón de inicio/parada usando su ID
const startStopButton = document.getElementById('startStop');

// Mantenemos una variable externa para rastrear el estado
let isRunning = false;

// Añadimos el escuchador de eventos de clic
startStopButton.addEventListener('click', () => {
    if (isRunning) {
        // Si está corriendo, al hacer clic cambia el texto de vuelta a "Start"
        startStopButton.textContent = 'Start';
    } else {
        // Si no está corriendo, al hacer clic cambia el texto a "Stop"
        startStopButton.textContent = 'Stop';
    }
    
    // Alternamos el estado de la variable booleana
    isRunning = !isRunning;
});