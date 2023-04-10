const contenedorRecommend = document.getElementById('reco') //contenedor para mostrar productos recomendados
const productsRecommend = productosArray.filter((producto)=>producto.masVendido === true)//filtrar del array de los productos los productos mas vendidos
const carrito = []

renderizarCard(contenedorRecommend, productsRecommend)

//renderizar producto
function renderizarCard(contenedor, arrayConProductos) 
{
    arrayConProductos.forEach((producto)=>{
        let cardProducto = document.createElement('div')
        cardProducto.className = 'card'
        cardProducto.innerHTML += `
                <div class=card__box-img>
                    <img class=box-img__image src=src/assets/products/${producto.imagen} alt= >
                </div>
                <div class=card__box-text>
                    <h3 class=box-text__title>${producto.nombre}</h3>
                    <span class=box-text__price>$${producto.precio}</span>
                    <br>
                    <button id=${producto.id} class=box-text__btn>Agregar al carrito</button>
                </div>
            `
        contenedor.appendChild(cardProducto)
    })
}

//actualizar carrito

//agregar al carrito
function agregarCarrito(productoEncontrado) {
    carrito.push(productoEncontrado)


}



