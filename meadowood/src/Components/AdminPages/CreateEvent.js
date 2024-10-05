import { useContext, useState } from "react"
import { Button, Container, Form, Row } from "react-bootstrap"
import { EventContext } from "../../Contexts/EventContext"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"

function CreateEvent() {
    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [desctiption, setDescription] = useState("")
    const [date, setDate] = useState("")

    const { createEvent } = useContext(EventContext)
    let navigate = useNavigate()

    async function handleSubmit() {
        let event = {
            eventTitle: title,
            eventLocation: location,
            eventDescription: desctiption,
            date: date
        }

        let res = await createEvent(event)
        if (res.status) {
            navigate('/admin/events')
        }
    }

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
            <Container>
                <Row>
                    <Form.Group
                        className="col-12 col-md-6">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group
                        className="col-12 col-md-6">
                        <Form.Label>Event Location</Form.Label>
                        <Form.Control
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group
                        className="col-12 col-md-6">
                        <Form.Label>Event Date</Form.Label>
                        <Form.Control
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Event Desctiption</Form.Label>
                        <br />
                        <textarea
                            rows={8}
                            className="col-12"
                            value={desctiption}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <br />
                <Row>
                    <div className="col-12">
                        <Button
                            className="col-12"
                            onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default CreateEvent