import { useContext, useEffect, useState } from "react"
import { StaffContext } from "../../Contexts/StaffContext"
import { Button, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function AdminStaff() {
    const [staff, setStaff] = useState(null)
    const { getAllStaff } = useContext(StaffContext)

    useEffect(() => {
        async function gettingStaff() {
            let staffMembers = await getAllStaff()
            setStaff(staffMembers)
        }
        gettingStaff()
    }, [])

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
            if (desc === "") {
                return <></>
            } else {
                return (
                    <div className="aboutDesc">
                        {desc}
                    </div>
                )
            }
        }

        if (staff) {
            return staff.map((member) => {
                return (
                    <>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="aboutProfile">
                                {ifPhoto(member.imageUrl)}
                                <div className="aboutName">
                                    {member.name}
                                </div>
                                <div className="aboutTitle">
                                    {member.title}
                                </div>
                                {ifDesc(member.description)}
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
            <Container>
                <br/>
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