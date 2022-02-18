import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'

import ItemCount from '../ItemCount/ItemCount'

const Item = ({ prod, initial }) => {

    const { addItem } = useCartContext();
    
    const onAdd = (qty) => {

        if (qty <= prod.stock && qty > 0) {
            addItem(prod, qty)
            console.log("Cantidad seleccionada de " + prod.title + " es: " + qty + " Kg.");
        } else {
            console.log("Qty en OnAdd no cumple con los requisitos.");
        }

    }

    return (
        <Col className="col py-4 px-4 px-lg-2 py-lg-3">
            <Card className="h-100 mx-2">
                <Card.Header className="text-center">
                    <Card.Title>{prod.title}</Card.Title>
                </Card.Header>

                <Row as={Link} to={`/item/${prod.id}`} className="h-100 g-0 pt-3 text-decoration-none text-body">
                    <Col xs={6}>
                        <img id="img" className="card-img-top" src={`${prod.thumbnail}`} alt={prod.title} />
                    </Col>
                    <Col xs={6}>
                        <Card.Body>
                            <Card.Text>Precio por Kg</Card.Text>
                            <p className="fw-bold fs-4">${prod.price}</p>
                        </Card.Body>
                    </Col>
                </Row>
                <Row className="g-0">
                    <Card.Footer className="text-center">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Más información</Accordion.Header>
                                <Accordion.Body>
                                    {prod.description}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <ItemCount prodId={prod.id} stock={prod.stock} initial={initial} onAdd={onAdd} />
                    </Card.Footer>
                </Row>
            </Card>
        </Col>

    )
}

export default Item
