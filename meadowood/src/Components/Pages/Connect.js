import { useContext, useState } from "react"
import { Button, Container, Form, Row } from "react-bootstrap"
import { ConnectionContext } from "../../Contexts/ConnectionContext"
import { Helmet } from "react-helmet"

function Connect() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [notes, setNotes] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [address, setAddress] = useState('')

    const [message, setMessage] = useState()
    const [submitted, setSubmitted] = useState(false)

    const { createConnection } = useContext(ConnectionContext)

    async function handleSubmit() {
        let connection = {
            connectName: name,
            connectEmail: email,
            connectPhone: phone,
            connectNotes: notes,
            dateOfBirth: dateOfBirth,
            address: address
        }

        if (connection.name === '') {
            setMessage("Name & number required")
        } else if (connection.connectPhone === '') {
            setMessage("Name & number required")
        } else {
            let res = await createConnection(connection)
            if (res) {
                setSubmitted(true)
            }
        }
    }
    return (
        <>
            <Helmet>
                <meta name="title" content="MW COG - Connection page" />
                <meta name="description" content="Meadowood Church of God - Better at 
                the Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, 
                Lord, Community, Church community, friendly church, Meadowood, Richmond 
                Virginia Church, Richmond VA, Meadowood Church of God Richmond VA,
                Connections, get conencted with Meadowood" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <Container>
                {submitted ? (
                    <>
                        <Row>
                            <div className="connectionHeader">
                                Success!<br />
                                Thank you!
                            </div>
                        </Row>
                    </>
                ) : (
                    <>
                        <Row>
                            <div className="connectionHeader">
                                We would love to connect with you!
                            </div>
                        </Row>
                        <Row>
                            <Form>
                                <Row>
                                    <Form.Group className="col-12 col-md-6">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="col-12 col-md-6">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control
                                            value={dateOfBirth}
                                            onChange={(e) => setDateOfBirth(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Label>Additional Notes</Form.Label>
                                    <br />
                                    <textarea
                                        className="notes col-12"
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                    />
                                </Row>
                                <br />
                                {message ? (
                                    <>
                                        <Row>
                                            <div className="message">
                                                {message}
                                            </div>
                                        </Row>
                                        <br />
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}
                                <Row>
                                    <div className="col-md-3" />
                                    <Button
                                        onClick={handleSubmit}
                                        className="col-12 col-md-6 connectionBtn"
                                    >
                                        Submit
                                    </Button>
                                </Row>

                            </Form>
                        </Row>
                    </>
                )}
            </Container>
        </>
    )
}
export default Connect