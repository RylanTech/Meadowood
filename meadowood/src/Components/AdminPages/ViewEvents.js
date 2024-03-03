import { useContext, useEffect, useState } from "react"
import { Button, Container, Row } from "react-bootstrap"
import { EventContext } from "../../Contexts/EventContext"
import { Link } from "react-router-dom"

function ViewEvents() {
    const [events, setEvents] = useState()

    const { getAllEvents, deleteEvent } = useContext(EventContext)

    useEffect(() => {
        async function gettingEvents() {
            let res = await getAllEvents()
            setEvents(res)
        }
        gettingEvents()
    }, [])

    async function handleDeleteEvent(id) {
        let res = await deleteEvent(id)
        .then(window.location.reload())
    }

    function mapThroughEvents() {
        if (events) {
            return events.map((event) => {
                return (
                    <>
                        <div className="col-1" />
                        <div className="col-10 eventInfo">
                            <h3>{event.eventTitle}</h3>
                            <div>
                                {event.eventLocation}
                            </div>
                            <br />
                            <div>
                                {event.eventDescription}
                            </div>
                            <div>
                                {event.date}
                            </div>
                            <br /><br />
                        </div>
                        <div className="col-1" />
                        <div className="col-12">
                            <Link
                                to={`/admin/event/edit/${event.eventId}`}>
                                <Button
                                    className="col-12"
                                    variant="warning">
                                    Edit
                                </Button>
                            </Link>
                            <div>
                                <br />
                            </div>
                            <Button
                                className="col-12"
                                variant="danger"
                                onClick={() => {handleDeleteEvent(event.eventId)}}>
                                Delete
                            </Button>
                            <div>
                                <br />
                            </div>
                        </div>
                        <hr />
                    </>
                )
            })
        }
    }

    return (
        <>
            <Container>
                <br />
                <Row>
                    <Link to={"/admin/event/create"}>
                        <Button className="col-12">
                            Create Event
                        </Button>
                    </Link>
                </Row>
                <hr />
                <br />
                <Row>
                    {mapThroughEvents()}
                </Row>
            </Container>
        </>
    )
}
export default ViewEvents