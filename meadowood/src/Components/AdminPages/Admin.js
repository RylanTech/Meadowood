import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { Link, useNavigate } from "react-router-dom"
import { Button, Card, Container, Form, Row } from "react-bootstrap"
import { LiveContext } from "../../Contexts/LiveContext"
import { HeaderContext } from "../../Contexts/HeaderContext"

function Admin() {

    const { isAdmin } = useContext(UserContext)
    const { getStatus } = useContext(LiveContext)
    const { getHeader, setHeader } = useContext(HeaderContext)
    const navigate = useNavigate()

    const [status, setStatus] = useState()
    const [headerLink, setHeaderLink] = useState("")
    const [headerCaption, setHeaderCaption] = useState("")

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

        async function gettingHeader() {
            let hdr = await getHeader()
            console.log(hdr)
            setHeaderLink(hdr.headerLink)
            setHeaderCaption(hdr.headerCaption)
        }
        gettingHeader()

    }, [])

    function handleHeaderSubmit() {
        let header = {
            headerCaption: headerCaption,
            headerLink: headerLink
        }
        setHeader(header)
    }

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
                        <div className="col-6 col-lg-4">
                            <Card>
                            <Card.Body>
                                <Card.Header>
                                    Live Status Error
                                </Card.Header>

                            </Card.Body>
                        </Card>
                        </div>
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
                    <div className="col-6 col-lg-4">
                        <Card>
                            <Card.Body>
                                <Card.Header>
                                    <h4>Homepage Header: 21x9</h4>
                                </Card.Header>
                                <Card.Text>
                                    <br/>
                                    <img 
                                    className="homepageHeader col-12"
                                    src={headerLink}
                                    />
                                    <Form.Label>Image Link</Form.Label>
                                    <Form.Control
                                    value={headerLink}
                                    onChange={(e) => setHeaderLink(e.target.value)}/>
                                    <br/>
                                    <Form.Label>Image Caption</Form.Label>
                                    <Form.Control
                                    value={headerCaption}
                                    onChange={(e) => setHeaderCaption(e.target.value)}/>
                                    <br/>
                                    <Button 
                                    className="col-12"
                                    onClick={handleHeaderSubmit}
                                    >
                                        Update
                                    </Button>
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