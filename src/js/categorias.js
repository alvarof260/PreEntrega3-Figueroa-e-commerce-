//recuperar etiquetas de html
const carrito = []
const catalogo = JSON.parse(localStorage.getItem('catalogo'))
console.log(catalogo)
localStorage.setItem('carrito', [])
const carritoEnLS = localStorage.getItem('carrito')
carritoEnLS ? carrito = carritoEnLS : carrito = []
const container = document.getElementById('product-render')
//mostrar todos los productos
renderizarProductos(productosArray, container)

//recuperar etiquetas de html
const searchBar = document.getElementById('sea')
const searchBtn = document.getElementById('btn-search')
const selectTipos = document.getElementById('tipo')
const containerCarrito = document.getElementById('render-carrito')
const botonesCarrito = document.querySelectorAll('.box-text__btn')
const iconShopCart = document.getElementById('shopCart')
const containerShopCart = document.getElementById('shopCartDiv')
const iconXMark = document.getElementById('x-mark')
const btnVaciar = document.getElementById('deleteAll')
const countProducts = document.getElementById('count')
const totalPrice = document.getElementById('totalPrice')
const navbar = document.getElementById('nav')

//escuchar eventos
searchBar.addEventListener('input',filterProductSearchBar)
selectTipos.addEventListener('change',filtrar)
botonesCarrito.forEach(boton=> boton.addEventListener('click',agregarCarrito))
console.log(botonesCarrito)
iconShopCart.addEventListener('click',()=>{
    containerShopCart.classList.add('active')
} )
iconXMark.addEventListener('click', ()=>{
    containerShopCart.classList.remove('active')
})
btnVaciar.addEventListener('click', vaciarCarrito)
window.addEventListener('scroll',()=>{
    window.scrollY > 150 ? navbar.classList.add('navbar-transparent') : navbar.classList.remove('navbar-transparent')
})


//renderizar los productos
function renderizarProductos(arrayOfProduct, container) 
{
    arrayOfProduct.forEach(({imagen, nombre, precio, id})=> {
        let productcard = document.createElement('div')
        productcard.className = 'card'
        productcard.innerHTML += `
            <div class=card__box-img>
                <img class=box-img__image src=../assets/products/${imagen} alt= >
            </div>
            <div class=card__box-text>
                <h3 class=box-text__title>${nombre}</h3>
                <span class=box-text__price>$${precio}</span>
                <br>
                <button class=box-text__btn id=${id}>Agregar al Carrito</button>
            </div>
        `
        container.appendChild(productcard)
    });
}

//busqueda del buscador
function filterProductSearchBar()
{
    let arrrayFiltered = productosArray.filter(({tipo})=>tipo.includes(searchBar.value.toLowerCase()))
    actualizarProductos(arrrayFiltered, container)
}

//filtrar por categoria
function filtrar(event) {
    let tipoInput = event.target.value
    if(tipoInput === 'categorias'){
        actualizarProductos(productosArray, container)
    } else {
        let arrayFiltrado = productosArray.filter(({tipo})=>tipo === tipoInput)
        actualizarProductos(arrayFiltrado, container)
    }
}

//actualizar los productos
function actualizarProductos(array, cont)
{
    container.innerHTML = ''
    renderizarProductos(array, cont)
}

//agregar producto al carrito
function agregarCarrito(event){
    let botonID = event.target.id
    let productoBuscado = productosArray.find(({id})=>id === Number(botonID))
    let posicionProducto = carrito.findIndex(({id})=>id === productoBuscado.id)

    if (posicionProducto != -1) {
        carrito[posicionProducto].unidades++
        carrito[posicionProducto].stock = carrito[posicionProducto].stock - 1
        carrito[posicionProducto].subtotal = carrito[posicionProducto].precioUnidad * carrito[posicionProducto].unidades 
        console.log(carrito)
        actualizarCarrito()
        renderizarCarrito(carrito, containerCarrito)
        countProducts.innerText = contadorProductos(carrito)
        totalPrice.innerText = `$${compraTotal(carrito)}`
        localStorage.setItem('carrito', JSON.stringify(carrito))
    } else {
        carrito.push({
            id:productoBuscado.id,
            nombre:productoBuscado.nombre,
            imagen:productoBuscado.imagen,
            precioUnidad:productoBuscado.precio,
            subtotal: productoBuscado.precio,
            stock: productoBuscado.stock - 1,
            unidades: 1      
        })
        countProducts.innerText = contadorProductos(carrito)
        renderizarCarrito(carrito, containerCarrito)
        totalPrice.innerText = `$${compraTotal(carrito)}`
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
}

//actualizar carrito
function actualizarCarrito() {
    containerCarrito.innerHTML = ''
}

//renderizar carrito
function renderizarCarrito(arrayOfProduct, container) 
{
    console.log(arrayOfProduct)
    actualizarCarrito()
    arrayOfProduct.forEach(({imagen, nombre, precioUnidad, unidades}) => {
        let productcard = document.createElement('div')
        productcard.className = 'card--shopcart'
        productcard.innerHTML += `
            <div class=card__box-img--shopcart >
                <img class=box-img__image--shopcart src=../assets/products/${imagen} alt= >
            </div>
            <div class=card__box-text--shopcart >
                <h3 class=box-text__title--shopcart >${nombre}</h3>
                <span class=box-text__price--shopcart >$${precioUnidad}</span>
                <span class=box-text__unites--shopcart>x ${unidades}</span>
            </div>
        `
        container.appendChild(productcard)
    });
}

//vaciar carrito
function vaciarCarrito() {
    carrito.splice(0, carrito.length)
    actualizarCarrito()
    countProducts.innerText = contadorProductos(carrito)
    totalPrice.innerText = `$${compraTotal(carrito)}`
}

//contador del carrito
function contadorProductos(array) 
{
    return array.reduce((acumulador, {unidades})=>{return acumulador + unidades},0) 
}

//mostrar el precio total
function compraTotal(array) 
{
    return array.reduce((acumulador, {subtotal})=>{return acumulador + subtotal},0) 
}