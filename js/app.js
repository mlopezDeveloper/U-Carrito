//Varibles

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners(){
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones

function agregarCurso(e){
    e.preventDefault(); //prevenimos la accion por default, como tenia un enlace que no se dirige a nada automaticamente se nos va al inicio y no queda en la misma posicion donde estamos
    if(e.target.classList.contains('agregar-carrito')){//Valida que solo se ejecute cuando toque esa clase
        console.log('agregando al carrito los cursos...');
    }
    
}