import { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm';
import Container from 'react-bootstrap/Container';
import { useCartContext } from '../../context/CartContext';

const LoginFormContainer = () => {

    const { setUser } = useCartContext()
    const [show, setShow] = useState(false)
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleSubmit = async (event) => {

        try {

            event.preventDefault();
            event.stopPropagation();
            const form = event.currentTarget;

            if (form.checkValidity() === true) {
                let user = {
                    username: email,
                    password: password
                }

                console.log("FORM LOGIN VALIDADO :" + JSON.stringify(user))

                let options = {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user)
                }

                await fetch(`http://127.0.0.1:8080/api/login`, options)
                    .then(res => res.json())
                    .then(res => { // JSON data parsed by `data.json()` call
                        console.log(res)
                        setUser(res.data || null)
                        alert("Login Status: " + res.status)
                    })

                handleClose()
                //window.location.reload()

            } else {
                console.log("FORM LOGIN NO VALIDADO")
            }

            setValidated(true);

        } catch (error) {
            console.log(error)
        }
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
