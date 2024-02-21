import { Container, Row } from "react-bootstrap"

function Foodpantry() {
    return (
        <>
            <Container>
                <Row>
                    <img src="https://i.postimg.cc/fyCtvmWS/428924754-384449354484246-3216635529621801509-n.jpg" />
                </Row>
                <Row>
                    <img
                        className="col-12 col-md-4"
                        src="https://i.postimg.cc/dQ5V4qmC/Feed-More-logo-for-blog.png" />
                    <div className="col-12 col-md-8">
                        <div className="col-12 feedMoreSchedule">
                            <div className="feedMoreScheduleHeader">
                                THURSDAYS @ CHURCH
                            </div>
                            <div className="feedMoreScheduleContent">

                                4pm every 2nd & 4th Thursday - Gym
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default Foodpantry