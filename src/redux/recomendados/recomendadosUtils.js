import { products } from '../../data/Products'

export const seleccionarProductosRandom = (cantidad) => {
  const nuevoArrayRecomendados = [];

  while (nuevoArrayRecomendados.length < cantidad) {
    const indexRandom = Math.floor(Math.random() * products.length);

    if (!nuevoArrayRecomendados.length) {
      nuevoArrayRecomendados.push(products[indexRandom]);
    }

    const productoExistente = nuevoArrayRecomendados.find((nuevoRecomendado) => {
      return nuevoRecomendado.id === products[indexRandom].id;
    })

    if (!productoExistente) {
      nuevoArrayRecomendados.push(products[indexRandom])
    }
  }

  return nuevoArrayRecomendados
}
