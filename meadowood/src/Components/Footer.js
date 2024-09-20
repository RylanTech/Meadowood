import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>

            <div className="footer">
                <Link
                    to={'/login'}
                    className="adminLoginLink">
                    Admin Login
                </Link>
                <br /><br /><br />
                <Container>
                    <Row>
                        <div className="col-6 col-md-4">
                            <div className="footerHeader">
                                Ministries
                            </div>
                            <Link className="footerLink"
                                to="/kids">
                                Kids
                            </Link>
                            <Link className="footerLink"
                                to="/youth">
                                Youth
                            </Link>
                            <Link className="footerLink"
                                to="/youngadults">
                                Young Adults
                            </Link>
                            <Link className="footerLink"
                                to="/ultimate">
                                Ultimate Adults
                            </Link>
                            <Link className="footerLink"
                                to="/youngatheart">
                                Seniors
                            </Link>
                            <Link className="footerLink"
                                to="/foodpantry">
                                Food Pantry
                            </Link>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="footerHeader">
                                Watch
                            </div>
                            <Link className="footerLink"
                                to="/live">
                                Live
                            </Link>
                            <Link className="footerLink"
                                to="/clips">
                                Clips
                            </Link>
                            <div className="footerHeader2">
                                Give
                            </div>
                            <a
                                className="footerLink"
                                href="https://www.paypal.com/donate/?hosted_button_id=J3L75KY6QTZDW"
                            >
                                Paypal
                            </a>
                            {/* <Link className="footerLink">
                                Venmo
                            </Link> */}
                        </div>
                        <div className="col-12 col-md-4">
                            <iframe
                                title="Meadowood Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.9983470073307!2d-77.43289078785402!3d37.602197921964716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b116567480f607%3A0x5e443048bf65fa4!2sMeadowood%20Church%20of%20God!5e0!3m2!1sen!2sus!4v1706407898336!5m2!1sen!2sus"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="locationIframe col-12"
                            />
                        </div>
                    </Row>
                    <Row>
                        <div className="madeByMe">
                            Website made by <a
                                className="myLink"
                                target="_blank"
                                
                                href="https://rylanworkman.com">Rylan Workman</a>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Footer