import { useContext, useEffect, useState } from "react"
import { Button, Container, Row } from "react-bootstrap"
import { EventContext } from "../../Contexts/EventContext"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

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
                        </div>
                        <Link
                            to={`/admin/event/view/${event.eventId}`}>
                            <Button
                                className="col-12">
                                View People
                            </Button>
                        </Link>
                        <div>
                            <br />
                        </div>
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
                        <div
                            className="col-12">
                            <Button
                                className="col-12"
                                variant="danger"
                                onClick={() => { handleDeleteEvent(event.eventId) }}>
                                Delete
                            </Button>
                        </div>
                        <div>
                            <br />
                        </div>
                        <hr />
                    </>
                )
            })
        }
    }

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
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