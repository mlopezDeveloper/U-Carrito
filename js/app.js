//Varibles

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');//donde se van a colocar los elementos
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
        const cursoSeleccionado = e.target.parentElement.parentElement;
        //console.log('agregando al carrito los cursos...');
        //console.log(cursoSeleccionado);
        leerDatosCursos(cursoSeleccionado);
    }   
}

//Lee el contenido del HTML al que le damos click y extrae la informacion del curso

function leerDatosCursos(curso){
    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
    }
    console.log(infoCurso)
}

