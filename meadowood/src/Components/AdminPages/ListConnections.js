import { useContext, useEffect, useState } from "react"
import { ConnectionContext } from "../../Contexts/ConnectionContext"
import { useParams } from "react-router-dom"
import { Container, Form, Row } from "react-bootstrap"

function ListConnection() {
    const [connection, setConnection] = useState({
        connectName: "",
        connectEmail: "",
        connectPhone: "",
        connectNotes: "",
        dateOfBirth: "",
        address: ""
    })

    const { getConnection } = useContext(ConnectionContext)
    let params = useParams()

    useEffect(() => {
        async function gettingConnection() {
            let id = params.id
            let res = await getConnection(id)
            setConnection(res)
        }
        gettingConnection()

    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Form.Group className="col-12 col-md-6 col-lg-4">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={connection.connectName} />
                    </Form.Group>
                    <Form.Group className="col-12 col-md-6 col-lg-4">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control value={connection.connectPhone} />
                    </Form.Group>
                    <Form.Group className="col-12 col-md-6 col-lg-4">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={connection.connectEmail} />
                    </Form.Group>
                    <Form.Group className="col-12 col-md-6 col-lg-4">
                        <Form.Label>DOB</Form.Label>
                        <Form.Control value={connection.dateOfBirth} />
                    </Form.Group>
                    <Form.Group className="col-12 col-md-6 col-lg-4">
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={connection.address} />
                    </Form.Group>
                </Row>
                <Row>
                <Form.Group className="col-12">
                        <Form.Label>Notes</Form.Label>
                        <br/>
                        <textarea rows={4} className="col-12" value={connection.connectNotes} />
                    </Form.Group>
                </Row>
            </Container>
        </>
    )
}
export default ListConnection