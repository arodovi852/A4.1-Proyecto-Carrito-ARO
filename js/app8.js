
const form = document.getElementById("form-mensaje");
const input = document.getElementById("input-mensaje");
const lista = document.getElementById("lista-mensajes");

let mensajes = [];

document.addEventListener("DOMContentLoaded", () => {
    const guardados = localStorage.getItem("mensajes");

    if (guardados) {
        mensajes = JSON.parse(guardados);
        mostrarMensajes();
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = input.value.trim();
    if (texto === "") return;

    const mensaje = {
        id: Date.now(),
        texto: texto
    };

    mensajes.push(mensaje);
    guardar();
    mostrarMensajes();
    input.value = "";
});

function mostrarMensajes() {
    lista.innerHTML = "";

    mensajes.forEach(mensaje => {
        const li = document.createElement("li");
        li.textContent = mensaje.texto;

        // Botón borrar
        const btn = document.createElement("button");
        btn.textContent = "Eliminar";
        btn.style.marginLeft = "10px";

        btn.addEventListener("click", () => eliminarMensaje(mensaje.id));

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function eliminarMensaje(id) {
    mensajes = mensajes.filter(m => m.id !== id);
    guardar();
    mostrarMensajes();
}

function guardar() {
    localStorage.setItem("mensajes", JSON.stringify(mensajes));
}