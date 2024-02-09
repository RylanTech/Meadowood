import { useEffect, useState } from "react";
import { Container, DropdownButton, ListGroup, Row } from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function Classes() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Function to update screenWidth state
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        // Attach event listener to window resize
        window.addEventListener('resize', updateScreenWidth);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

    function screenSize() {
        if (screenWidth > 768) {
            return (
                <>
                    <div className="col-4">
                        <ListGroup className="classList">
                            <ListGroup.Item className="classListItem classHeading">
                                Nursery
                            </ListGroup.Item>
                            <ListGroup.Item className="classListItem classHeading">
                                Toddler
                            </ListGroup.Item>
                            <ListGroup.Item className="classListItem classHeading">
                                Children
                            </ListGroup.Item>
                            <ListGroup.Item className="classListItem classHeading">
                                Youth
                            </ListGroup.Item>
                            <ListGroup.Item className="classListItem classHeading">
                                Young Adults
                            </ListGroup.Item>
                            <ListGroup.Item className="classListItem classHeading">
                                Young Adults #2
                            </ListGroup.Item>
                            <ListGroup.Item className="classListItem classHeading">
                                Adults
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <DropdownButton
                        title="Class"
                        className="classDropdown"
                    >
                        <DropdownItem className="classHeading">
                            Nursery
                        </DropdownItem>
                        <DropdownItem className="classHeading">
                            Toddler
                        </DropdownItem>
                        <DropdownItem className="classHeading">
                            Children
                        </DropdownItem>
                        <DropdownItem className="classHeading">
                            Youth
                        </DropdownItem>
                        <DropdownItem className="classHeading">
                            Young Adults
                        </DropdownItem>
                        <DropdownItem className="classHeading">
                            Young Adults #2
                        </DropdownItem>
                        <DropdownItem className="classHeading">
                            Adults
                        </DropdownItem>
                    </DropdownButton>
                </>
            )
        }
    }

    return (
        <>
            <Container>
                <Row>
                    {screenSize()}
                </Row>
            </Container>
        </>
    )
}
export default Classes