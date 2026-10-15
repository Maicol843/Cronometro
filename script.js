/*
CRONOMETRO FUNCIONAL

Ahora, una vez que tenemos los botones de inicio y parada funcionando, ¡es hora de empezar a contar!
Para contar, utilizaremos una función de JavaScript llamada setInterval:
const interval = setInterval(func, milliseconds)
La función recibe dos argumentos: una función y un número que representa milisegundos. La función se llama cada vez que transcurre el número de milisegundos proporcionado.
Así que, por ejemplo:
let count = 0
function updateCount() {
    count += 1;
}
const interval = setInterval(updateCount, 1000)
En el ejemplo anterior, aumentamos la variable count en 1 cada segundo.
Si quieres detener un intervalo, utiliza clearInterval con el valor de retorno de setInterval:
const interval = setInterval(updateCount, 1000)
clearInterval(interval)

Agrega el siguiente soporte a tu archivo JS:
- Una vez que se haga clic en el botón de inicio/parada, establece un intervalo que actualice el texto del cronómetro cada segundo en uno, asegúrate de que esté formateado correctamente.
- Una vez que se haga clic en el botón de inicio/parada nuevamente, borra el intervalo en ejecución.
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

// Escuchador para el botón de inicio/parada
startStopButton.addEventListener('click', () => {
    if (isRunning) {
        // Si está corriendo, lo detenemos limpiando el intervalo
        clearInterval(intervalId);
        startStopButton.textContent = 'Start';
    } else {
        // Si está detenido, iniciamos el intervalo que se ejecuta cada segundo
        intervalId = setInterval(() => {
            totalSeconds++;
            stopwatchDisplay.textContent = formatTime(totalSeconds);
        }, 1000);
        startStopButton.textContent = 'Stop';
    }
    
    // Alternamos el estado
    isRunning = !isRunning;
});

// Escuchador para el botón de reinicio
resetButton.addEventListener('click', () => {
    // Detenemos el intervalo si está activo
    clearInterval(intervalId);
    intervalId = null;
    
    // Reiniciamos variables y visualización
    isRunning = false;
    totalSeconds = 0;
    stopwatchDisplay.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
});