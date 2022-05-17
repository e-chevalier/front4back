import { useState } from 'react'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import Container from 'react-bootstrap/Container';

const RegistrationFormContainer = () => {

    const [show, setShow] = useState(false)
    const [validated, setValidated] = useState(false);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
 

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleSubmit = async (event) => {

        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            let newuser = {
                username: username,
                password: password,
                email: email,
                firstname: firstname,
                lastname: lastname
            }

            let options = { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newuser)}
            await fetch(`http://127.0.0.1:8080/api/registration`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
                alert("Usuario agregado ID:" + data.id )
            })

            handleClose()
            window.location.reload()
            
        }
        
        setValidated(true);
    }

    let commonProps = {
        show: show,
        validated: validated,
        setUsername: setUsername,
        setPassword: setPassword,
        setEmail: setEmail,
        setFirstname: setFirstname,
        setLastname: setLastname,
        handleShow: handleShow,
        handleClose: handleClose,
        handleSubmit: handleSubmit
    }

    return (
            <Container className='d-flex justify-content-center'>
                <RegistrationForm {...commonProps} />
            </Container>
    )
}

export default RegistrationFormContainer
