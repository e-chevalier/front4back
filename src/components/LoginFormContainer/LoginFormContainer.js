import { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm';
import Container from 'react-bootstrap/Container';

const LoginFormContainer = () => {

    const [show, setShow] = useState(false)
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleSubmit = async (event) => {

        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            let user = {
                username: email,
                password: password
            }

            let options = { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(user)}
            await fetch(`http://127.0.0.1:8080/api/login`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
                alert("Usuario logueado:" + data )
            })

            handleClose()
            //window.location.reload()
            
        }
        
        setValidated(true);
    }

    let commonProps = {
        show: show,
        validated: validated,
        setEmail: setEmail,
        setPassword: setPassword,
        handleShow: handleShow,
        handleClose: handleClose,
        handleSubmit: handleSubmit
    }

    return (
            <Container className='d-flex justify-content-center'>
                <LoginForm  {...commonProps} />
            </Container>
    )
}

export default LoginFormContainer