// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombre);
    input.value = "";
    mostrarAmigos();
}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Lista de amigos vacía");
        return;
    }

    const amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSeleccionado}</li>`;
}
