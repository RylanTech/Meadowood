import { useContext, useEffect, useState } from "react"
import { Button, Container, Row } from "react-bootstrap"
import { EventContext } from "../../Contexts/EventContext"
import { useParams } from "react-router-dom"
import { PersonContext } from "../../Contexts/personContext"

function ViewEventPeople() {
    const [event, setEvent] = useState()
    const [people, setPeople] = useState()

    const { getEvent } = useContext(EventContext)
    const { getPersonByEventId, deletePerson } = useContext(PersonContext)
    let params = useParams()

    useEffect(() => {
        async function gettingEvent() {
            let id = params.id
            let eventRes = await getEvent(id)
            let peopleRes = await getPersonByEventId(id)
            setEvent(eventRes)
            setPeople(peopleRes)
        }
        gettingEvent()
    }, [getEvent, getPersonByEventId, params.id]);

    function mapThroughPeople() {
        if (people) {
            return people.map((person) => {
                console.log(person)
                return (
                    <>
                    <div className="connection">
                        <Row>
                            <div className="personEntry col-4 col-md-2">
                                {person.userName}
                            </div>
                            <div className="personEntry col-4 col-md-4">
                                {person.userEmail}
                            </div>
                            <div className="personEntry col-4 col-md-4">
                                {person.userPhone}
                            </div>
                            <div className="personEntry col-12 col-md-2">
                                <Button
                                className="col-2 col-md-12"
                                variant="danger"
                                onClick={() => {
                                    deletePerson(person.signedUpUserId)
                                    .then(window.location.reload())
                                }}>
                                    Delete
                                </Button>
                            </div>
                            
                        </Row>
                    </div>
                    </>
                )
            })
        } else {
            return <></>
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
                            <br />
                        </>
                    ) : (
                        <>
                            <center>
                                Loading...
                            </center>
                        </>
                    )}
                    {people ? (
                        <>
                            {mapThroughPeople()}
                        </>
                    ) : (
                        <></>
                    )}
                </Row>
            </Container>
        </>
    )
}
export default ViewEventPeople