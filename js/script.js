let libros = [
    {
        id: 1,
        titulo: "Cuentos completos de Lorrie Moore",
        autor: "Lorrie Moore",
        genero: "literatura",
        precio: 2500,
        stock: 3,
    },

    {
        id: 2,
        titulo: "Las palabras justas",
        autor: "Milena Busquets",
        genero: "literatura",
        precio: 3000,
        stock: 2,
    },

    {
        id: 3,
        titulo: "La teoria de los archipiélagos",
        autor: "Alice Keller",
        genero: "literatura",
        precio: 4000,
        stock: 5,
    },

    {
        id: 4,
        titulo: "Diccionario Holandés",
        autor: "Libreía universitaria",
        genero: "idiomas",
        precio: 2000,
        stock: 1,
    },
    {
        id: 5,
        titulo: "Ready for B2 first",
        autor: "Macmillan education",
        genero: "idiomas",
        precio: 5500,
        stock: 6,
    },
    {
        id: 6,
        titulo: "Rayuela",
        autor: "Julio Cortazar",
        genero: "literatura",
        precio: 3000,
        stock: 7,
    },
]

let productos = libros.map(libros => { return new Producto(libros.id, libros.titulo, libros.autor, libros.genero, libros.precio) })

let bienvenida = document.getElementById("bienvenida")
bienvenida.innerHTML = "<h1>Book Storage</h1> <p> Bienvenidos a tu tienda virtual preferida para comprar libros nuevos y usados</p>"

let productosEnVenta = document.getElementsByClassName("productos")
productos.innerHTML = "<h1>Libros disponibles</h1>"

for (const libro of libros) {
    let divLibro = document.createElement("div")
    divLibro.className = "card__libro"
}
