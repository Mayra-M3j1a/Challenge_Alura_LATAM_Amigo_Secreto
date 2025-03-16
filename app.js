// Función para mezclar la lista de nombres
function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función principal para asignar amigos secretos
function asignarAmigosSecretos(nombres) {
    if (nombres.length < 2) {
        console.error("Debe haber al menos dos participantes.");
        return;
    }

    // Mezclar la lista de nombres
    const mezclados = mezclar([...nombres]);
    const asignaciones = {};

    for (let i = 0; i < nombres.length; i++) {
        asignaciones[nombres[i]] = mezclados[i];
    }

    // Verificar que nadie se asigne a sí mismo
    for (const [nombre, asignado] of Object.entries(asignaciones)) {
        if (nombre === asignado) {
            console.log("Se detectó una autoasignación. Reiniciando...");
            return asignarAmigosSecretos(nombres); // Reiniciar en caso de error
        }
    }

    return asignaciones;
}

// Ejemplo de uso
const nombres = ["Ana", "Carlos", "María", "Luis", "Sofía"];
const resultado = asignarAmigosSecretos(nombres);

if (resultado) {
    console.log("Asignaciones de Amigo Secreto:");
    for (const [nombre, asignado] of Object.entries(resultado)) {
        console.log(`${nombre} → ${asignado}`);
    }
}
