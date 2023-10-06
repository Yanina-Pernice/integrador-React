//helpers functions

export const agregarItemAlCarrito = (itemsCarrito, producto) => {
    //CHEQUEAR ITEM EN EL CARRITO

    const productoEnCarrito = itemsCarrito.find((item) => {
        return item.id === producto.id
    })

    if (productoEnCarrito) {

        return itemsCarrito.map((item) => {
            return item.id === productoEnCarrito.id
                ? {
                    ...item,
                    cantidad: item.cantidad + 1
                }
                : {
                    ...item
                }
        })

    } else {
        return [
            ...itemsCarrito,
            {
                ...producto,
                cantidad: 1,
            }
        ]
    }

}

export const removerItemDeCarrito = (itemsCarrito, id) => {
    const productoAremover = itemsCarrito.find((item) => {
        return item.id === id;
    })

    if (productoAremover.cantidad > 1) {
        return itemsCarrito.map((item) => {
            return item.id === productoAremover.id
                ? {
                    ...item,
                    cantidad: item.cantidad - 1
                }
                : {
                    ...item
                }
        })
    } else {

        const losQueQuedaron = []

        itemsCarrito.forEach(element => {
            if (element.id !== id) {
                losQueQuedaron.push(element)

            }
        });

        return losQueQuedaron
    }
}

export const resetCostoEnvio = (itemsCarrito, costoEnvio) => {
    if (itemsCarrito.length === 1 && itemsCarrito[0].cantidad === 1) {
        return 0
    } else {
        return costoEnvio
    }
}