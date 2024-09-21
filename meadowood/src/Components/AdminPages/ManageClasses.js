import { Button, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function ManageClasses() {
    return (
        <>
            <Container>
                <br/>
                <Row>
                    <Link className="col-12"
                        to={'/admin/add-class'}>
                    <Button className="col-12">
                        Add Class
                    </Button>
                    </Link>
                </Row>
            </Container>
        </>
    )
}
export default ManageClasses