const getCarrito = async (id = 0) => {

    try {
        if (id) {
            return await (fetch(`http://localhost:8080/api/carrito/${id}/productos`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.cart)
                    return data.cart
                }));
        } else {
            
            let newCart_id = await (fetch(`http://localhost:8080/api/carrito/`, { method: 'POST' })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                return data.id
                            }))

            return await (fetch(`http://localhost:8080/api/carrito/${newCart_id}/productos`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.cart)
                    return data.cart
                }));
        }

    } catch (err) {
        return console.log(err)
    }
    
}

export default getCarrito