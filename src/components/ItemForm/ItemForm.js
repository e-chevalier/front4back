import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const ItemForm = ({show, validated, setName, setEmail, setEmailConfirm, setPhone, handleShow, handleClose, handleSubmit}) => {

    return (
        <>
            <Button variant="outline-success" onClick={handleShow}>
                Cargar producto
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cargar producto</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required type="text" placeholder="Nombre del producto" onBlur={(e) => { setName(e.target.value) }} />
                            <Form.Control.Feedback type="invalid">No se olvide de ingresar su nombre y apellido..</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Ingrese email" onBlur={(e) => { setEmail(e.target.value) }} />
                            <Form.Control.Feedback type="invalid">Ingrese un email válido.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmailCheck">
                            <Form.Label>Confirmar Email</Form.Label>
                            <Form.Control required type="email" placeholder="Reingrese email" onBlur={(e) => { setEmailConfirm(e.target.value) }} />
                            <Form.Control.Feedback type="invalid">Ingrese un email válido.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Número Teléfono</Form.Label>
                            <Form.Control required type="number" placeholder="Ingrese número de teléfono" onBlur={(e) => { setPhone(e.target.value) }} />
                            <Form.Control.Feedback type="invalid">Ingrese un nº de teléfono válido.</Form.Control.Feedback>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            GENERAR
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )

}

export default ItemForm
