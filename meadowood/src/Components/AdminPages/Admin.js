import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { Link, useNavigate } from "react-router-dom"
import { Button, Card, Container, Row } from "react-bootstrap"
import { LiveContext } from "../../Contexts/LiveContext"

function Admin() {

    const { isAdmin } = useContext(UserContext)
    const { getStatus } = useContext(LiveContext)
    const navigate = useNavigate()

    const [status, setStatus] = useState()

    useEffect(() => {
        if (isAdmin === true) {
            console.log("Admin verified")
        } else {
            navigate('/')
        }

        async function gettingLiveStatus() {
            let status = await getStatus()
            setStatus(status)
        }
        gettingLiveStatus()
    }, [])

    return (
        <>
            <Container>
                <br />
                <Row>
                    {status ? (
                        <>
                            <div className="col-6 col-lg-4">
                                <Card>
                                    <Card.Body>
                                        <Card.Header>
                                            <h4>Live Status: <div className="liveStatus">{status.liveStatus}</div></h4>
                                        </Card.Header>
                                        <Card.Text>
                                            Live link: <a target="_blank" href={status.liveLink}>{status.liveLink}</a>
                                            <br />
                                            Title: {status.liveTitle}
                                        </Card.Text>
                                        <Link to="/admin/live/edit">
                                            <Button className="col-12">
                                                Edit
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </>
                    ) : (
                        <Card className="col-6 col-lg-4">
                            <Card.Body>
                                <Card.Header>
                                    Live Status Error
                                </Card.Header>

                            </Card.Body>
                        </Card>
                    )}
                    <div className="col-6 col-lg-4">
                        <Card>
                            <Card.Body>
                                <Card.Header>
                                    <h4>Clips</h4>
                                </Card.Header>
                                <Card.Text>
                                    <br/>
                                    <Link to='/admin/clips/create/'>
                                        <Button className="col-12">
                                            Create
                                        </Button>
                                    </Link>
                                    <br/><br/>
                                    <Link to='/admin/clips/'>
                                        <Button 
                                        className="col-12"
                                        variant="warning"
                                        >
                                            Edit/Delete
                                        </Button>
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default Admin