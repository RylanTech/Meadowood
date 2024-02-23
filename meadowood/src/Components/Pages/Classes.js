import { Container, Row } from "react-bootstrap";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Classes() {

    return (
        <>
            <Container>
                <br />
                <Row>
                    <div className="classHeader col-4">
                        Class
                    </div>
                    <div className="classHeader col-4">
                        Wednesday
                    </div>
                    <div className="classHeader col-4">
                        Sunday
                    </div>
                </Row>
                <hr />
                <Row>
                    <div className="classHeader col-5 col-md-4">
                        Nurery
                    </div>
                    <div className="classContent col-3 col-md-4">

                    </div>
                    <div className="classContent col-4">
                        11am-12:30pm
                    </div>
                </Row>
                <hr />
                <Row>
                    <div className="classHeader col-5 col-md-4">
                        Toddler
                    </div>
                    <div className="classContent col-3 col-md-4">

                    </div>
                    <div className="classContent col-4">
                        11am-12:30pm
                    </div>
                </Row>
                <hr />
                <Row>
                    <Link className="classHeader col-5 col-md-4"
                        to='/kids'>
                        K - 7th Grade
                    </Link>
                    <div className="classContent col-3 col-md-4">

                    </div>
                    <div className="classContent col-4">
                        11am-12:30pm
                    </div>
                </Row>
                <hr />
                <Row>
                    <Link className="classHeader col-5 col-md-4"
                        to='/youth'>
                        7th grade - 18
                    </Link>
                    <div className="classContent col-3 col-md-4">
                        6pm-8pm
                    </div>
                    <div className="classContent col-4">
                        11am-12:30pm
                    </div>
                </Row>
                <hr />
                <Row>
                    <Link className="classHeader col-5 col-md-4"
                        to='/youngadults'>
                        18 & Graduated - 25
                    </Link>
                    <div className="classContent col-3 col-md-4">
                        6pm-8pm
                    </div>
                    <div className="classContent col-4">
                        11am-12:30pm
                    </div>
                </Row>
                <hr />
                <Row>
                    <Link className="classHeader col-5 col-md-4"
                        to='/ultimate'>
                        Ultimate Adults
                    </Link>
                    <div className="classContent col-3 col-md-4">
                        7pm-8pm
                    </div>
                    <div className="classContent col-4">

                    </div>
                </Row>
                <hr />
                <Row>
                    <div className="classHeader col-5 col-md-4">
                        Adults
                    </div>
                    <div className="classContent col-3 col-md-4">
                        7pm-8pm
                    </div>
                    <div className="classContent col-4">
                        10am-11am
                    </div>
                </Row>
                <hr />
                <Row>
                    <Link className="classHeader col-4 col-md-3"
                        to='/youngatheart'>
                        55+
                    </Link>
                    <div className="classContent col-8 col-md-9">
                        <center>
                            Scheduled once a month
                        </center>
                    </div>
                </Row>
            </Container>
            <br /><br /><br /><br />
            <Footer />
        </>
    )
}
export default Classes