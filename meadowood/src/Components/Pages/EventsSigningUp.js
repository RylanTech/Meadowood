import { useContext, useEffect, useState } from "react"
import { Button, Container, Form, Row } from "react-bootstrap"
import { EventContext } from "../../Contexts/EventContext"
import { useParams } from "react-router-dom"
import { PersonContext } from "../../Contexts/personContext"

function EventsSigningUp() {
    const [event, setEvent] = useState({
        eventId: 0,
        eventLocation: "",
        eventTitle: "",
        eventDescription: "",
        date: ""
    })
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const { getEvent } = useContext(EventContext)
    const { createPerson } = useContext(PersonContext)
    let params = useParams()

    useEffect(() => {
        async function gettingEvent() {
            let id = params.id
            let res = await getEvent(id)
            setEvent(res)
        }
        gettingEvent()
    }, [getEvent, params.id])

    async function handleSubmit() {
        let newPerson = {
            userEmail: email,
            userName: name,
            userPhone: phone,
            eventId: event.eventId
        }
        let res = await createPerson(newPerson)
        if (res) {
            setIsSubmitted(true)
        }
    }

    function ifEvent() {
        if (event) {
            return (
                <>
                    <div className="col-12 event">
                        <div className="eventTitle">
                            {event.eventTitle}
                        </div>
                        <div className="eventTime">
                            {event.date}
                        </div>
                        <div className="eventDescription">
                            <div dangerouslySetInnerHTML={{ __html: event.eventDescription.replace(/\n/g, '<br />') }} />
                        </div>
                        <div className="eventLocation">
                            {event.eventLocation}
                        </div>
                        <br />
                    </div>
                    <div>
                        <Form>
                            <Row>
                                <Form.Group
                                    className="col-12 col-md-6">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="col-12 col-md-6">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="col-12 col-md-6">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                            </Row>
                        </Form>
                        <br />
                        <Button
                            onClick={handleSubmit}
                            className="col-12">
                            Submit
                        </Button>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <Container>
                <Row>
                    {isSubmitted ? (
                        <>
                        <div className="noEvents">
                            Thank you
                        </div>
                        </>
                    ) : (
                        ifEvent()
                    )}
                </Row>
            </Container>
        </>
    )
}
export default EventsSigningUp