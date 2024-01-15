import { useContext, useState } from "react"
import { Button, Card, Container, Form, Row } from "react-bootstrap"
import { ClipContext } from "../../Contexts/ClipContext";

function CreateClip() {
    const [clipTitle, setClipTitle] = useState("");
    const [clipURL, setClipURL] = useState("");
    const [clipThumbnail, setClipThumbnail] = useState("");

    const {createClip} = useContext(ClipContext)

    function handleSubmit() {
        let clip = {
            clipThumbnail: clipThumbnail,
            clipTitle: clipTitle,
            clipURL: clipURL
        }
        console.log(clip)
        createClip(clip)
    }

    return (
        <>
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