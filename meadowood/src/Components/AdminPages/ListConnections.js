import { useContext, useEffect, useState } from "react"
import { ConnectionContext } from "../../Contexts/ConnectionContext"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Container, Form, Row } from "react-bootstrap"
import { Helmet } from "react-helmet"

function ListConnection() {
    const [connection, setConnection] = useState({
        connectName: "",
        connectEmail: "",
        connectPhone: "",
        connectNotes: "",
        dateOfBirth: "",
        address: ""
    })

    const { getConnection, deleteConnection } = useContext(ConnectionContext)
    let params = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        async function gettingConnection() {
            let id = params.id
            let res = await getConnection(id)
            setConnection(res)
        }
        gettingConnection()

    }, [getConnection, params.id])

    async function deleteAConnection() {
        await deleteConnection(params.id)
        .then(() => {
            navigate('/admin/connections')
        })
    }

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
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
                        <br />
                        <textarea rows={4} className="col-12" value={connection.connectNotes} />
                    </Form.Group>
                </Row>
                <br/><br/>
                <Row>
                    <div className="col-12">
                        <Button
                            className="col-12"
                            variant="danger"
                            onClick={() => deleteAConnection()}>
                            Delete Connection
                        </Button>
                    </div>
                </Row>
                <br/><br/><br/>
            </Container>
        </>
    )
}
export default ListConnection