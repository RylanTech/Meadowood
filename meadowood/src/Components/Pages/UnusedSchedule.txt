// import React from 'react'
// import { Container, Row } from 'react-bootstrap'
// import ListGroup from 'react-bootstrap/ListGroup'
// import { EventContext } from '../../Contexts/EventContext'

// function Schedule() {

//     function list(events) {
//         if (events === undefined) {
//             return (
//                 <ListGroup.Item className='eItem' key={"error2"}>
//                     <h3>Something went wrong with the Database</h3>
//                 </ListGroup.Item>
//             )
//         } else {
//             return events.map((event) => {
//                 return (
//                     <ListGroup.Item className='eItem almostWhite' key={event.eventId}>
//                         <h2>
//                             {event.title}
//                         </h2>
//                         <div className='eventTime'>
//                             {event.day} at {event.time}
//                         </div>
//                         <br />
//                         <div className='eventDes'>
//                             {event.description}
//                         </div>
//                         <div className='eventAdd'>
//                             Location: {event.address}
//                         </div>
//                         {/* <Link to={`/events/${event.eventId}`} key={event.eventId} className="eLink">
//                             <Button className='eventButton'>
//                                 <div className='eventTitle'>{event.title}</div>
//                             </Button>
//                         </Link> */}
//                     </ListGroup.Item>
//                 )
//             }
//             )
//         }
//     }

//     return (
//         <>
//             <center>
//             <div className='sr1'>
//                 <img className='helloPng' src='Images/hello.png' />
//                 <div className='helloTxt'>
//                         <div className='stxt'>
//                             <div className='sheader'>
//                                 Come join us!
//                             </div>
//                             Sunday's at 10am - Sunday School <br/>
//                             <br />
//                             Sunday's at 11am - Morning Worship <br/>
//                             <br />
//                             Sunday's at 11am - Children's Church <br/>
//                             <br />
//                             Wednesday's at 7pm - Family Night <br/>
//                         </div>
//                 </div>
//             </div>
//             </center>
//             <Container>
//                 <Row>
//                     <center>
//                         <ListGroup className="align-self-start col-12">
//                             <div className='vertical-menu'>
//                                 <EventContext.Consumer>
//                                     {({ events }) => (
//                                         list(events)
//                                     )}
//                                 </EventContext.Consumer>
//                             </div>
//                         </ListGroup>
//                     </center>
//                 </Row>
//             </Container>
//         </>
//     )
// }

// export default Schedule