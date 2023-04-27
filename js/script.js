fetch("../data.json")
    .then(respuesta => respuesta.json())
    .then(datosProductos => miPrograma(datosProductos))

function miPrograma(datosProductos) {
    let carrito = []
    let botonComprar = document.getElementById("botonComprar")
    botonComprar.addEventListener("click", comprar)
    renderizarProductos(datosProductos)
    function comprar() {
        alert("su compra ha finalizado")
        localStorage.removeItem("agregarProductos")
        renderizarCarrito([])
        carrito = []
    }

    if (localStorage.getItem("agregarProductos")) {
        carrito = JSON.parse(localStorage.getItem("agregarProductos"))
        renderizarCarrito(carrito)
    }


    let productos = datosProductos.map(libros => { return new Producto(libros.id, libros.titulo, libros.autor, libros.genero, libros.precio) })

    let productosEnVenta = document.getElementById("productosEnVenta")
    productosEnVenta.innerHTML = "<h1>Libros disponibles</h1>"


    function renderizarProductos(datosProductos) {
        let contenedor = document.getElementById("productosCard")
        contenedor.innerHTML = " "
        datosProductos.forEach(libros => {
            const div = document.createElement("div")
            div.innerHTML += `<div class=libroCard ><h2>${libros.titulo}</h2> 
     <p>${libros.autor}</p>
     <div class=cardImagen> <img src="${libros.img}"></div> 
     <p> Precio: ${libros.precio}</p>
      <p>Unidades disponibles: ${libros.stock}</p>
      <button id=${libros.id} class="btn btn-dark"> Agregar al carrito </button></div>`
            contenedor.appendChild(div)
            let boton = document.getElementById(libros.id)
            boton.addEventListener("click", agregarAlCarrito)

        })
    }

    function agregarAlCarrito(e) {

        console.log(e.target.id)
        let libroBuscado = datosProductos.find(libro => libro.id === Number(e.target.id))
        if (libroBuscado) {
            let libroBuscadoPosicion = carrito.findIndex(libro => libro.id === libroBuscado.id)
            if (libroBuscadoPosicion != -1) {
                carrito[libroBuscadoPosicion].unidades++
                carrito[libroBuscadoPosicion].subtotal = carrito[libroBuscadoPosicion].precioUnidad * carrito[libroBuscadoPosicion].unidades
            } else {
                carrito.push({
                    nombre: libroBuscado.titulo,
                    autor: libroBuscado.autor,
                    precioUnidad: libroBuscado.precio,
                    subtotal: libroBuscado.precio,
                    unidades: 1,
                    id: libroBuscado.id,
                })

            }
        }
        localStorage.setItem("agregarProductos", JSON.stringify(carrito))
        renderizarCarrito(carrito)
    }

    function renderizarCarrito(arrayProductosCarrito) {
        let carrito1 = document.getElementById("carrito1")
        carrito1.innerHTML = " "
        arrayProductosCarrito.map(libros => {
            const contenedorCarrito = document.createElement("div")
            contenedorCarrito.innerHTML += `<tbody>
    <tr>
        <td class="tituloLibro">${libros.nombre}</td>
        <td class="autorLibro">${libros.autor}</td>
        <td class="precioLibro">${libros.subtotal}</td>
    </tr>
    </tbody>`
            carrito1.appendChild(contenedorCarrito)
        })
    }



    let filtrado = document.getElementById("filtrado")
    filtrado.addEventListener("change", filtrar)

    function filtrar() {
        let optionValor = filtrado.value
        if (optionValor == "literatura") {
            let = arrayFiltrado = libros.filter(libros => libros.genero == "literatura")
            renderizarProductos(arrayFiltrado)
        } else if (optionValor == "idiomas") {
            arrayFiltrado = libros.filter(libros => libros.genero == "idiomas")
            renderizarProductos(arrayFiltrado)
        } else if (optionValor == "opcion") {
            renderizarProductos(libros)
        } else if (optionValor == "alfabetico") {
            arrayFiltrado = libros.sort((a, b) => {
                if (a.titulo > b.titulo) {
                    return 1
                } if (a.titulo < b.titulo) {
                    return -1
                } return 0
            })
            renderizarProductos(arrayFiltrado)
        } else if (optionValor == "menorMayor") {
            arrayFiltrado = libros.sort((a, b) => a.precio - b.precio)
            renderizarProductos(arrayFiltrado)
        } else if (optionValor == "mayorMenor") {
            arrayFiltrado = libros.sort((a, b) => b.precio - a.precio)
            renderizarProductos(arrayFiltrado)
        }
    }
}