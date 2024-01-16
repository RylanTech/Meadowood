import { useContext, useEffect, useState } from "react"
import { Button, Card, Container, Form, Row } from "react-bootstrap"
import { ClipContext } from "../../Contexts/ClipContext";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate, useParams } from "react-router-dom";

function EditClip() {
    const [clipTitle, setClipTitle] = useState("");
    const [clipURL, setClipURL] = useState("");
    const [clipThumbnail, setClipThumbnail] = useState("");

    const { editClip, getClip, deleteClip } = useContext(ClipContext)
    const { isAdmin } = useContext(UserContext)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (isAdmin === true) {
            console.log("Admin verified")
        } else {
            navigate('/')
        }

        async function gettingClip() {
            let id = params.id
            let res = await getClip(id)
            setClipThumbnail(res.clipThumbnail)
            setClipURL(res.clipURL)
            setClipTitle(res.clipTitle)
        }
        gettingClip()
    }, [])

    function handleSubmit() {
        let clip = {
            clipThumbnail: clipThumbnail,
            clipTitle: clipTitle,
            clipURL: clipURL,
            clipId: params.id
        }
        editClip(clip)
        navigate("/admin")
    }

    return (
        <>
            <Container>
                <Row>
                    <br />
                    <Row>
                        <div className="col-3" />
                        <a
                            href={clipURL}
                            target="_blank"
                            className="col-12 col-sm-6 thumbnailLink"
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
                        <Row>
                            <Button
                                className="col-5"
                                onClick={handleSubmit}
                            >
                                Edit
                            </Button>
                            <div className="col-2"/>
                            <Button
                                className="col-5"
                                onClick={() => {
                                    deleteClip(params.id)
                                    navigate("/admin")
                                }}
                                variant="danger"
                            >
                                Delete
                            </Button>
                        </Row>
                    </Form>
                </Row>
            </Container>
        </>
    )
}
export default EditClip