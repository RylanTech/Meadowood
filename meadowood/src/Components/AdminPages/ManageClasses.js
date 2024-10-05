import { useContext, useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ClassContext } from "../../Contexts/ClassContexts";
import { Helmet } from "react-helmet";

function ManageClasses() {
    const [classes, setClasses] = useState([])
    const [deleted, setDeleted] = useState(false);

    const { getClasses, deleteClass } = useContext(ClassContext)

    useEffect(() => {
        async function gettingClasses() {
            let classesGotten = await getClasses();
            setClasses(classesGotten);
        }
        gettingClasses();
    }, [deleted, getClasses]);

    function mapThroughClasses() {
        return classes.map((classItem) => {
            return (
                <>
                    <Row>
                        <div className="classHeader col-5 col-md-4">
                            {classItem.classLink ? (
                                <>
                                    <Link className="classHeader col-5 col-md-3"
                                        to={classItem.classLink}>
                                        {classItem.className}
                                    </Link>
                                </>
                            ) : (
                                <>
                                    {classItem.className}
                                </>
                            )}
                        </div>
                        {classItem.singleText ? (
                            <>
                                <div className="classContent col-5 col-md-5">
                                    {classItem.singleText}
                                </div>
                            </>
                        ) :
                            <>
                                <div className="classContent col-3 col-md-5">
                                    <center>{classItem.wednesdayTime}</center>
                                </div>

                                <div className="classContent col-3">
                                    <center>{classItem.sundaySchoolTime}</center>
                                </div>
                            </>
                        }
                    </Row>
                    {classItem.classSubtitle ? (
                        <>
                            <Row>
                                <div
                                    className="afp">
                                    {classItem.classSubtitle}
                                </div>
                            </Row>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                    <Link to={`/admin/manage-classes/edit/${classItem.classId}`}>
                        <Button variant="warning" className="col-6">
                            Edit
                        </Button>
                    </Link>
                    <Button
                        onClick={async () => {
                            await deleteClass(classItem.classId);
                            setDeleted(prev => !prev);

                        }}
                        variant="danger" className="col-6">
                        Delete
                    </Button>
                    <hr />
                </>
            )
        });
    }


    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
            <Container>
                <br />
                <Row>
                    <Link className="col-12"
                        to={'/admin/manage-classes/add-class'}>
                        <Button className="col-12">
                            Add Class
                        </Button>
                    </Link>
                    <br /><br /><br />
                </Row>
                {mapThroughClasses()}
            </Container>
        </>
    )
}
export default ManageClasses