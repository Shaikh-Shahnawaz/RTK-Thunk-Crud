import React, { useEffect, useState } from 'react'
import { Modal, Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';


function Edituser({ editToggle, hideModal, editUser }) {

    // ----------------------------------------------
    const [show, setShow] = useState(false);
    const handleClose = () => {

        setShow(false);
        hideModal(false)
    }

    useEffect(() => {
        setShow(editToggle)
    }, [editToggle])
    // ----------------------------------------------

    const [updateData,setUpdateData] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
    })

    const handleChange = (e)=>{

        setUpdateData({
            ...updateData, [e.target.name]:e.target.value
        })

    }


    const sendUpdateData = ()=>{

        editUser(updateData)
        hideModal(false)
    }

    return (

        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Update The Details !!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" onChange={handleChange} type="text" placeholder="enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" onChange={handleChange} type="text" placeholder="enter your username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone No.</Form.Label>
                        <Form.Control name="phone" onChange={handleChange} type="phone" placeholder="enter your phone no." />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={sendUpdateData}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );




}

export default Edituser
