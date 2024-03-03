import { useContext, useEffect, useState } from "react"
import { Button, Container, Form, Row } from "react-bootstrap"
import { EventContext } from "../../Contexts/EventContext"
import { useNavigate, useParams } from "react-router-dom"
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

    const { getEvent } = useContext(EventContext)
    const { createPerson } = useContext(PersonContext)
    let params = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        async function gettingEvent() {
            let id = params.id
            let res = await getEvent(id)
            setEvent(res)
        }
        gettingEvent()
    }, [])

    async function handleSubmit() {
        let newPerson = {
            userEmail: email,
            userName: name,
            userPhone: phone,
            eventId: event.eventId
        }
        let res = await createPerson(newPerson)
        if (res) {
            navigate('/')
        }
    }

    return (
        <>
            <Container>
                <Row>
                    {event ? (
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
                    ) : (
                        <>
                            <center>
                                Loading...
                            </center>
                        </>
                    )}
                </Row>
            </Container>
        </>
    )
}
export default EventsSigningUp