function reiniciar() {
    let reinicio = prompt("preciona acptar para volver a jugar, o cancelar para salir")
    if (reinicio == false) {
        inicioJuego();
    } else {
        alert("Adiós.")
    }
}

function culturaGeneral() {
    alert("Cultura General")
    let contador = 0;
    let pregunta1 = prompt("¿Cuál es el océano más grande del mundo? \n a) Océano Atlántico \n b) Océano Índico \n c) Océano Pacífico").toLowerCase();

    if (pregunta1 === "c") {
        contador++;
    }

    let pregunta2 = prompt("¿En qué país se encuentra la Torre Eiffel? \n a) Italia \n b) Francia \n c) España").toLowerCase();

    if (pregunta2 === "b") {
        contador++;
    }

    let pregunta3 = prompt("¿Cuál es el elemento químico representado por el símbolo O? \n a) Oxigeno \n b) Oro \n c) Osmio").toLowerCase();

    if (pregunta3 === "a") {
        contador++;
    }
    alert(`Respondiste ${contador} preguntas correctamente.`)

    reiniciar();

}

function musica() {
    alert("Música")
    let contador = 0;
    let pregunta1 = prompt("¿Quién es conocido por la canción Thriller? \n a) Michael Jackson \n b) Madonna \n c) Prince").toLowerCase();

    if (pregunta1 === "a") {
        contador++;
    }

    let pregunta2 = prompt("¿Quién es conocido como El Potro y es una figura destacada del cuarteto argentino? \n a) Carlos La Mona Jiménez \n b) Ulises Bueno \n c) Rodrigo Bueno").toLowerCase();

    if (pregunta2 === "c") {
        contador++;
    }

    let pregunta3 = prompt("¿De qué nacionalidad es el rapero llamado Duki? \n a) Talibán \n b) Chino \n c) Argentino").toLowerCase();

    if (pregunta3 === "c") {
        contador++;
    }
    alert(`Respondiste ${contador} preguntas correctamente.`)

    reiniciar();
}

function geografia() {
    alert("Geografía")
    let contador = 0;
    let pregunta1 = prompt("¿Cuál es la capital de España? \n a) Barcelona \n b) Madrid \n c) Sevilla").toLowerCase();

    if (pregunta1 === "b") {
        contador++;
    }

    let pregunta2 = prompt("¿En qué continente se encuentra Brasil? \n a) África \n b) Europa \n c) América").toLowerCase();
    if (pregunta2 === "c") {
        contador++;
    }

    let pregunta3 = prompt("¿Cuál es el país conocido por tener una forma de bota? \n a) Grecia \n b) Italia \n c) Portugal").toLowerCase();

    if (pregunta3 === "b") {
        contador++;
    }
    alert(`Respondiste ${contador} preguntas correctamente.`)

    reiniciar();
}




function inicioJuego() {
    let tipoDePreguntas = prompt("Selecciona una categoria (1, 2 o 3): \n 1 = Cultura General. \n 2 = Música. \n 3 = Geografía. ");
    if (tipoDePreguntas == 1) {
        culturaGeneral();

    } else if (tipoDePreguntas == 2) {
        musica();

    } else if (tipoDePreguntas == 3) {
        geografia();

    } else {
        alert("Opción no valida")
        inicioJuego()
    }
}

inicioJuego();