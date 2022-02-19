const getFetch = async (id = 0) => {

    try {
        return await (fetch(`http://localhost:8080/api/productos${id !== 0 ? '/'+id: ''}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return data.products
            }));
    } catch (err) {
        return console.log(err)
    }
    
}

export default getFetch;
