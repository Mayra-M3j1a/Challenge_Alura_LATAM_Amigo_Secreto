// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigo);

    // Limpiar el input
    inputAmigo.value = '';

    // Actualizar la lista en el DOM
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para realizar el sorteo.');
        return;
    }

    // Copia del array para no modificar el original
    const amigosSorteados = [...amigos];

    // Mezclar el array de amigos
    for (let i = amigosSorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]];
    }

    // Mostrar los resultados en el DOM
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    for (let i = 0; i < amigosSorteados.length; i++) {
        const amigoActual = amigos[i];
        const amigoSorteado = amigosSorteados[i];

        const li = document.createElement('li');
        li.textContent = `${amigoActual} ➡️ ${amigoSorteado}`;
        resultado.appendChild(li);
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vaciar el array de amigos
    document.getElementById('listaAmigos').innerHTML = ''; // Limpiar la lista en el DOM
    document.getElementById('resultado').innerHTML = ''; // Limpiar los resultados
    document.getElementById('amigo').value = ''; // Limpiar el input
}