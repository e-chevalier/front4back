import React from 'react'
import Button from 'react-bootstrap/Button'

const Logout = () => {

    const handleLogout = async (event) => {

        try {
            let options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }
            await fetch(`http://127.0.0.1:8080/api/logout`, options)
                .then(res => res.json())
                .then(data => {
                    console.log(data); // JSON data parsed by `data.json()` call
                })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Button variant="secondary" onClick={handleLogout}>
            Logout
        </Button>
    )
}

export default Logout