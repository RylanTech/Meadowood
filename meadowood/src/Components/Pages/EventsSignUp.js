import { Button, Container, Row } from "react-bootstrap"
import Footer from "../Footer"
import { useContext, useEffect, useState } from "react"
import { EventContext } from "../../Contexts/EventContext"
import { Link } from "react-router-dom"

function EventsSignUp() {
    const [events, setEvents] = useState()


    const { getAllEvents } = useContext(EventContext)

    useEffect(() => {
        async function gettingEvents() {
            let res = await getAllEvents()
            setEvents(res)
        }
        gettingEvents()
    }, [getAllEvents])


    function listEvents() {
        if (events.length > 0) {
            return events.map((event) => {
                console.log(event)
                return (
                    <>
                        <Row>
                            <div className="eventsSUHeader">
                                Sign up for our events!
                            </div>
                        </Row>
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
                            <Link
                                to={`/eventssignup/${event.eventId}`}>
                                <Button
                                    className="col-12 signUpButton">
                                    Sign up
                                </Button>
                            </Link>
                        </div>
                    </>
                )
            })
        } else {
            return (
                <>
                    <div className="noEvents">
                        No events at this time
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <Container>
                <Row>
                    {events ? (
                        <>
                            {listEvents()}
                        </>
                    ) : (
                        <>
                            <center>
                                <div className="noEvents">
                                    Error
                                </div>
                            </center>
                        </>
                    )}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default EventsSignUp