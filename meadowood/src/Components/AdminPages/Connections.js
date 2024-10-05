import { useContext, useEffect, useState } from "react"
import { Button, Container, Row } from "react-bootstrap"
import { ConnectionContext } from "../../Contexts/ConnectionContext"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Connections() {
    const [connections, setConnections] = useState()

    const { getConnections } = useContext(ConnectionContext);

    useEffect(() => {
        async function gettingConnections() {
            let res = await getConnections()
            setConnections(res)
        }
        gettingConnections()
    }, [getConnections])

    function displayConnections() {
        if (connections) {
            return connections.map((connection) => {
                return (
                    <div className="connection">
                        <Row>
                            <div className="connectionEntry col-3">
                                {connection.connectName}
                            </div>
                            <div className="connectionEntry col-3">
                                {connection.connectPhone}
                            </div>
                            <div className="connectionEntry col-4">
                                {connection.connectEmail}
                            </div>
                            <div className="connectionEntry col-2">
                            <Link to={`/admin/connection/${connection.connectId}`}>
                                <Button>
                                    View
                                </Button>
                            </Link>
                            </div>
                            
                        </Row>
                    </div>
                )
            })
        } else {
            return (
                <>
                    Waiting for connections
                </>
            )
        }
    }

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
            <Container>
                <div className="connectionTitleRow">
                    <Row>
                        <div className="col-3">
                            Name:
                        </div>
                        <div className="col-3">
                            Number:
                        </div>
                        <div className="col-4">
                            Email:
                        </div>
                    </Row>
                </div>
                <Row>
                    {displayConnections()}
                </Row>
            </Container>
        </>
    )
}
export default Connections