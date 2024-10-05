import { useContext, useEffect, useState } from "react"
import { Button, Card, Container, Form, Row } from "react-bootstrap"
import { ClipContext } from "../../Contexts/ClipContext";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function CreateClip() {
    const [clipTitle, setClipTitle] = useState("");
    const [clipURL, setClipURL] = useState("");
    const [clipThumbnail, setClipThumbnail] = useState("");

    const {createClip} = useContext(ClipContext)
    const {isAdmin} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAdmin === true) {
            console.log("Admin verified")
        } else {
            navigate('/')
        }
    },[navigate, isAdmin])

    function handleSubmit() {
        let clip = {
            clipThumbnail: clipThumbnail,
            clipTitle: clipTitle,
            clipURL: clipURL
        }
        createClip(clip)
        navigate("/admin")
    }

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
            <Container>
                <Row>
                    <br />
                    <Row>
                        <div className="col-4" />
                        <a
                            href={clipURL}
                            target="_blank"
                            className="col-12 col-sm-4 thumbnailLink"
                        >
                            <Card className="clipCard col-12">
                                <Card.Header>
                                    <Card.Img className="clipThumbnail" src={clipThumbnail} />
                                </Card.Header>
                                <Card.Body>
                                    {clipTitle}
                                </Card.Body>
                            </Card>
                        </a>
                    </Row>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                value={clipTitle}
                                onChange={(e) => setClipTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>URL</Form.Label>
                            <Form.Control
                                value={clipURL}
                                onChange={(e) => setClipURL(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Thumbnail</Form.Label>
                            <Form.Control
                                value={clipThumbnail}
                                onChange={(e) => setClipThumbnail(e.target.value)}
                            />
                        </Form.Group>
                        <br />
                        <Button
                            className="col-12"
                            onClick={handleSubmit}
                            >
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        </>
    )
}
export default CreateClip