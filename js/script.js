let libros = [
    {
        id: 1,
        titulo: "Cuentos completos de Lorrie Moore",
        autor: "Lorrie Moore",
        genero: "literatura",
        precio: 2500,
        stock: 3,
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXPuukZq2TyPkVgDCLeryOMjXVrAqlQtyd2YKTPo_CrDMqfBue-ZgqFIgLookph__EM5yS1jmtdAq_TJrZg71MUSL-G8gWeGMA56efSNc3UvNdwCQJ2JI5&usqp=CAc"
    },

    {
        id: 2,
        titulo: "Las palabras justas",
        autor: "Milena Busquets",
        genero: "literatura",
        precio: 3000,
        stock: 2,
        img: "data:image/jpeg;base64,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"
    },

    {
        id: 3,
        titulo: "La teoria de los archipiélagos",
        autor: "Alice Keller",
        genero: "literatura",
        precio: 4000,
        stock: 5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLsDF1kDUwR_eclKYnnjnoTqBebG_Qa4yig&usqp=CAU"
    },

    {
        id: 4,
        titulo: "Diccionario Holandés",
        autor: "Libreía universitaria",
        genero: "idiomas",
        precio: 2000,
        stock: 1,
        img: "https://images.cdn3.buscalibre.com/fit-in/360x360/83/31/8331f9e126460e6d32b7fa4bcc599460.jpg"
    },
    {
        id: 5,
        titulo: "Ready for B2 first",
        autor: "Macmillan education",
        genero: "idiomas",
        precio: 5500,
        stock: 6,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlyK7U7HO3jec84RoDnHnbqWmn-igrWNvhhcBaM-xRuzE2KXpsXrQleUEVAW9uCqeO-I&usqp=CAU"
    },
    {
        id: 6,
        titulo: "Rayuela",
        autor: "Julio Cortazar",
        genero: "literatura",
        precio: 3000,
        stock: 7,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvGJ2BsLuor-IJIoZIJ1Ku94m224nvj7j8A&usqp=CAU"
    },
]
let carrito = []
let botonComprar = document.getElementById("botonComprar")
botonComprar.addEventListener("click", comprar)

function comprar() {
    alert("su compra ha finalizado")
    localStorage.clear()
    renderizarCarrito([])
}


if (localStorage.getItem("productosAgregados")) {
    carrito = JSON.parse(localStorage.getItem("productosAgregados"))
    renderizarCarrito(carrito)
}



let productos = libros.map(libros => { return new Producto(libros.id, libros.titulo, libros.autor, libros.genero, libros.precio) })

let productosEnVenta = document.getElementById("productosEnVenta")
productosEnVenta.innerHTML = "<h1>Libros disponibles</h1>"


function renderizarProductos(arrayProductos) {
    let contenedor = document.getElementById("productosCard")
    contenedor.innerHTML = " "
    arrayProductos.forEach(libros => {
        const div = document.createElement("div")
        div.innerHTML += `<div class=libroCard ><h2>${libros.titulo}</h2> 
     <p>${libros.autor}</p>
     <div class=cardImagen> <img src="${libros.img}"></div> 
     <p> Precio: ${libros.precio}</p>
      <p>Unidades disponibles: ${libros.stock}</p>
      <button id=${libros.id} class="btn"> Agregar al carrito </button></div>`
        contenedor.appendChild(div)
        let boton = document.getElementById(libros.id)
        boton.addEventListener("click", agregarAlCarrito)

    })
}

function agregarAlCarrito(e) {

    console.log(e.target.id)
    let libroBuscado = libros.find(libro => libro.id === Number(e.target.id))
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
    localStorage.setItem("productosAgregados", JSON.stringify(carrito))
    renderizarCarrito(carrito)
}

function renderizarCarrito(arrayProductosCarrito) {
    let carritoDom = document.getElementById("carrito")
    carritoDom.innerHTML = " "
    arrayProductosCarrito.map(libros => carritoDom.innerHTML += `<div><h4 class="carritoH4"> ${libros.nombre} 
     ${libros.autor} 
     ${libros.subtotal}</h4></div>`)
}

renderizarProductos(libros)
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