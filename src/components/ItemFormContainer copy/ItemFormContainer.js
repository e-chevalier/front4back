import ItemForm from '../ItemForm/ItemForm';
import Loading from '../Loading/Loading';
import useFetch from '../../hooks/useFetch';

import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


const ItemFormContainer = () => {

    const { id } = useParams();
    const [products, loading] = useFetch(id);


    return (
        loading ?
            <Loading />
            :
            <Container>
                <ItemForm product={products[0]} />
            </Container>
    )
}

export default ItemFormContainer
