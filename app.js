// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el nombre no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Validar que el nombre no esté repetido
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

    // Recorrer el array de amigos y crear elementos <li>
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un nombre aleatorio
function sortearAmigo() {
    // Verificar que haya al menos dos nombres en la lista
    if (amigos.length < 2) {
        alert('Debes agregar al menos dos nombres para realizar el sorteo.');
        return;
    }

    // Seleccionar un nombre aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el DOM
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El nombre sorteado es: <strong>${amigoSorteado}</strong>!</li>`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Vaciar el array de amigos
    amigos = [];

    // Limpiar la lista en el DOM
    document.getElementById('listaAmigos').innerHTML = '';

    // Limpiar los resultados
    document.getElementById('resultado').innerHTML = '';

    // Limpiar el input
    document.getElementById('amigo').value = '';
}