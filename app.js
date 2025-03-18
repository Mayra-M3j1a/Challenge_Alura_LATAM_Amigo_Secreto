// Arreglo para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarListaAmigos();
        inputAmigo.value = ''; // Limpiar el campo de entrada
    } else {
        alert('Por favor, introduce un nombre válido y único.');
    }
}

// Función para actualizar la lista mostrada en la página
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista previa

    amigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        item.setAttribute('data-index', index);
        listaAmigos.appendChild(item);
    });
}

// Función para sortear al amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para hacer el sorteo.');
        return;
    }

    const nombresSorteados = [...amigos];
    const resultados = [];

    let valido = false;
    while (!valido) {
        shuffleArray(nombresSorteados);
        valido = validarSorteo(nombresSorteados);
    }

    amigos.forEach((amigo, index) => {
        resultados.push(`${amigo} -> ${nombresSorteados[index]}`);
    });

    mostrarResultados(resultados);
}

// Función para mezclar aleatoriamente un array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Validar que nadie se asigne a sí mismo
function validarSorteo(sorteados) {
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === sorteados[i]) {
            return false;
        }
    }
    return true;
}

// Función para mostrar los resultados en la página
function mostrarResultados(resultados) {
    const resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = ''; // Limpiar resultados previos

    resultados.forEach((resultado) => {
        const item = document.createElement('li');
        item.textContent = resultado;
        resultadoContainer.appendChild(item);
    });
}
