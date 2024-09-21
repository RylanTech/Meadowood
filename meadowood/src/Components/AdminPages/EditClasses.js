import { useContext, useEffect, useState } from "react"
import { Button, Card, Container, Form, Row } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom";
import { ClassContext } from "../../Contexts/ClassContexts"

function EditClass() {
    const [classId, setClassId] = useState();
    const [className, setClassName] = useState();
    const [classSubtitle, setClassSubtitle] = useState();
    const [classLink, setClassLink] = useState();
    const [wednesdayTime, setWednesdayTime] = useState();
    const [sundaySchoolTime, setSundaySchoolTime] = useState();
    const [singleText, setSingleText] = useState();

    const { getOneClass, editClass } = useContext(ClassContext)
    let navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        let id = params.id
        async function gettingClass() {
            let meadowoodClass = await getOneClass(id)

            setClassName(meadowoodClass.className)
            setClassSubtitle(meadowoodClass.classSubtitle)
            setClassLink(meadowoodClass.classLink)
            setWednesdayTime(meadowoodClass.wednesdayTime)
            setSundaySchoolTime(meadowoodClass.sundaySchoolTime)
            setSingleText(meadowoodClass.singleText)
            setClassId(meadowoodClass.classId)
        }
        gettingClass()
    }, [])

    async function editingClass() {
        let classDetails = {
            classId,
            className,
            classSubtitle,
            classLink,
            wednesdayTime,
            sundaySchoolTime,
            singleText
        }
        await editClass(classDetails).then(() => {
            navigate("/admin/manage-classes");
        });
    }

    return (
        <>
            <Container>
                <br />
                <Row>
                    <div className="col-md-2" />
                    <Card className="col-12 col-md-8">
                        <Card.Body>
                            <center>Add Class</center>
                        </Card.Body>
                        <Row>
                            <div className="col-6">
                                Class name
                                <Form.Control value={className} onChange={(e) => setClassName(e.target.value)} />
                            </div>
                            <div className="col-6">
                                Class subtitle (optional)
                                <Form.Control value={classSubtitle} onChange={(e) => setClassSubtitle(e.target.value)} />
                            </div>
                            <div className="col-6">
                                Class link - internal (optional)
                                <Form.Control value={classLink} onChange={(e) => setClassLink(e.target.value)} />
                            </div>
                            <div className="col-6">
                                Wednesday Time (optional)
                                <Form.Control value={wednesdayTime} onChange={(e) => setWednesdayTime(e.target.value)} />
                            </div>
                            <div className="col-6">
                                Sunday School Time (optional)
                                <Form.Control value={sundaySchoolTime} onChange={(e) => setSundaySchoolTime(e.target.value)} />
                            </div>
                            <br /><br /><br />
                            <div className="col-12">
                                Single Text - Wed & Sun times won't appear if this is applied
                                <Form.Control value={singleText} onChange={(e) => setSingleText(e.target.value)} />
                            </div>
                        </Row>
                        <br />
                        <Button variant="warning" onClick={editingClass}>
                            Edit
                        </Button>
                        <Row>
                            <center>
                                <Link to={"/admin/manage-classes"}>Back</Link>
                            </center>
                        </Row>
                        <br />
                    </Card>
                </Row>
                <br />
                <Row>
                    <>
                        <Row>
                            <div className="classHeader col-5 col-md-4">
                                {classLink ? (
                                    <>
                                        <Link className="classHeader col-5 col-md-3"
                                            to={classLink}>
                                            {className}
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        {className}
                                    </>
                                )}
                            </div>
                            {singleText ? (
                                <>
                                    <div className="classContent col-5 col-md-5">
                                        {singleText}
                                    </div>
                                </>
                            ) :
                                <>
                                    <div className="classContent col-3 col-md-4">
                                        {wednesdayTime}
                                    </div>
                                    <div className="classContent col-4">
                                        {sundaySchoolTime}
                                    </div>
                                </>}
                        </Row>
                        {classSubtitle ? (
                            <>
                                <Row>
                                    <div
                                        className="afp">
                                        {classSubtitle}
                                    </div>
                                </Row>
                            </>
                        ) : (
                            <>
                            </>
                        )}
                        <hr />
                    </>
                </Row>
            </Container>
        </>
    )
}
export default EditClass