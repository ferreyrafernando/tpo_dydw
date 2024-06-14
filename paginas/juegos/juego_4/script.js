document.addEventListener('DOMContentLoaded', function() {
    const preguntas = [
        {
            pregunta: "¿Qué debes hacer si ves una luz roja?",
            opciones: ["Acelerar", "Detenerse", "Continuar a velocidad constante"],
            respuesta: 1
        },
        {
            pregunta: "¿Qué debes hacer si ves una señal de ceda el paso?",
            opciones: ["Acelerar", "Detenerse", "Ceder el paso a otros vehículos"],
            respuesta: 2
        },
        {
            pregunta: "¿Qué debes hacer si ves una señal de cruce peatonal?",
            opciones: ["Acelerar", "Reducir la velocidad y estar atento a los peatones", "Tocar la bocina"],
            respuesta: 1
        },
        {
            pregunta: "¿Qué debes hacer si ves una señal de límite de velocidad?",
            opciones: ["Acelerar", "Mantener la velocidad indicada", "Reducir la velocidad por debajo del límite"],
            respuesta: 1
        }
    ];

    let preguntaActual = 0;
    let puntos = 0;

    function mostrarPregunta() {
        const pregunta = preguntas[preguntaActual];
        document.getElementById('pregunta').innerText = pregunta.pregunta;
        const opcionesDiv = document.getElementById('opciones');
        opcionesDiv.innerHTML = '';
        pregunta.opciones.forEach((opcion, index) => {
            const boton = document.createElement('button');
            boton.innerText = opcion;
            boton.classList.add('btn', 'btn-primary', 'opcion');
            boton.addEventListener('click', () => verificarRespuesta(index));
            opcionesDiv.appendChild(boton);
        });
    }

    function verificarRespuesta(seleccion) {
        const pregunta = preguntas[preguntaActual];
        const resultadoDiv = document.getElementById('resultado');
        if (seleccion === pregunta.respuesta) {
            puntos += 10;
            resultadoDiv.innerText = "¡Correcto! Puntos: " + puntos;
        } else {
            resultadoDiv.innerText = "Incorrecto. La respuesta correcta era: " + pregunta.opciones[pregunta.respuesta] + ".Puntos Actuales: " + puntos;
        }

        preguntaActual++;
        if (preguntaActual < preguntas.length) {
            setTimeout(mostrarPregunta, 1000);
        } else {
            resultadoDiv.innerText += " ¡Juego terminado! Puntuación final: " + puntos;
        }
    }

    function reiniciarJuego() {
        preguntaActual = 0;
        puntos = 0;
        document.getElementById('resultado').innerText = '';
        mostrarPregunta();
    }


    mostrarPregunta();
    window.reiniciarJuego = reiniciarJuego;

    document.getElementById('reiniciar').addEventListener('click', function() {
        reiniciarJuego();
    });

    document.getElementById('backButton').addEventListener('click', function() {
        window.history.back();
    });
});
