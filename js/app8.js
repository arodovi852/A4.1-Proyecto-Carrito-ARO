// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
    // Agregar curso al carrito
    listaCursos.addEventListener('click', agregarCurso);

    // Eliminar curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
        sincronizarStorage();
    });

    // Cargar los datos del storage al iniciar la página
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    });
}

// Funciones
function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Elimina un curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();
        sincronizarStorage();
    }
}

// Lee los datos del curso seleccionado
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };

    // Comprobar si el curso ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        // Aumentar cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // objeto actualizado
            } else {
                return curso; // los demás iguales
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // Agregar nuevo curso
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    carritoHTML();
    sincronizarStorage();
}

// Muestra el carrito de compras en el HTML
function carritoHTML() {
    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;

        contenedorCarrito.appendChild(row);
    });
}

// Limpia los cursos del tbody
function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

// Guarda el carrito en LocalStorage
function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}