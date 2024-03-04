import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { Link, useNavigate } from "react-router-dom"
import { Button, Card, Container, Form, Row } from "react-bootstrap"
import { LiveContext } from "../../Contexts/LiveContext"

function EditLive() {

    const { isAdmin, verify } = useContext(UserContext)
    const { getStatus, setStatus } = useContext(LiveContext)
    const navigate = useNavigate()

    const [liveStatus, setLiveStatus] = useState("")
    const [liveTitle, setLiveTitle] = useState("")
    const [liveLink, setLiveLink] = useState("")

    useEffect(() => {

        async function gettingLiveStatus() {
            let status = await getStatus()
            setLiveStatus(status.liveStatus)
            setLiveTitle(status.liveTitle)
            setLiveLink(status.liveLink)
        }
        gettingLiveStatus()
    }, []);



    async function handleSubmit() {
        let newStatus = {
            liveLink,
            liveStatus,
            liveTitle
        }
        let res = await setStatus(newStatus)
        if (res) {
            navigate("/admin")
        } else {
            console.log("error")
        }
    }

    return (
        <>
            <Container>
                <br />
                <h4></h4>
                <Row>
                    <Form.Group className="col-6">
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={(e) => setLiveStatus(e.target.value)}
                        >
                            <option>Select</option>
                            <option value="Live">Live</option>
                            <option value="Not Live">Not Live</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="col-6">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            value={liveTitle}
                            onChange={(e) => setLiveTitle(e.target.value)}
                        />
                    </Form.Group>
                    <br /><br /><br /><br />
                    <Form.Group className="col-12">
                        <Form.Label>Link</Form.Label>
                        <Form.Control
                            value={liveLink}
                            onChange={(e) => setLiveLink(e.target.value)}
                        />
                    </Form.Group>
                    <br /><br /><br /><br />
                    <div className="col-12">
                        <Button
                            className="col-12"
                            onClick={handleSubmit}>
                            Set
                        </Button>
                    </div>
                </Row>
                <br /><br />
                <Row>

                    <div className="col-6">
                        <center>
                            To get the link on a youtube video, click share
                            <br />
                            <img className="col-12" src="https://i.postimg.cc/5Nc5yY7k/share1.png" />
                        </center>
                    </div>
                    <div className="col-6">
                        <center>
                            Then click embed,
                            <br />
                            <img className="col-12" src="https://i.postimg.cc/jjkPbLnc/share2.png" />
                        </center>
                    </div>
                    <div className="col-12">
                        <br /><br />
                        <center>
                            Then copy the highlighted text and put that in the "Link field"
                            <br />
                            <img className="col-12" src="https://i.postimg.cc/rFLWM6sB/share3.png" />
                        </center>
                    </div>

                </Row>
            </Container>
        </>
    )
}
export default EditLive