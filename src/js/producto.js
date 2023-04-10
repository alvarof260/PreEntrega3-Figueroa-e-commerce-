//funcion Constructora de los productos
class Producto{
    constructor(id, nombre, imagen, descuento, precio, tipo, stock, masVendido){
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.descuento = descuento
        this.precio = precio
        this.tipo = tipo
        this.stock = stock
        this.masVendido = masVendido
    }
}

//catalogo
const productosArray = [
    new Producto(1, 'Fear of God Essentials Pullover Hoodie Applique Logo', 'fearlogo.jpg', false, 36120, 'buzos',35, true),
    new Producto(2, 'Sp5der Angel Number Hoodie', 'sp5der.jpg', false, 61000, 'buzos',10, false),
    new Producto(3, 'Saint Mxxxxxx Angel Hoodie', 'saintmxxx.jpg', false, 100000, 'buzos',5, false),
    new Producto(4, 'Nike x Stussy Crew Fleece', 'nikexstussy.jpg', false, 36850, 'buzos',25, false),
    new Producto(5, 'Juice Wrld x Vlone 999 T-shirt', 'vlone999.jpg', false, 15200, 'remeras',70, false),
    new Producto(6, 'Anti Social Social Club Cancelled T-shirt', 'antisocial.jpg', false, 14900, 'remeras',125, true),
    new Producto(7, 'Supreme T-Rex Tee', 'supremeTrex.jpg', false, 14400, 'remeras',200, false),
    new Producto(8, 'Pop Smoke x Vlone The Woo T-shirt', 'popsmoke.jpg', false, 20250, 'remeras',400, false),
    new Producto(9, 'Nike Tech Fleece Joggers', 'niketech.jpg', false, 19300, 'pantalones',150, true),
    new Producto(10, 'KAWS x The North Face Youth Sweatpant', 'kaws.jpg', false, 29300, 'pantalones',18, false),
    new Producto(11, 'Stone Island Pantalone Regular Tapered Pants', 'stoneIsland.jpg', false, 83950, 'pantalones',7, false),
    new Producto(12, 'LOEWE Women\'s Anagram Pocket Tapered Denim Jeans', 'loewe.jpg', false, 128350, 'pantalones',5, true),
    new Producto(13, 'adidas Yeezy 700 V3', 'adidasyezzy.jpg', false, 72000, 'zapatillas',10, true),
    new Producto(14, 'Jordan 4 Retro', 'jordan4retro.jpg', false, 39000, 'zapatillas',4, false),
    new Producto(15, 'Nike Dunk High Retro', 'nikedunk.jpg', false, 25900, 'zapatillas',10, true)
]

