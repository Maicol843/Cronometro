/*
REINICIAR

Añadamos la última parte: el botón de reinicio.
Una vez que se haga clic en el botón de reinicio, este debería:
1. detener el intervalo (si existe)
2. restablecer el tiempo de texto a 00:00:00
3. cambiar el texto del botón de inicio/parada a Start
*/

// Obtenemos los elementos del DOM
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const stopwatchDisplay = document.getElementById('stopwatch');

// Variables de control y tiempo
let isRunning = false;
let intervalId = null;
let totalSeconds = 0;

// Función para formatear el tiempo en HH:MM:SS
function formatTime(totalSecs) {
    const hours = Math.floor(totalSecs / 3600);
    const minutes = Math.floor((totalSecs % 3600) / 60);
    const seconds = totalSecs % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Escuchador de eventos para el botón de inicio/parada
startStopButton.addEventListener('click', () => {
    if (isRunning) {
        // Si está corriendo, detenemos el intervalo
        clearInterval(intervalId);
        startStopButton.textContent = 'Start';
    } else {
        // Si está detenido, iniciamos el intervalo que actualiza cada segundo
        intervalId = setInterval(() => {
            totalSeconds++;
            stopwatchDisplay.textContent = formatTime(totalSeconds);
        }, 1000);
        startStopButton.textContent = 'Stop';
    }
    
    // Alternamos el estado de ejecución
    isRunning = !isRunning;
});

// Escuchador de eventos para el botón de reinicio
resetButton.addEventListener('click', () => {
    // 1. Detiene el intervalo si existe
    clearInterval(intervalId);
    intervalId = null;
    
    // 2. Restablece el estado y el texto del cronómetro a 00:00:00
    isRunning = false;
    totalSeconds = 0;
    stopwatchDisplay.textContent = '00:00:00';
    
    // 3. Cambia el texto del botón de inicio/parada de vuelta a Start
    startStopButton.textContent = 'Start';
});