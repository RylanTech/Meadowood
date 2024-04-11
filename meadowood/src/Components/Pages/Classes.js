import { Container, Row } from "react-bootstrap";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Classes() {

    return (
        <>
            <Helmet>
                <meta name="title" content="MW COG - Classes" />
                <meta name="description" content="Meadowood Church of God - Better at the 
                Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, Lord, 
                Community, Church community, friendly church, Meadowood, Richmond Virginia 
                Church, Richmond VA, Meadowood Church of God Richmond VA, Classes page,
                find out more" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
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
                        Sunday School
                    </div>
                </Row>
                <hr />
                <Row>
                    <div className="classHeader col-8">
                        Nurery
                    </div>
                    <div className="classContent col-4">
                        11am-12pm
                    </div>
                </Row>
                <Row>
                    <div
                        className="afp">
                        (Available for parents)
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
                        11am-12pm
                    </div>
                </Row>
                <hr />
                <Row>
                    <Link className="classHeader col-5 col-md-4"
                        to='/kids'>
                        K - 6th Grade
                    </Link>
                    <div className="classContent col-3 col-md-4">

                    </div>
                    <div className="classContent col-4">
                        11am-12pm
                    </div>
                </Row>
                <Row>
                    <div
                        className="afp">
                        (Children's Church)
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
                        10am-11am
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
                        10am-11am
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
                        10am-11am
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