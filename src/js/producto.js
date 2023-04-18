//funcion Constructora de los productos
class Producto {
  constructor(id, nombre, imagen, precio, tipo, masVendido) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.tipo = tipo;
    this.masVendido = masVendido;
  }
}

//catalogo
const productos = [
  {
    id: 1,
    nombre: "Fear of God Essentials Pullover Hoodie Applique Logo",
    imagen: "fearlogo.jpg",
    precio: 36120,
    tipo: "buzos",
    masVendido: true,
  },
  {
    id: 2,
    nombre: "Sp5der Angel Number Hoodie",
    imagen: "sp5der.jpg",
    precio: 61000,
    tipo: "buzos",
    masVendido: false,
  },
  {
    id: 3,
    nombre: "Saint Mxxxxxx Angel Hoodie",
    imagen: "saintmxxx.jpg",
    precio: 100000,
    tipo: "buzos",
    masVendido: false,
  },
  {
    id: 4,
    nombre: "Nike x Stussy Crew Fleece",
    imagen: "nikexstussy.jpg",
    precio: 36850,
    tipo: "buzos",
    masVendido: false,
  },
  {
    id: 5,
    nombre: "Juice Wrld x Vlone 999 T-shirt",
    imagen: "vlone999.jpg",
    precio: 15200,
    tipo: "remeras",
    masVendido: false,
  },
  {
    id: 6,
    nombre: "Anti Social Social Club Cancelled T-shirt",
    imagen: "antisocial.jpg",
    precio: 14900,
    tipo: "remeras",
    masVendido: true,
  },
  {
    id: 7,
    nombre: "Supreme T-Rex Tee",
    imagen: "supremeTrex.jpg",
    precio: 14400,
    tipo: "remeras",
    masVendido: false,
  },
  {
    id: 8,
    nombre: "Pop Smoke x Vlone The Woo T-shirt",
    imagen: "popsmoke.jpg",
    precio: 20250,
    tipo: "remeras",
    masVendido: false,
  },
  {
    id: 9,
    nombre: "Nike Tech Fleece Joggers",
    imagen: "niketech.jpg",
    precio: 19300,
    tipo: "pantalones",
    masVendido: true,
  },
  {
    id: 10,
    nombre: "KAWS x The North Face Youth Sweatpant",
    imagen: "kaws.jpg",
    precio: 29300,
    tipo: "pantalones",
    masVendido: false,
  },
  {
    id: 11,
    nombre: "Stone Island Pantalone Regular Tapered Pants",
    imagen: "stoneIsland.jpg",
    precio: 83950,
    tipo: "pantalones",
    masVendido: false,
  },
  {
    id: 12,
    nombre: "LOEWE Women's Anagram Pocket Tapered Denim Jeans",
    imagen: "loewe.jpg",
    precio: 128350,
    tipo: "pantalones",
    masVendido: true,
  },
  {
    id: 13,
    nombre: "adidas Yeezy 700 V3",
    imagen: "adidasyezzy.jpg",
    precio: 72000,
    tipo: "zapatillas",
    masVendido: true,
  },
  {
    id: 14,
    nombre: "Jordan 4 Retro",
    imagen: "jordan4retro.jpg",
    precio: 39000,
    tipo: "zapatillas",
    masVendido: false,
  },
  {
    id: 15,
    nombre: "Nike Dunk High Retro",
    imagen: "nikedunk.jpg",
    precio: 25900,
    tipo: "zapatillas",
    masVendido: true,
  },
];

const productosArray = productos.map(
  (product) =>
    new Producto(
      product.id,
      product.nombre,
      product.imagen,
      product.precio,
      product.tipo,
      product.masVendido
    )
);
