import { useEffect, useState } from "react";
import { Container, DropdownButton, ListGroup, Row } from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function Classes() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [content, setContent] = useState()

    useEffect(() => {
        // Function to update screenWidth state
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        // Attach event listener to window resize
        window.addEventListener('resize', updateScreenWidth);

        setContent(selection[0])

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

    function changeSelected(num) {
        let ele0 = document.getElementById("list0")
        let ele1 = document.getElementById("list1")
        let ele2 = document.getElementById("list2")
        let ele3 = document.getElementById("list3")
        let ele4 = document.getElementById("list4")
        let ele5 = document.getElementById("list5")
        let ele6 = document.getElementById("list6")

        if (screenWidth > 768) {
            ele0.classList.remove("listItemSelected")
            ele1.classList.remove("listItemSelected")
            ele2.classList.remove("listItemSelected")
            ele3.classList.remove("listItemSelected")
            ele4.classList.remove("listItemSelected")
            ele5.classList.remove("listItemSelected")
            ele6.classList.remove("listItemSelected")

            let name = `list${num}`
            let element = document.getElementById(name)
            element.classList.add("listItemSelected")
        }

        setContent(selection[num])
    }

    const selection = [
        {
            title: "Nursery",
            description: "",
            photo: ""
        },
        {
            title: "Toddler",
            description: "",
            photo: ""
        },
        {
            title: "Children",
            description: "",
            photo: ""
        },
        {
            title: "Youth",
            description: "",
            photo: ""
        },
        {
            title: "Young Adults",
            description: "",
            photo: ""
        },
        {
            title: "Young Adults #2",
            description: "",
            photo: ""
        },
        {
            title: "Adults",
            description: "",
            photo: ""
        },
    ]

    function screenSize() {
        if (screenWidth > 768) {
            return (
                <>
                    <div className="col-4">
                        <ListGroup className="classList">
                            <ListGroup.Item id="list0" className="classListItem classHeading listItemSelected"
                                onClick={() => changeSelected(0)}>
                                Nursery
                            </ListGroup.Item>
                            <ListGroup.Item id="list1" className="classListItem classHeading"
                                onClick={() => changeSelected(1)}>
                                Toddler
                            </ListGroup.Item>
                            <ListGroup.Item id="list2" className="classListItem classHeading"
                                onClick={() => changeSelected(2)}>
                                Children
                            </ListGroup.Item>
                            <ListGroup.Item id="list3" className="classListItem classHeading"
                                onClick={() => changeSelected(3)}>
                                Youth
                            </ListGroup.Item>
                            <ListGroup.Item id="list4" className="classListItem classHeading"
                                onClick={() => changeSelected(4)}>
                                Young Adults
                            </ListGroup.Item>
                            <ListGroup.Item id="list5" className="classListItem classHeading"
                                onClick={() => changeSelected(5)}>
                                Young Adults #2
                            </ListGroup.Item>
                            <ListGroup.Item id="list6" className="classListItem classHeading"
                                onClick={() => changeSelected(6)}>
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
                        <DropdownItem className="classHeading"
                            onClick={() => changeSelected(0)}>
                            Nursery
                        </DropdownItem>
                        <DropdownItem className="classHeading"
                            onClick={() => changeSelected(1)}>
                            Toddler
                        </DropdownItem>
                        <DropdownItem className="classHeading"
                        onClick={() => changeSelected(2)}>
                            Children
                        </DropdownItem>
                        <DropdownItem className="classHeading"
                        onClick={() => changeSelected(3)}>
                            Youth
                        </DropdownItem>
                        <DropdownItem className="classHeading"
                        onClick={() => changeSelected(4)}>
                            Young Adults
                        </DropdownItem>
                        <DropdownItem className="classHeading"
                        onClick={() => changeSelected(5)}>
                            Young Adults #2
                        </DropdownItem>
                        <DropdownItem className="classHeading"
                        onClick={() => changeSelected(6)}>
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
                    <div className="col-12 col-md-8">
                        {content ? (
                            <>
                                <div className="classContent">
                                    <div className="classHeadingTwo">
                                        {content.title}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default Classes