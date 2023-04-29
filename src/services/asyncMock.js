
let products = [
  {
    id: "1",
    nombre: "Directorio Cristal",
    categoria: "Corporativa",
    descripcion: "Directorio de cristal templado de 8mm con bisel de 1/4",
    img: "/images/directorio-cristal.jpg",
    precio: "USD. 279.99",
    stock: "10",
  },
  {
    id: "2",
    nombre: "Pictograma Cristal",
    categoria: "Corporativa",
    descripcion: "Picotograma de cristal templado de 8mm con bisel de 1/4",
    img: "/images/pictograma-cristal.jpg",
    precio: "USD. 49.99",
    stock: "20",
  },
  {
    id: "3",
    nombre: "Letrero Madera con Techuelo",
    categoria: "Ambiental",
    descripcion: "Letrero tallado en madera de teca con postes de eucalipto inmunizado y techuelo de teja asfáltica",
    img: "/images/letrero-madera-techuelo.jpg",
    precio: "USD. 2499.00",
    stock: "5",
  },
  {
    id: "4",
    nombre: "Mesa Interpretativa",
    categoria: "Ambiental",
    descripcion: "Mesa interpretativa de madera de teca con postes de eucalipto inmunizado",
    img: "/images/mesa-interpretativa.jpg",
    precio: "USD. 299.00",
    stock: "10",
  },
  {
    id: "5",
    nombre: "Tótem Atractivos Turísticos",
    categoria: "Turística",
    descripcion: "Tótem metálico con base de concreto e impresión digital UV",
    img: "/images/totem-atractivos-turisticos.jpg",
    precio: "USD. 2399.00",
    stock: "5",
  },
  {
    id: "6",
    nombre: "Valla Atractivos Turísticos",
    categoria: "Turística",
    descripcion: "Valla reflectiva con postes metálicos y base de concreto",
    img: "/images/valla-atractivos-turisticos.jpg",
    precio: "USD. 1499.00",
    stock: "5",
  },
  {
    id: "7",
    nombre: "Señal Vial Reflectiva",
    categoria: "Vial",
    descripcion: "Señal vial reflectiva con poste metálico",
    img: "/images/senal-vial-reflectiva.jpg",
    precio: "USD. 249.00",
    stock: "50",
  },
  {
    id: "8",
    nombre: "Señal extintor",
    categoria: "Seguridad",
    descripcion: "Señal de seguridad industrial. Extintor.",
    img: "/images/senal-extintor.jpg",
    precio: "USD. 249.00",
    stock: "50",
  },
];  

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 500);
  });
}

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.categoria === category));
    }, 500);
  });
}