$(document).ready(function() {
    const quizData = {
        tema1: [
            {
                question: "Si eligieras la bicicleta y estuvieras apurado, ¿cuál de las siguientes opciones elegirías para circular seguro?",
                options: ["Por el medio de una calle poco transitada, aunque el camino sea más largo, usando casco y reflectantes.", 
                    "Por el carril izquierdo de una avenida, trayecto más corto, usando casco y reflectantes.", 
                    "Por el carril derecho de una calle poco transitada, aunque el camino sea más largo, usando casco y reflectantes."],
                correct: "Por el carril derecho de una calle poco transitada, aunque el camino sea más largo, usando casco y reflectantes."
            },
            {
                question: "Si se usara el casco reglamentario muchas de estas muertes se evitarían, en un porcentaje de:",
                options: ["22%", "60%", "39%"],
                correct: "60%"
            },
            {
                question: "La capacidad máxima de pasajeros permitida por la ley de tránsito en ciclomotores es de:",
                options: ["Una persona adulta", "Dos personas adultas", "Una persona adulta y dos menores de edad."],
                correct: "Una persona adulta"
            },
            {
                question: "¿Cuál es el porcentaje máximo de alcohol en sangre tolerado para los conductores de motovehiculos?",
                options: ["0,5 g/l de sangre", 
                    "P0,3 g/l de sangre", 
                    "0,2 g/l de sangre"],
                correct: "0,2 g/l de sangre"
            },
            {
                question: "¿Cuántas veces más posibilidades de morir tiene una persona que circula en moto o ciclomotor con respecto a una que circula en automotor de cuatro ruedas?",
                options: ["5 veces", "20 veces", "3 veces"],
                correct: "20 veces"
            },
            {
                question: "Si vas caminando y tenés que cruzar la calle, no habiendo una senda peatonal marcada en la cuadra, ¿por dónde cruzarías con más seguridad?",
                options: ["Por cualquier parte, ya que el riesgo es el mismo.", 
                    "Por la mitad de la cuadra, desde donde puedas ver mejor los vehículos que se acercan.", 
                    "Por la esquina, a pesar de los vehículos que puedan doblar allí."],
                correct: "Por la esquina, a pesar de los vehículos que puedan doblar allí."
            },

            {
                question: "¿Qué se debe hacer si el semáforo está en rojo cuando un policía indica que continúes tu marcha?",
                options: ["Detenerte y avisarle que el semáforo está en rojo.", 
                    "Obedecer al agente, sin tener en cuenta la señal luminosa.", 
                    "Obedecer la señal del semáforo."],
                correct: "Obedecer al agente, sin tener en cuenta la señal luminosa."
            },
            {
                question: "¿Qué es ser un conductor seguro?",
                options: ["El que, mediante la práctica intensa, logra rápidos reflejos y así puede volantear rápidamente o aplicar el freno en menos de un segundo.", 
                    "El que usa siempre, pero siempre, el cinturón de seguridad excepto cuando está protegido por airbags.", 
                    "Aquel que cumple con todas las normas de tránsito y seguridad vial, aunque alguna no le parezca adecuada y nunca asume riesgos innecesarios."],
                correct: "Aquel que cumple con todas las normas de tránsito y seguridad vial, aunque alguna no le parezca adecuada y nunca asume riesgos innecesarios."
            },
            {
                question: "De éstas tres, siendo todas importantes, ¿cual resulta imprescindible antes de arrancar?:",
                options: ["Limpiar prolijamente el parabrisas y espejos", 
                    "Chequear visualmente el correcto estado y presión de los neumáticos.", 
                    "Colocarse el cinturón de seguridad."],
                correct: "Colocarse el cinturón de seguridad."
            },
            {
                question: "Hay algunas reglas básicas que un conductor seguro debe cumplir para evitar los siniestros de tránsito. Uno de esos comportamientos básicos es:",
                options: ["Toca la bocina en las esquinas sin semáforo en las que, por alguna razón, no puede ver si se acercan otros vehículos.", 
                    "Si se aproxima la noche o una gran tormenta, acelera lo más que puede para tratar de disminuir el tiempo de conducción nocturna o escapar de la tormenta.", 
                    "Avisa con anticipación sus maniobras."],
                correct: "Avisa con anticipación sus maniobras."
            }

        ],
        tema2: [
            {
                question: "Ante un choque frontal inminente, la conducta más segura de las siguientes es:",
                options: ["Acelerar para tratar de escapar más rápido.", 
                    "Frenar lo más posible y tratar de desviarse a la derecha.", 
                    "Agarrarse fuerte al volante y cerrar los ojos para evitar daños irreparables a los ojos."],
                correct: "Frenar lo más posible y tratar de desviarse a la derecha."
            },
            {
                question: "Si un conductor te insulta o gesticula, ¿qué es más conveniente hacer para que ello no afecte a tu seguridad?:",
                options: ["Responderle con altura, con calma, midiendo las palabras y dando la contestación que sea necesaria, pero no redoble la apuesta con mayores gestos o palabras.", 
                    "No contestarle ni mirarlo: no engancharse ni tomarlo como algo personal, más bien poner distancia.", 
                    "Responder o gesticular como se desee, pero nunca detener el vehículo."],
                correct: "No contestarle ni mirarlo: no engancharse ni tomarlo como algo personal, más bien poner distancia."
            },
            {
                question: "Si olvidaste apagar el celular al tomar el volante y suena, ¿qué es más conveniente hacer?",
                options: ["Contestar brevemente (no más de 15 segundos) para postergar la conversación.", 
                    "Detenerse en un lugar seguro, responder la llamada y luego apagar el celular.", 
                    "Disminuir la velocidad significativamente y contestar la llamada sin perder la atención a la conducción."],
                correct: "Detenerse en un lugar seguro, responder la llamada y luego apagar el celular."
            },
            {
                question: "Cuando se circula por una ruta a más de 80 km/h. ¿en qué porcentaje aumenta el riesgo de muerte en caso de colisión si se conduce a 30 km/h más, es decir, a 110 km/h?",
                options: ["30% más", "90% más", "300% más"],
                correct: "300% más"
            },
            {
                question: "Un estudio sueco demostró que un peatón arrollado por un vehículo que circule a 32 km/h tiene el 5% de posibilidades de morir como consecuencia del atropellamiento. Al doble de velocidad, es decir a 64 km/h., las posibilidades de muerte son:",
                options: ["10%", "80%", "28%"],
                correct: "80%"
            },
            {
                question: "La Ley de Tránsito Nº 26.363 aumenta la cantidad de faltas graves y faculta a la autoridad de control a retener preventivamente la licencia de conducir. Pero sólo algunas de esas faltas graves autorizan dicha retención, entre ellas, una de las siguientes:",
                options: ["La violación de los límites de velocidad máxima y mínimos, con un margen de tolerancia de hasta un 10%.", 
                    "La conducción de vehículos sin que alguno de sus ocupantes utilice el correspondiente correaje de seguridad.", 
                    "La conducción de vehículos transportando menores de 10 años en una ubicación distinta a la parte trasera."],
                correct: "La violación de los límites de velocidad máxima y mínimos, con un margen de tolerancia de hasta un 10%"
            },
            {
                question: "Al respecto, en nuestro Código Penal ya se ha incorporado el primer Delito contra la Seguridad Vial, que comete:",
                options: ["Aquel que supere la velocidad de 160 km/h.", 
                    "El que participe en una prueba de velocidad o destreza (“picada”), creando un peligro para la vida.", 
                    "El que conduzca con una concentración alcohólica superior a 1g/l de sangre."],
                correct: "El que participe en una prueba de velocidad o destreza (“picada”), creando un peligro para la vida."
            },
            {
                question: "Los siniestros de tránsito son la primera causa de muerte entre los menores de edad que ya cumplieron su primer año de vida. Cuando empiezan a ir a la escuela, ¿cuál de estas opciones es la más segura para transportarlos, si viven lejos de ella?",
                options: ["En transporte público o escolar.", 
                    "En ciclomotor llevados por el padre o por sí solos.", 
                    "En bicicleta."],
                correct: "En transporte público o escolar."
            },
            {
                question: "Si un médico receta un medicamento para la tos, ¿qué es lo más aconsejable?:",
                options: ["Tomarlo conforme lo indicado, ya que no afecta a la conducción.", 
                    "Aunque el médico no diga nada, preguntarle si ese medicamento puede afectar a la conducción.", 
                    "Leer detenidamente el prospecto a ver si está contraindicada la conducción."],
                correct: "Aunque el médico no diga nada, preguntarle si ese medicamento puede afectar a la conducción."
            },
            {
                question: "Si tu hijo está por cumplir los 17 años, o aún antes, y quiere conducir automotores:",
                options: ["Lo llevás a dar una vuelta en su auto y le enseñás el ABC de la conducción, facilitándole su práctica.", 
                    "Le sugerís que haga un curso en una escuela de conducción, prometiéndole que, cuando termine y apruebe el examen, le darás las llaves de tu auto.", 
                    "Le explicás los riesgos de la conducción adolescente, le repetís cuánto lo querés y que, por esa razón, cuando demuestre que está maduro, lo apoyarás en el aprendizaje y la obtención de la licencia de conducir."],
                correct: "Le explicás los riesgos de la conducción adolescente, le repetís cuánto lo querés y que, por esa razón, cuando demuestre que está maduro, lo apoyarás en el aprendizaje y la obtención de la licencia de conducir."
            }
        ],
        tema3: [
            {
                question: "El cinturón de seguridad es una de las medidas pasivas de seguridad más eficaces... Pero es bueno analizar los casos especiales. Por ejemplo, en caso de un choque seguido de incendio o inmersión en agua, el uso del cinturón de seguridad, en la mayoría de los casos, es:",
                options: ["Muy útil, ya que evita que al producirse el mismo, el ocupante se golpee, lesione o pierda el conocimiento, con la consiguiente pérdida de la posibilidad de escapar del vehículo.", 
                    "Inútil, ya que el ocupante necesitará más tiempo para escapar del vehículo por tener que desabrocharse el cinturón de seguridad, con el riesgo de no poder hacerlo.", 
                    "Contraproducente, ya que el ocupante pierde la posibilidad de ser despedido del vehículo y evitar quedar dentro de él, ante una muerte casi inevitable."],
                correct: "Muy útil, ya que evita que al producirse el mismo, el ocupante se golpee, lesione o pierda el conocimiento, con la consiguiente pérdida de la posibilidad de escapar del vehículo."
            },
            {
                question: "La distancia mínima de seguridad varía según la velocidad de circulación. Se calcula en función del tiempo que transcurre entre que el vehículo que va adelante pasa un punto fijo (árbol, poste, puente, etc.) y el momento en que el vehículo que conducimos lo hace. El tiempo mínimo obligatorio por ley es:",
                options: ["1 segundo.", 
                    "2 segundos.", 
                    "4 segundos."],
                correct: "2 segundos."
            },
            {
                question: "Los niños más pequeños, que tienen escaso peso y tamaño... ¿Cómo viajan más seguros?",
                options: ["Sujetos con el cinturón de seguridad en el asiento delantero.", 
                    "En brazos de su madre en el asiento trasero.", 
                    "Sentados en sillas especiales fijadas al vehículo, en el asiento trasero."],
                correct: "Sentados en sillas especiales fijadas al vehículo, en el asiento trasero."
            },
            {
                question: "Aunque se aconseja en nuestra campaña: ''Nada de alcohol al conducir'', las Leyes de Tránsito Nacional y de la Provincia de Buenos Aires establecen un límite máximo tolerado de alcohol en sangre para conducir automóviles particulares de...",
                options: ["0,5 gramos por litro.", 
                    "0,8 gramos por litro.", 
                    "0,2 gramos por litro."],
                correct: "0,8 gramos por litro."
            },
            {
                question: "Un conductor responsable no conduce cuando sabe que en el camino hay niebla. Su aparición inesperada puede ser generadora de siniestros fatales. Por ello es importante, en caso de aparición de niebla espesa en la vía de circulación:",
                options: ["Encender las luces altas y las anti-niebla (si las hay) para continuar circulando a la misma velocidad que se traía, para evitar ser colisionado desde atrás.", 
                    "Encender las luces de posición, las luces bajas o las antiniebla, si las hubiese, y las de emergencia si fueran necesarias, disminuyendo la velocidad, y tratar de buscar un sitio seguro dónde estacionar a la espera de que el fenómeno revierta", 
                    "Frenar inmediatamente allí donde se encuentre y luego ver la posibilidad de dirigirse a la banquina para estacionar."],
                correct: "Encender las luces de posición, las luces bajas o las antiniebla, si las hubiese, y las de emergencia si fueran necesarias, disminuyendo la velocidad, y tratar de buscar un sitio seguro dónde estacionar a la espera de que el fenómeno revierta."
            },
            {
                question: "Cuando se ingiere una bebida alcohólica, aún cerveza, no se debe conducir hasta que no cesen los efectos del alcohol, que ocurre...",
                options: ["Tomando abundante café bien cargado y con mucha azúcar.", 
                    "Duchándose y lavándose la cabeza, por un tiempo prolongado, con agua bien fría.", 
                    "Con el transcurso del tiempo que necesita el organismo para eliminarlo."],
                correct: "Con el transcurso del tiempo que necesita el organismo para eliminarlo."
            },
            {
                question: "Si tuviera que realizar un viaje largo, la fatiga puede transformarse en un grave peligro, por ello se aconseja realizar paradas de descanso de 10 minutos mínimo, descendiendo del vehículo para realizar diversos ejercicios para estiramiento y tonificación muscular, cada:",
                options: ["1 hora.", "2 horas.", "5 horas."],
                correct: "2 horas."
            },
            {
                question: "Cuando el conductor estaciona su vehículo sobre la mano derecha de la calle, debe descender sobre la calzada con cierto riesgo de ser arrollado, por ello deberá mirar a los vehículos circulantes antes de descender y al hacerlo deberá caminar hacia:",
                options: ["La parte delantera del vehículo para alcanzar la vereda.", 
                    "Hacia la parte trasera del vehículo, para alcanzar la vereda.", 
                    "En la dirección que lo lleve al lugar donde se dirige."],
                correct: "Hacia la parte trasera del vehículo, para alcanzar la vereda."
            },
            {
                question: "Si su vehículo se descompone en viaje por una ruta y usted debe desplazarse para pedir auxilio, después de haber balizado adecuadamente el auto deberá caminar",
                options: ["Por el borde de la calzada pero en el mismo sentido que el tránsito vehicular", "Lo más alejado de la calzada que sea posible, en el sentido contrario al del tránsito vehicular.", "Lo más alejado de la calzada que sea posible, en el mismo sentido que el tránsito vehicular."],
                correct: "Lo más alejado de la calzada que sea posible, en el sentido contrario al del tránsito vehicular."
            },
            {
                question: "Cada conductor de un vehículo es responsable por la seguridad de todos los ocupantes del mismo. Por ello no sólo deberá usar el cinturón de seguridad él, sino exigirlo a su acompañante del asiento delantero. En cuanto a los ocupantes de los asientos traseros:",
                options: ["No es necesario, ya que éstos cuentan con la protección de las butacas delanteras, por lo que la ley no lo exige", 
                    "Sólo deberán usarlos si se tratara de ocupantes niños, por sus características físicas especiales.", 
                    "Deberán usarlo siempre, por las mismas razones que los que se ubican en los asientos delanteros."],
                correct: "Deberán usarlo siempre, por las mismas razones que los que se ubican en los asientos delanteros."
            }
        ],
        tema4: [
            {
                question: "Los siniestros de tránsito constituyen una de las principales causas de muerte en nuestro país, que costaron 7.274 vidas en el año 2018. Con respecto a otras causantes de muerte (cáncer, suicidios, SIDA, etc.) ¿Qué lugar ocupa dicha causa, en nuestro país, para los menores de 35 años?",
                options: ["La primera", "Frontal", "Trasero"],
                correct: "Frontal"
            },
            {
                question: "El tipo de choque más peligroso en ruta, por su terrible efecto destructivo, es el:",
                options: ["Lateral", "Opción B2", "Opción C2"],
                correct: "Opción B2"
            },
            {
                question: "En 25 años (1990-2014)  muchos países redujeron la cantidad de muertos en siniestros de tránsito. Por ejemplo,  España los redujo 81%, Suecia 63%,  USA  27% y Holanda 59%. Argentina los redujo:",
                options: ["35%.", "0%", "18%"],
                correct: "0%"
            },
            {
                question: "¿Cuántos metros se necesitan para reaccionar y frenar un vehículo que circula a 90 km/h sobre pavimento seco, y en óptimas condiciones climáticas, del camino, y del móvil?",
                options: ["36 metros", "Humanas", "Del camino"],
                correct: "Humanas"
            },
            {
                question: "La mayoría de los siniestros de tránsito, ¿por qué tipo de fallas se producen?",
                options: ["Del vehículo", "Opción B2", "Opción C2"],
                correct: "Opción B2"
            },
            {
                question: "Conducir durante la noche, en relación a la posibilidad de sufrir un siniestro, es:",
                options: ["Más seguro, ya que la cantidad de vehículos que circulan es menor y disminuye el riesgo.", 
                    "Es indistinto, ya que la posibilidad de sufrir un siniestro depende de la capacidad y experiencia del conductor a cualquier hora del día", 
                    "Menos seguro, ya que la visibilidad se encuentra reducida y existe el riesgo de ser encandilado y/o de caer en un estado de somnolencia"],
                correct: "Menos seguro, ya que la visibilidad se encuentra reducida y existe el riesgo de ser encandilado y/o de caer en un estado de somnolencia"
            },
            {
                question: "La presencia de animales sueltos en las rutas es causa importante de lesiones y muertes viales, más durante la noche. Si un animal se cruzara delante de su vehículo, como regla general, ¿Qué es más seguro?",
                options: ["Frenar bruscamente y procurar hacer señas con las luces", 
                    "Disminuir la velocidad, frenando suavemente y tocar bocina, desviándose hacia la derecha", 
                    "Acelerar, desviándose hacia su izquierda, tratando de evitar al animal"],
                correct: "Disminuir la velocidad, frenando suavemente y tocar bocina, desviándose hacia la derecha"
            },
            {
                question: "Cuando se es encandilado por otro vehículo que viene en sentido contrario, ¿qué es conveniente para su seguridad?",
                options: ["Encender las luces altas para indicarle al otro vehículo que baje sus luces", 
                    "Disminuir la velocidad y mantener la dirección, guiándose por las líneas laterales de la ruta, de su mano, acercándose a ellas", 
                    "Cerrar y abrir varias veces los ojos para neutralizar el efecto mientras se colocan las luces altas para advertir al que encandila de su acto"],
                correct: "Disminuir la velocidad y mantener la dirección, guiándose por las líneas laterales de la ruta, de su mano, acercándose a ellas"
            },
            {
                question: "De las tres propuestas, ¿cuál es la velocidad más segura aconsejable en rutas en horario diurno y en condiciones de ruta y clima óptimos? (salvo que la señalización establezca una menor)",
                options: ["130 KM/Hora", "110 KM/hora", "90 KM/hora"],
                correct: "90 KM/hora"
            },
            {
                question: "El chocar frontalmente contra otro vehículo u objeto fijo a 50 Km/Hora, ¿de qué piso equivale a caer?",
                options: ["Un 1° piso", "Un 4° piso", "Un 10° piso"],
                correct: "Un 4° piso"
            }
        ]
    };

    let currentTopic = null;
    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const currentQuestion = quizData[currentTopic][currentQuestionIndex];
        const questionNumber = currentQuestionIndex + 1;

        $('#question').html(`
            <div class="question-container">
                <div class="question-number">Pregunta ${questionNumber}</div>
                <div class="question-text">${currentQuestion.question}</div>
            </div>
        `);
        $('#options').empty();
        currentQuestion.options.forEach(option => {
            $('#options').append(`<button class="option-button">${option}</button>`);
        });

        $('.option-button').click(function() {
            const selectedOption = $(this).text();
            if (selectedOption === currentQuestion.correct) {
                $(this).addClass('correct');
                score++;
            } else {
                $(this).addClass('incorrect');
                $(`.option-button:contains(${currentQuestion.correct})`).addClass('correct');
            }

            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < quizData[currentTopic].length) {
                    loadQuestion();
                } else {
                    showScore();
                }
            }, 500); // Espera 2 segundos antes de cargar la siguiente pregunta
        });
    }

    function showScore() {
        $('#quiz-container').hide();
        $('#final-container').show();
        let message = '';
        let imagePath = '';
    
        // Calcular el porcentaje de respuestas correctas
        const percentage = (score / quizData[currentTopic].length) * 100;
    
        // Asignar el mensaje y la imagen según el porcentaje obtenido
        if (percentage >= 70) {
            message = "¡Felicidades! ¡Eres un genio frente al volante!";
            imagePath = '../../../assets/images/exito.gif'; // Ruta de la imagen para felicitaciones
        } else if (percentage >= 50 && percentage < 70) {
            message = "¡Bien! Aun puedes seguir mejorando.";
            imagePath = '../../../assets/images/maso.gif'; // Ruta de la imagen para buen rendimiento
        } else {
            message = "¡Auch! Sigue practicando.";
            imagePath = '../../../assets/images/mal.gif'; // Ruta de la imagen para mal rendimiento
        }
    
        // Crear elemento de imagen
        const image = $('<img>').attr('src', imagePath).attr('alt', 'Descripción de la imagen');
    
        // Mostrar el mensaje de puntuación y la imagen
        $('#final-message').html(`
            <div style="font-size: 32px; color: #ffffff; font-family: Helvetica, sans-serif; font-weight: bold; margin-bottom: 20px;">
                ${message}
            </div>
        `);
        
        $('#final-message').append(image); // Agregar la imagen después del mensaje
    }
    
    

    $('#restart-button').click(function() {
        $('#final-container').hide();
        $('#welcome-container').show();
        currentTopic = null;
        currentQuestionIndex = 0;
        score = 0;
    });

    $('.topic-button').click(function() {
        currentTopic = $(this).data('topic');
        currentQuestionIndex = 0;
        score = 0;
        $('#welcome-container').hide();
        $('#quiz-container').show();

        // Crear y mostrar el título
        if (!$('#quiz-title').length) {
            $('#quiz-container').prepend('<h1 id="quiz-title">10 preguntas desafiarán tus conocimientos</h1>');
        }
        $('#quiz-title').css({
            'font-size': '32px',
            'color': '#ffffff',
            'font-family': 'Helvetica, sans-serif',
            'font-weight': 'bold',
            'text-align': 'center',
            'margin-bottom': '20px'
        });

        loadQuestion();
    });
});
