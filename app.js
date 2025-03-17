// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo);
        inputAmigo.value = ""; // Limpiar el campo de entrada
        actualizarListaAmigos();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para realizar el sorteo.");
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    // Copia del array de amigos para no modificar el original
    let amigosSorteados = [...amigos];

    // Mezclar el array de amigos de manera aleatoria
    amigosSorteados = shuffleArray(amigosSorteados);

    // Asignar a cada amigo un amigo secreto
    for (let i = 0; i < amigosSorteados.length; i++) {
        const amigoSecreto = amigosSorteados[(i + 1) % amigosSorteados.length];
        const li = document.createElement('li');
        li.textContent = `${amigosSorteados[i]} ➔ ${amigoSecreto}`;
        resultado.appendChild(li);
    }
}

// Función para mezclar un array de manera aleatoria (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}