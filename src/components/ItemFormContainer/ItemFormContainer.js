import { useState } from 'react'
import ItemForm from '../ItemForm/ItemForm';
import Container from 'react-bootstrap/Container';

const ItemFormContainer = () => {

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

        if (form.checkValidity() === true) {
            //updateStock(event);
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
            <Container className='mb-5 d-flex justify-content-center'>
                <ItemForm  {...commonProps} />
            </Container>
    )
}

export default ItemFormContainer
