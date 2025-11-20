const form = document.getElementById("form-mensaje");
const input = document.getElementById("input-mensaje");
const lista = document.getElementById("lista-mensajes");

let mensajes = [];

document.addEventListener("DOMContentLoaded", () => {
    const guardados = localStorage.getItem("mensajes");

    if (guardados) {
        mensajes = JSON.parse(guardados);
    }

    mostrarMensajes();
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

        const textoSpan = document.createElement("span");
        textoSpan.textContent = mensaje.texto;
        li.appendChild(textoSpan);

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.style.marginLeft = "10px";
        btnEditar.addEventListener("click", () => editarMensaje(mensaje.id));
        li.appendChild(btnEditar);

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.addEventListener("click", () => eliminarMensaje(mensaje.id));
        li.appendChild(btnEliminar);

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


//Mejora 1: Editar
function editarMensaje(id) {
    const mensaje = mensajes.find(m => m.id === id);
    if (!mensaje) return;

    const nuevoTexto = prompt("Editar mensaje:", mensaje.texto);
    if (!nuevoTexto || nuevoTexto.trim() === "") return;

    mensaje.texto = nuevoTexto.trim();

    guardar();
    mostrarMensajes();
}

//Mejora 2: Ordenar
function ordenarMensajes() {
    mensajes.sort((a, b) => b.id - a.id); //Más reciente a más antiguo
    guardar();
    mostrarMensajes();
}

//Mejora 3: Vaciar
function vaciarMensajes() {
    if (!confirm("¿Seguro que quieres borrar TODOS los mensajes?")) return;

    mensajes = [];
    guardar();
    mostrarMensajes();
}
