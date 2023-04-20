
let productos = [
  {
    id: "1",
    nombre: "Directorio Cristal",
    categoria: "Señalética Corporativa",
    descripcion: "Directorio de cristal templado de 8mm con bisel de 1/4",
    img: "ecommerce_aldan/img/directorio-cristal.jpg",
    precio: "USD. 279.99",
    stock: "10",
  },
  {
    id: "2",
    nombre: "Pictograma Cristal",
    categoria: "Señalética Corporativa",
    descripcion: "Picotograma de cristal templado de 8mm con bisel de 1/4",
    img: "ecommerce_aldan/images/pictograma-cristal.jpg",
    precio: "USD. 49.99",
    stock: "20",
  },
  {
    id: "3",
    nombre: "Letero Madera con Techuelo",
    categoria: "Señalética Ambiental",
    descripcion: "Letrero tallado en madera de teca con postes de eucalipto inmunizado y techuelo de teja asfáltica",
    img: "ecommerce_aldan/images/letrero-madera-techuelo.jpg",
    precio: "USD. 2499.00",
    stock: "5",
  },
  {
    id: "4",
    nombre: "Mesa Interpretativa",
    categoria: "Señalética Ambiental",
    descripcion: "Mesa interpretativa de madera de teca con postes de eucalipto inmunizado",
    img: "ecommerce_aldan/images/mesa-interpretativa.jpg",
    precio: "USD. 299.00",
    stock: "10",
  },
  {
    id: "5",
    nombre: "Tótem Atractivos Turísticos",
    categoria: "Señalética Turística",
    descripcion: "Tótem metálico con base de concreto e impresión digital UV",
    img: "ecommerce_aldan/images/totem-atractivos-turisticos.jpg",
    precio: "USD. 2399.00",
    stock: "5",
  },
  {
    id: "6",
    nombre: "Valla Atractivos Turísticos",
    categoria: "Señalética Turística",
    descripcion: "Valla reflectiva con postes metálicos y base de concreto",
    img: "ecommerce_aldan/images/valla-atractivos-turisticos.jpg",
    precio: "USD. 1499.00",
    stock: "5",
  },
  {
    id: "7",
    nombre: "Señal Vial Reflectiva",
    categoria: "Señalización Vial",
    descripcion: "Señal vial reflectiva con poste metálico",
    img: "ecommerce_aldan/images/senal-vial-reflectiva.jpg",
    precio: "USD. 249.00",
    stock: "50",
  },
];  

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoryId))
        }, 500)
    })
}