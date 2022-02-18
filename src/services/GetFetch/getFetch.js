//import products from '../products';

const getFetch = (id = 0) => {
    // return (
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             id === 0 ? resolve(products) : resolve(products.filter(prod => prod.id === id))
    //         }, 2000)
    //     })
    // )

    return ( fetch('http://localhost:8080/api/productos')
    .then(res => res.json())
    .then( data => {
        console.log(data)
        return data.products
    }))
    .catch ( err => console.log(err))
}

export default getFetch;
