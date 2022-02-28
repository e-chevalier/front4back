
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const ItemUpdate = ({ product, validated, setTitle, setPrice, setDescription, setThumbnail, setCode, setStock, handleSubmit}) => {

    
    return (
        <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modificando {product.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p className="bg-light">Viejo Nombre: {product.title}</p>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <FloatingLabel label="Nuevo Nombre" className="mb-3">
                                <Form.Control required type="text" placeholder={product.title} onBlur={(e) => { setTitle(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">No se olvide de ingresar el nombre del producto.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <p className="bg-light">Viejo precio: {product.price} </p>
                        <Form.Group className="mb-3" controlId="formPrice">
                            <FloatingLabel label="Nuevo Precio" className="mb-3">
                                <Form.Control required type="number" placeholder="Ingrese valor del producto" onBlur={(e) => { setPrice(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese un precio válido.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <p className="bg-light">Vieja descripción: {product.description}</p>
                        <Form.Group className="mb-3" controlId="formDescription">
                            <FloatingLabel label="Nueva Descripción" className="mb-3">
                                <Form.Control  as="textarea" required placeholder="Ingrese descripción del producto" onBlur={(e) => { setDescription(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese un precio válido.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <p className="bg-light">Vieja URL: {product.thumbnail}</p>
                        <Form.Group className="mb-3" controlId="formThumbnail">
                            <FloatingLabel label="Nueva URL Foto" className="mb-3">
                                <Form.Control required type="text" placeholder="Ingrese la direccion de la foto del producto." onBlur={(e) => { setThumbnail(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese URL de imagen valido.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <p className="bg-light">Viejo Code: {product.code}</p>
                        <Form.Group className="mb-3" controlId="formCode">
                            <FloatingLabel label="Nuevo Codigo" className="mb-3">
                                <Form.Control required type="text" placeholder="Código del producto" onBlur={(e) => { setCode(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">No se olvide de ingresar el código del producto.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <p className="bg-light">Viejo Stock: {product.stock}</p>
                        <Form.Group className="mb-3" controlId="formStock">
                            <FloatingLabel label="Nuevo Stock" className="mb-3">
                                <Form.Control required type="number" placeholder="Ingrese el Stock del producto" onBlur={(e) => { setStock(e.target.value) }} />
                                <Form.Control.Feedback type="invalid">Ingrese un Stock válido.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Actualizar
                        </Button>
                    </Modal.Footer>
                </Form>
        </>
    )
}

export default ItemUpdate
