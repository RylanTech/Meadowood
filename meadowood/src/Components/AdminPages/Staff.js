import { useContext, useEffect, useState } from "react"
import { StaffContext } from "../../Contexts/StaffContext"
import { Button, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

function AdminStaff() {
    const [staff, setStaff] = useState(null)

    const { getAllStaff, deleteStaff } = useContext(StaffContext)

    useEffect(() => {
        async function gettingStaff() {
            let staffMembers = await getAllStaff()
            setStaff(staffMembers)
        }
        gettingStaff()
    }, [getAllStaff])

    async function handleDelete(id) {
        let res = await deleteStaff(id);
        if (res === null) {
            console.log("error")
        } else {
            window.location.reload()
        }
    }

    function mapThroughStaff() {

        function ifPhoto(photo) {
            if (photo === "") {
                return <></>
            } else {
                return (
                    <>
                        <img src={photo}
                            alt="meadowood"
                            className="col-12 aboutPhoto" />
                    </>
                )
            }
        }
        
        function ifDesc(desc) {
            return (
                <div className="aboutDesc">
                    {desc}
                </div>
            )
        }

        if (staff) {
            return staff.map((member) => {
                return (
                    <>
                        <div 
                        key={member.staffId}
                        className="col-12 col-md-6 col-lg-4">
                            <div className="aboutProfile">
                                {ifPhoto(member.imageUrl)}
                                <div className="aboutName">
                                    {member.name}
                                </div>
                                <div className="aboutTitle">
                                    {member.title}
                                </div>
                                {member.description ? (
                                    ifDesc(member.description)
                                ) : (
                                    <></>
                                )}
                                <br />
                                <Link to={`/admin/staff/edit/${member.staffId}`}>
                                    <Button className="col-12">
                                        Edit
                                    </Button>
                                </Link>
                                <br/><br/>
                                <Button
                                variant="danger"
                                className="col-12"
                                onClick={() => {handleDelete(member.staffId)}}>
                                    Delete
                                </Button>
                            </div>
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
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
            <Container>
                <br />
                <Row>
                    <Link
                        to="/admin/staff/create">
                        <Button
                            className="col-12">
                            Create Staff Member
                        </Button>
                    </Link>
                </Row>
                <Row>
                    {mapThroughStaff()}
                </Row>
            </Container>
        </>
    )
}
export default AdminStaff