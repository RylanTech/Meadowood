import { Button, Container, Row } from "react-bootstrap"
import Footer from "../Footer"
import { useContext, useEffect, useState } from "react"
import { EventContext } from "../../Contexts/EventContext"
import { useParams } from "react-router-dom"

function EventsSignUp() {
    const [events, setEvents] = useState()


    const { getAllEvents } = useContext(EventContext)

    useEffect(() => {
        async function gettingEvents() {
            let res = await getAllEvents()
            setEvents(res)
        }
        gettingEvents()
    }, [])


    function listEvents() {
        if (events) {
            return events.map((event) => {
                console.log(event)
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
                        <br/>
                        <Button 
                        className="col-12 signUpButton">
                            Sign up
                        </Button>
                    </div> 
                    </>
                )
            })
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
                                <div>
                                    <h2
                                        className="noEvents">No events at this time</h2>
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