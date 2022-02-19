import ItemDetail from '../ItemUpdate/ItemUpdate';
import Loading from '../Loading/Loading';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react'

import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


const ItemUpdateContainer = () => {

    const { id } = useParams();
    const [products, loading] = useFetch(id);

    const [show, setShow] = useState(false)
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [code, setCode] = useState('')
    const [stock, setStock] = useState(0)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleSubmit = (event) => {

        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        let prodId = products[0].id

        if (form.checkValidity() === true) {
            let prod = {
                title: title,
                description: description,
                code: code,
                thumbnail: thumbnail,
                price: Number(price),
                stock: Number(stock),
                timestamp: Date.now(),
                id: prodId,
                qty: 0
            }

            let options = { method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(prod)}
            fetch(`http://127.0.0.1:8080/api/productos/${prodId}`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
                alert("Producto modificado ID:" + data.id )
            })

            handleClose()
            
        }
        
        setValidated(true);
    }

    let commonProps = {
        show: show,
        validated: validated,
        setTitle: setTitle,
        setPrice: setPrice,
        setDescription: setDescription,
        setThumbnail: setThumbnail,
        setCode: setCode,
        setStock: setStock,
        handleShow: handleShow,
        handleClose: handleClose,
        handleSubmit: handleSubmit
    }


    return (
        loading ?
            <Loading />
            :
            <Container>
                <ItemDetail product={products[0]} {...commonProps} />
            </Container>
    )
}

export default ItemUpdateContainer
