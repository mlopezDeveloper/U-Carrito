//Varibles

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');//donde se van a colocar los elementos
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];//let porque se va a ir modificando

cargarEventListeners();
function cargarEventListeners(){
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {//funcion anonima
        articulosCarrito =  []; //reseteamos el arreglo

        limpiarHTML();//eliminamos todo el HTML
    })
}

//Funciones

function agregarCurso(e){
    e.preventDefault(); //prevenimos la accion por default, como tenia un enlace que no se dirige a nada automaticamente se nos va al inicio y no queda en la misma posicion donde estamos
    if(e.target.classList.contains('agregar-carrito')){//Valida que solo se ejecute cuando toque esa clase
        const cursoSeleccionado = e.target.parentElement.parentElement;//accedemos a todo el div que tiene el contenido del curso
        //console.log('agregando al carrito los cursos...');
        //console.log(cursoSeleccionado);
        leerDatosCursos(cursoSeleccionado);
    }   
}

//Elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        carritoHTML();//Volvemos a iterar sobre el carrito y mostrar su HTML
    }
}

//Lee el contenido del HTML al que le damos click y extrae la informacion del curso
function leerDatosCursos(curso){
    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),//id de cada curso
        cantidad : 1
    }

    //revida si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );//some = permite iterarsobre un arreglo de objetos y verificar si un elemento existe en el
    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;//retorna el objeto actualizado
            }else{
                return curso;//retorna los objetos que no son los duplicados
            }
        });//map = te genera un nuevo arreglo
        articulosCarrito = [...cursos];
    }else{
        //Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    //console.log(infoCurso)

    console.log(articulosCarrito);

    carritoHTML();
}


//Muestra el carrito de muestra en el HTML+
function carritoHTML(){

    //Limpiar el HTML
    limpiarHTML();

    //Recorrre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso; //viene del objeto que creamos arriba
        const row = document.createElement('tr');
        row.innerHTML = ` 
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;//creamos un teplate literal

        //Agrega el HTML deñ carrito en el tbody

        contenedorCarrito.appendChild(row);//agregando cada row en cada interacion
    });
}


//Elimina los cursos del tbody
function limpiarHTML(){
    //Forma lenta
    //contenedorCarrito.innerHTML = '';

    //Forma rapida
    while(contenedorCarrito.firstChild){//Si ese contenedor carrito tiene al menos un elemento dentro este codigo se sigue ejecutando
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}